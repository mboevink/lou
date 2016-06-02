var chbx = $('#chatbox')[0];
function s(i) {
	var j = i;
	i = i.replace(/^(>.*)/gi, '<span style="color:#789922">$1</span>');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?vocaroo.com\/i\/(\w+)/gi, '<embed src="http://vocaroo.com/player.swf?playMediaID=$1&autoplay=0" width="148" height="44" wmode="transparent" type="application/x-shockwave-flash"></embed>');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w\?=]*)?/gi, '<iframe width="480" height="360" src="https://www.youtube-nocookie.com/embed/$1?rel=0" frameborder="0" allowfullscreen></iframe>');
	i = i.replace(/(\b(https?):\/\/(?!www\.youtube-nocookie\.com|vocaroo\.com)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$1" target="_blank"> $1 </a>');
	i = i.replace(/[^"](\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(jpe?g|gif|png|bmp))[^"]/gi, '<img src="$1" />');
	// i = i.replace(new RegExp('\\b(' + me.pseudo.fr + '|' + me.pseudo.en + ')\\b', 'gi'), '<strong style="color:' + me.color + '">$1</strong>');
	if(j !== i && chbx.scrollTop === (chbx.scrollHeight - chbx.offsetHeight))
		setTimeout(function(){ chbx.scrollTop = chbx.scrollHeight; }, 50);
	return i;
}
$('tr').initialize(function() {
    $(this).children('td:nth-of-type(2)').html(s($(this).children('td:nth-of-type(2)').text()));
    $(this).children('td:nth-of-type(1)').click(function() { $('#input').val($('#input').val() + $(this).text()); });
});
$('head').append('<style type="text/css">tr:nth-child(odd) td:nth-of-type(1) { background:#EEE; } tr:nth-child(odd) td:nth-of-type(2) { background:linear-gradient(to right, #EEE 0%, #f5f5f5 100%); } tr:nth-child(odd) td:nth-of-type(3) { background:#f5f5f5; } td:nth-of-type(1), td:nth-of-type(1) * { cursor:pointer; -webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; } #userlist, #input { background:#f5f5f5; } td:nth-of-type(2) img { max-width:100%; max-height:360px; } td:not(:last-child) { border-right:0; } #userlist div { border-bottom:0; } header { background:linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%); color:#FFF; text-align:center; } .log td:nth-of-type(2) { text-align:center; }</style>');
