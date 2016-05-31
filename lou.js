function s(i) {
	var j = i;
	i = i.replace(/^(>.*)/gi, '<span style="color:#789922">$1</span>');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w\?=]*)?/gi, '<iframe width="480" height="360" src="https://www.youtube-nocookie.com/embed/$1?rel=0" frameborder="0" allowfullscreen></iframe>');
	i = i.replace(/(\b(https?):\/\/(?!www\.youtube-nocookie\.com)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$1" target="_blank"> $1 </a>');
	i = i.replace(/[^"](\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(jpe?g|gif|png|bmp))[^"]/gi, '<img src="$1" />');
	// i = i.replace(new RegExp('\\b(' + me.pseudo.fr + '|' + me.pseudo.en + ')\\b', 'gi'), '<strong style="color:' + me.color + '">$1</strong>');
	if(j !== i && $('#chatbox')[0].scrollTop === ($('#chatbox')[0].scrollHeight - $('#chatbox')[0].offsetHeight))
		setTimeout(function(){ $('#chatbox')[0].scrollTop = $('#chatbox')[0].scrollHeight; }, 100);
	return i;
}
$('tr').initialize(function() {
    $(this).children('td:nth-of-type(2)').html(s($(this).children('td:nth-of-type(2)').text()));
    $(this).children('td:nth-of-type(1)').click(function() { $('#input').val( $('#input').val() + $(this).text()); });
});
