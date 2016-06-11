var timestamps = [], actVal = 0, curVal = 0;
function s(i) {
	var j = i;
    i = i.replace(/[\"&<>]/g, function (a){ return { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}[a]; });
	i = i.replace(/^(&gt;.*)/gi, '<span style="color:#789922">$1</span>');
	i = i.replace(/(?:http:\/\/)?(?:\w+)?noelshack.com.free.fr\/(?:\w+)/gi, '-screamer de merde bloqué- 👌');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?(noelshack.com)\/(\d{4})-(\d{2})-(\w+)/gi, 'http://image.$1/fichiers/$2/$3/$4');
//	i = i.replace(/(?:https?:\/\/)?(?:www\.)?vocaroo.com\/i\/(\w+)/gi, '<embed src="http://vocaroo.com/player.swf?playMediaID=$1&autoplay=0" width="148" height="44" wmode="transparent" type="application/x-shockwave-flash"></embed>');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w\?=]*)?/gi, '<iframe width="480" height="360" src="https://www.youtube-nocookie.com/embed/$1?rel=0" frameborder="0" allowfullscreen></iframe>');
	i = i.replace(/(\b(https?):\/\/(?!www\.youtube-nocookie\.com)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$1" target="_blank"> $1 </a>');
	i = i.replace(/[^"](\b(?:https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(jpe?g|gif|png|bmp))[^"]/gi, '<img src="$1" />');
	i = i.replace(/[^"](\b(?:https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(webm|mp4|ogg))[^"]/gi, '<video width="480" height="360" controls><source src="$1" type="video/$2"></video>');
	return i;
}
$('tr').initialize(function() {
    $(this).children('td:nth-of-type(3)').text($(this).children('td:nth-of-type(3)').text().split(',')[1]);
    $(this).children('td:nth-of-type(2)').html(s($(this).children('td:nth-of-type(2)').text()));
    $(this).children('td:nth-of-type(1)').click(function(){ $('#input').val($('#input').val() + $(this).text()); });
    if($('#chatbox')[0].scrollTop - $('#chatbox')[0].scrollHeight > -1200) $('#chatbox').animate({scrollTop:$('#chatbox')[0].scrollHeight}, 100);
    timestamps.push(Date.now());
});
$('main').append('<div id="container" style="width:240px; height:240px; position:fixed; bottom:-50px; right:-27px;"></div>');
$('head').append('<style type="text/css">header { background:url(http://static.tumblr.com/bogk4us/Xrklvfe3l/-pika.jpg) #f0e943 75% -200px no-repeat; text-align:center; } tr:nth-child(odd) td:nth-of-type(1) { background:#EEE; } tr:nth-child(odd) td:nth-of-type(2) { background:linear-gradient(to right, #EEE 0%, #f5f5f5 100%); } tr:nth-child(odd) td:nth-of-type(3) { background:#f5f5f5; } td:nth-of-type(1), td:nth-of-type(1) * { cursor:pointer; -webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; } #userlist, #input { background:#f5f5f5; } td:nth-of-type(2) img { max-width:100%; max-height:360px; } td:not(:last-child) { border-right:0; } #userlist div { border-bottom:0; } #nom { text-shadow:0 1px 1px #666; font-weight:bold; color:#FFF; position:absolute; left:185px; right:310px; } .log td:nth-of-type(2) { text-align:center; } #volrange { position:relative; top:-2px; }</style>');
$('header').prepend('<a href="LaMenuiserie" target="_blank" style="float:right; color:#000; text-decoration:none; padding:20px 10px;">🔨</a>');
$('#volrange').prependTo('#sidebtns');
/* cre pce background:url(http://choualbox.com/Img/138417873956.jpg) center/cover; */
/* background:linear-gradient(to bottom, #1e5799 0%,#7db9e8 100%); */
$(function () {
  $('#container').highcharts({
    chart: {
      type: 'gauge',
      backgroundColor: null
    },
    title: null,
    credits: false,
    tooltip: false,
    pane: {
      startAngle: -140,
      endAngle: 140,
      background: null
    },
    yAxis: {
      min: 0,
      max: 500,
      minorTickInterval: 'auto',
      minorTickWidth: 1,
      minorTickLength: 5,
      minorTickPosition: 'inside',
      minorTickColor: '#555',
      tickPixelInterval: 30,
      tickWidth: 2,
      tickPosition: 'inside',
      tickLength: 10,
      tickColor: '#444',
      labels: {
        step: 2,
        rotation: 'auto'
      },
      title: {
        text: 'msg/min',
        y: 15
      },
      plotBands: [{
        from: 0,
        to: 100,
        color: '#5B4'
      }, {
        from: 100,
        to: 300,
        color: '#DD0'
      }, {
        from: 300,
        to: 500,
        color: '#D44'
      }]
    },
    series: [{
      name: 'Messages',
      data: [ 0 ],
      dataLabels: {
        borderWidth: 0,
        y: 20
      },
      dial: {
        rearLength: '20%'
      }
    }]
  },
  function (chart) {
    setInterval(function () {
      var point = chart.series[0].points[0], newVal;
      for (var i = 0; i < timestamps.length; i++)
        if(timestamps[i] + 60000 < Date.now())
        	timestamps.splice(i, 1);
      newVal = Math.max(0, Math.min((timestamps.length), 500));
      curVal = (actVal >= newVal ? Math.floor(curVal - (curVal * 0.02)) : newVal);
      actVal = newVal;
      point.update(curVal);
    }, 100);
  });
});
