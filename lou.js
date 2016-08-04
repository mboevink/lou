var insertionQ=function(){"use strict";function a(a,b){var d,e="insQ_"+g++,f=function(a){(a.animationName===e||a[i]===e)&&(c(a.target)||b(a.target))};d=document.createElement("style"),d.innerHTML="@"+j+"keyframes "+e+" {  from {  outline: 1px solid transparent  } to {  outline: 0px solid transparent }  }\n"+a+" { animation-duration: 0.001s; animation-name: "+e+"; "+j+"animation-duration: 0.001s; "+j+"animation-name: "+e+";  } ",document.head.appendChild(d);var h=setTimeout(function(){document.addEventListener("animationstart",f,!1),document.addEventListener("MSAnimationStart",f,!1),document.addEventListener("webkitAnimationStart",f,!1)},n.timeout);return{destroy:function(){clearTimeout(h),d&&(document.head.removeChild(d),d=null),document.removeEventListener("animationstart",f),document.removeEventListener("MSAnimationStart",f),document.removeEventListener("webkitAnimationStart",f)}}}function b(a){a.QinsQ=!0}function c(a){return n.strictlyNew&&a.QinsQ===!0}function d(a){return c(a.parentNode)?a:d(a.parentNode)}function e(a){for(b(a),a=a.firstChild;a;a=a.nextSibling)void 0!==a&&1===a.nodeType&&e(a)}function f(f,g){var h=[],i=function(){var a;return function(){clearTimeout(a),a=setTimeout(function(){h.forEach(e),g(h),h=[]},10)}}();return a(f,function(a){if(!c(a)){b(a);var e=d(a);h.indexOf(e)<0&&h.push(e),i()}})}var g=100,h=!1,i="animationName",j="",k="Webkit Moz O ms Khtml".split(" "),l="",m=document.createElement("div"),n={strictlyNew:!0,timeout:20};if(m.style.animationName&&(h=!0),h===!1)for(var o=0;o<k.length;o++)if(void 0!==m.style[k[o]+"AnimationName"]){l=k[o],i=l+"AnimationName",j="-"+l.toLowerCase()+"-",h=!0;break}var p=function(b){return h&&b.match(/[^{}]/)?(n.strictlyNew&&e(document.body),{every:function(c){return a(b,c)},summary:function(a){return f(b,a)}}):!1};return p.config=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b])},p}();"undefined"!=typeof module&&"undefined"!=typeof module.exports&&(module.exports=insertionQ);
var pokemon = ['bulbizarre','herbizarre','florizarre','salamèche','reptincel','dracaufeu','carapuce','carabaffe','tortank','chenipan','chrysacier','papilusion','aspicot','coconfort','dardargnan','roucool','roucoups','roucarnage','rattata','rattatac','piafabec','rapasdepic','abo','arbok','pikachu','raichu','sabelette','sablaireau','nidoran♀','nidorina','nidoqueen','nidoran♂','nidorino','nidoking','mélofée','mélodelfe','goupix','feunard','rondoudou','grodoudou','nosferapti','nosferalto','mystherbe','ortide','rafflesia','paras','parasect','mimitoss','aéromite','taupiqueur','triopikeur','miaouss','persian','psykokwak','akwakwak','férosinge','colossinge','caninos','arcanin','ptitard','tétarte','tartard','abra','kadabra','alakazam','machoc','machopeur','mackogneur','chétiflor','boustiflor','empiflor','tentacool','tentacruel','racaillou','gravalanch','grolem','ponyta','galopa','ramoloss','flagadoss','magneti','magneton','canarticho','doduo','dodrio','otaria','lamantine','tadmorv','grotadmorv','kokiyas','crustabri','fantominus','spectrum','ectoplasma','onix','soporifik','hypnomade','krabby','krabboss','voltorbe','electrode','noeunoeuf','noadkoko','osselait','ossatueur','kicklee','tygnon','excelangue','smogo','smogogo','rhinocorne','rhinoféros','leveinard','saquedeneu','kangourex','hypotrempe','hypocéan','poissirène','poissoroy','stari','staross','mr.mime','insécateur','lippoutou','elektek','magmar','scarabrute','tauros','magicarpe','léviator','lokhlass','métamorph','evoli','aquali','voltali','pyroli','porygon','amonita','amonistar','kabuto','kabutops','ptéra','ronflex','artikodin','electhor','sulfura','minidraco','draco','dracolosse','mewtwo','mew','germignon','macronium','méganium','héricendre','feurisson','typhlosion','kaïminus','crocrodil','aligatueur','fouinette','fouinar','hoot-hoot','noarfang','coxy','coxyclaque','mimigal','migalos','nostenfer','loupio','lanturn','pichu','mélo','toudoudou','togépi','togétic','natu','xatu','wattouat','lainergie','pharamp','joliflor','marill','azumarill','simularbre','tarpaud','granivol','floravol','cotovol','capumain','tournegrin','héliatronc','yanma','axoloto','maraiste','mentali','noctali','cornebre','roigada','feuforêve','zarbi','qulbutoke','girafarig','pomdepic','foretress','insolourdo','scorplane','steelix','snubbull','granbull','qwilfish','cizayox','caratroc','scarhino','farfuret','teddiursa','ursaring','limagma','volcaropod','marcacrain','cochignon','corayon','remoraid','octillery','cadoizo','demanta','airmure','malosse','démolosse','hyporoi','phanpy','donphan','porygon2','cerfrousse','queulorior','débugant','kapoera','lippouti','elekid','magby','ecremeuh','leuphorie','raïkou','enteï','suicune','embrylex','ymphect','tyranocif','lugia','ho-oh','célébi','arcko','massko','jungko','poussifeu','galifeu','brasegali','gobou','flobio','laggron','medhyena','grahyena','zigzaton','lineon','chenipotte','armulys','charmillon','blindalys','papinox','nenupiot','lombre','ludicolo','grainipiot','pifeuil','tengalice','nirondelle','heledelle','goelise','bekipan','tarsal','kirlia','gardevoir','arakdo','maskadra','balignon','chapignon','parecool','vigoroth','monaflemit','ningale','ninjask','munja','chuchmur','ramboum','brouhabam','makuhita','hariyama','azurill','tarinor','skitty','delcatty','tenefix','mysdibule','galekid','galegon','galeking','meditikka','charmina','dynavolt','elecsprint','posipi','negapi','muciole','lumivole','roselia','gloupti','avaltout','carvanha','sharpedo','wailmer','wailord','chamallot','camerupt','chartor','spoink','groret','spinda','kraknoix','vibrannif','libegon','cacnea','cacturne','tylton','altaria','mangriff','seviper','seleroc','solaroc','barloche','barbicha','ecrapince','colhomar','balbuto','kaorine','lilia','vacilys','anorith','armaldo','barpau','milobellus','morpheo','kecleon','polichombr','branette','skelenox','teraclope','tropius','eoko','absol','okéoké','stalgamin','oniglali','obalie','phogleur','kaimorse','coquiperl','serpang','rosabyss','relicanth','lovdisc','draby','drakhaus','drattak','terhal','metang','metalosse','regirock','regice','registeel','latias','latios','kyogre','groudon','rayquaza','jirachi','deoxys','tortipouss','boskara','torterra','ouisticram','chimpenfeu','simiabraz','tiplouf','prinplouf','pingoleon','étourmi','étourvol','étouraptor','keunotor','castorno','crikzik','melocrik','lixy','luxio','luxray','rozbouton','roserade','kranidos','charkos','dinoclier','bastiodon','cheniti','cheniselle','papilord','apitrini','apireine','pachirisu','mustebouée','musteflott','ceribou','ceriflor','sancoki','tritosor','capidextre','baudrive','grodrive','laporeille','lockpin','magirêve','corboss','chaglam','chaffreux','korillon','moufouette','moufflair','archeomire','archeodong','manzaï','mimejr.','ptiravi','pijako','spiritomb','griknot','carmache','carchacrok','goinfrex','riolu','lucario','hippopotas','hippodocus','rapion','drascore','cradopaud','coatox','vortente','ecayon','lumineon','babimanta','blizzi','blizzaroi','dimoret','magnezone','coudlangue','rhinastoc','bouldeneu','elekable','maganon','togekiss','yanmega','phyllali','givrali','scorvol','mammochon','porygon-z','gallame','tarinorme','noctunoir','momartik','motisma','crehelf','crefollet','crefadet','dialga','palkia','heatran','regigigas','giratina','cresselia','phione','manaphy','darkrai','shaymin','arceus'];
var baseline = ['Nuit gravement à la santé', 'EN VAINEUW JOUW ?', '🐑💩', 'Ma patrie c\'est lou.lt', 'Petits amours épistolaires', 'DE ?', 'L\'intelligentsia française', 'L\'agora 2.0', 'On ferme une école, on ouvre une prison', 'CIVILISE TOI FILS DE PUTE', 'Rien ne doit être pas pris en vu', 'Comment fais tu pour toucher forêt fameux ?', 'Mauvaise expérience', 'Vous etes bizarre ici :lol:', 'tu devrais faire le réflexe par toi meme d\'éviter de ne rien dire', 'Est-ce que ça changerait quelquechose si tu avais la réponse ?', 'donne mou le facebook', 'Pourquoi vous faites çaAAAaaaAAAaaaA', 'JPARLE PAS AUX SALOPES QUI SE LA JOUENT RANDOM', 'ben pourquoi ?', 'j\'aurais voul uuuuuuuuuuuuuuㅐ etre un nwe nwe rce'];
var head = ['url(https://static.tumblr.com/bogk4us/Xrklvfe3l/-pika.jpg) #f0e943 75% -203px no-repeat', 'url(https://i.imgur.com/Gp3ZhI8.jpg) #549fbf 15% 0 / contain no-repeat', 'url(https://s31.postimg.org/74ifa5laz/2314782.jpg) #dc8e4c 80% -45px no-repeat', 'url(https://67.media.tumblr.com/69d9fb85b0c7982bb1bdb753dcaaa684/tumblr_n4nmevqVIX1s2b58zo8_500.jpg) #b399c6 75% -115px no-repeat', 'url(https://66.media.tumblr.com/e13328341a7ccae3e3fe6836d19c6309/tumblr_n4nmevqVIX1s2b58zo3_500.png) #5e85a2 75% -115px no-repeat', 'url(https://67.media.tumblr.com/ebc29ea9a7d1c53db23d0c3ec5210607/tumblr_n4nmevqVIX1s2b58zo1_500.jpg) #f4ea3a 75% -40px no-repeat', 'url(https://img10.deviantart.net/6b03/i/2013/141/c/1/meowth_persian_pokemon_wallpaper_by_thepyzu-d66131b.jpg) #ffe682 75% -425px no-repeat', 'url(https://orig15.deviantart.net/e183/f/2011/288/d/e/arcanine_simplism_wallpaper_by_stonah-d4cvg7x.png) #e95d0e -5px -390px no-repeat', 'url(https://41.media.tumblr.com/11a501ec35542bb4006d799d838e22de/tumblr_n4nmevqVIX1s2b58zo2_500.jpg) #8086c0 75% -105px no-repeat'];
var timestamps = [], actVal = 0, curVal = 0;
$('#nom').append('<small style="display:block; z-index:10;">« ' + baseline[Math.floor(Math.random() * baseline.length)] + ' »</small>');
$('main').append('<div id="container" style="width:185px; height:185px; position:fixed; bottom:-55px; right:0px;"></div>');
$('main').append('<div class="mod" style="bottom:71px; right:158px;"><label style="float:left; color:#FFF; padding:0 5px;">Cacher infos</label><input type="checkbox" id="hidelog" /></div>');
$('main').append('<div class="mod" style="bottom:93px; right:141px"><label style="float:left; color:#FFF; padding:0 5px;">Anti flood</label><input type="checkbox" id="antilag" /></div>');
$('head').append('<style type="text/css">.mod { position:fixed; background:silver; border-radius:20px; padding:2px; border:1px solid #666; } #chatbox { overflow-x:hidden; display:flex; flex-direction:column-reverse; } @-moz-document url-prefix() { #chattbl { height:100%; display:flex; flex-direction:column; } } #chattbl > tr:not(.backlog, .log:first-of-type) { opacity:0; transition:opacity 200ms; } header { background:' + head[Math.floor(Math.random() * head.length)] + '; text-align:center; } td:nth-of-type(3) { display:none; } #chat small { font-size:10px; float:right; max-width:60px; width:60px; overflow-x:hidden; } #userlist div, #chat td:nth-of-type(1), #chat td:nth-of-type(1) * { cursor:pointer; -webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none; } #userlist, #input, body, tr { background:#f5f5f5 !important; } #chat td:nth-of-type(2) img { max-width:100%; max-height:360px; } #chat td:not(:last-child) { border-right:0; } #input { text-indent:5px; outline:0; border:0; border-top:1px solid #666; } #userlist { margin-bottom:120px; padding-bottom:5px; border-left:0; } #userlist div { border-bottom:0; } #chat { border-right: 1px solid #666; } #nom { text-shadow:0 1px 1px #666; padding:5px; font-weight:bold; color:#FFF; position:absolute; left:0; right:185px; } .log td:nth-of-type(2) { text-align:center; } #volrange { position:relative; top:-2px; z-index:5; } #cover { z-index:15; } #window { z-index:20; } label:not(.sound) { position:relative !important; top:3px !important; } .sound { font-size:23px; } label + img { position:relative; left:2px; margin-left:0 !important; } img { vertical-align:middle; } #chattbl > tr:nth-of-type(1) { opacity:0.2 !important; } #chattbl > tr:nth-of-type(2) { opacity:0.4 !important; } #chattbl > tr:nth-of-type(3) { opacity:0.6 !important; } #chattbl > tr:nth-of-type(4) { opacity:0.8 !important; } .mod > label { display:none; } .mod:hover > label { display:inline-block; }</style>');
$('#prefs div:nth-of-type(5) a').prepend('<img src="https://orig12.deviantart.net/32dd/f/2015/137/c/c/richard_stallman_approves_by_terrance8d-d8tq64f.png" />');
$('#prefs').prepend('<div><input type="checkbox" id="preview" checked><label for="preview"> Images et vidéos</label></div>');
$('#prefs').append('<div><a href="LaMenuiserie" target="_blank">Salon VIP</a></div>');
$('#prefs').append('<div><pre style="background:#FFE; border:2px dashed #666; font-size:12px; padding:1em;">08/07/2016 - Mise à jour du scriptennw !<br />Vous pouvez supprimer entièrement la ligne 9, celle qui dit :<br />https://cdn.rawgit.com/adampietrasiak/jquery.initialize/master/jquery.initialize.js<br />Puis la ligne 4, celle qui dit loult.family sans /* à la fin. Le script devrait moins ramer.</pre></div>');
$('#volrange').prependTo('#sidebtns');
$('#prefs div:nth-of-type(3)').remove();
function improve(i) {
	i = i.replace(/[\"&<>]/gi, function (a){ return { '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;'}[a]; });
	i = i.replace(/^(&gt;.*)/gi, '<span style="color:#789922">$1</span>');
	i = i.replace(/-([^-]*)-/gi, function (b){ var i = $.inArray(b.slice(1, -1).toLowerCase(), pokemon); return i !== -1 ? ('https://loult.family/pokemon/' + ('000' + (i + 1)).slice(-3) + '.gif') : b; });
	i = i.replace(/(?:http:\/\/)?(?:\w+)?(noelshack.comm.free.fr|fbcdn-sphotos-e-a.hubatka.cz)\/(?:\w+)?/gi, '-screamer de merde bloqué- 👌');
	i = i.replace(/(?:https?:\/\/)?(?:www\.)?vocaroo.com\/i\/(\w+)/gi, '<embed src="/player.swf?playMediaID=$1&autoplay=0" width="148" height="44" wmode="transparent" type="application/x-shockwave-flash"></embed>');
    if($('#preview').is(':checked'))
    {
        i = i.replace(/(?:https?:\/\/)?(?:www\.)?(noelshack.com)\/(\d{4})-(\d{2})-(\w+)/gi, 'http://image.$1/fichiers/$2/$3/$4');
        i = i.replace(/(?:https?:\/\/)?(?:www\.)?youtu(?:be\.com\/watch\?(?:.*?&(?:amp;)?)?v=|\.be\/)([\w\-]+)(?:&(?:amp;)?[\w\?=]*)?/gi, '<iframe width="480" height="360" src="https://www.youtube-nocookie.com/embed/$1?rel=0" frameborder="0" allowfullscreen></iframe>');
    }
	i = i.replace(/(\b(https?):\/\/(?!www\.youtube-nocookie\.com)[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, '<a href="$1" target="_blank"> $1 </a>');
    if($('#preview').is(':checked'))
    {
        i = i.replace(/[^"](\b(?:https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(jpe?g|gif|png|bmp))[^"]/gi, '<img src="$1" />');
        i = i.replace(/[^"](\b(?:https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]\.(webm|mp4|ogg))[^"]/gi, '<video width="480" height="360" controls><source src="$1" type="video/$2"></video>');
    }
	return i;
}
insertionQ('#chattbl > tr').every(function(element){
    var t = $(element).children('td:nth-of-type(2)').text();
    var r = improve(t);
    if(typeof bot !== 'undefined' && bot === true && !$(element).hasClass('backlog'))
        respond(t);
//    if(r !== t && $('#chatbox')[0].scrollTop - $('#chatbox')[0].scrollHeight > -900)
 //       setTimeout($('#chatbox').animate({scrollTop:$('#chatbox')[0].scrollHeight + 500}, 100), 500);
    if(!$(element).hasClass('log'))
    {
        $(element).children('td:nth-of-type(2)').html(r + '<small>' + new Date().toLocaleString('fr-FR', {hour: '2-digit', minute:'2-digit', second:'2-digit'}) + '</small>');
        $(element).children('td:nth-of-type(1)').click(function(){ $('#input').val($('#input').val() + ' -' + $(element).children('td:nth-of-type(1)').text().trim() + '- '); });
    }
    timestamps.push(Date.now());
    if($('#antilag').is(':checked'))
        $('tr:lt(-20)').remove();
    if(!$(element).hasClass('log') || ($(element).hasClass('log') && !$('#hidelog').is(':checked')))
        $(element).css('opacity', '1');
    else
        $(element).hide();
});
insertionQ('#userlist > div').every(function(element){
    $(element).children('label:nth-of-type(1)').click(function(){ $('#input').val($('#input').val() + ' -' + $(this).text() + '- '); });
});
$(function () {
    $('#userlist > div label:nth-of-type(1)').click(function(){ $('#input').val($('#input').val() + ' -' + $(this).text() + '- '); });
    $('#hidelog').change(function() {
        if($(this).is(':checked'))
            $('.log').hide();
        else
            $('.log').show();
        setTimeout($('#chatbox').animate({scrollTop:$('#chatbox')[0].scrollHeight + 500}, 100), 500);
    });
    $('#container').highcharts({
        chart: { type: 'gauge', backgroundColor: null }, title: null, credits: false, tooltip: false, pane: { size: '95%', startAngle: -120, endAngle: 120, background: null },
        yAxis: {
            min: 0, max: 600, minorTickInterval: 'auto', minorTickWidth: 1, minorTickLength: 5, minorTickPosition: 'inside', minorTickColor: '#555', tickPixelInterval: 30, tickWidth: 2, tickPosition: 'inside', tickLength: 10, tickColor: '#444',
            labels: { step: 2, rotation: 'auto' }, title: { text: 'msg/min', y: 20 }, plotBands: [{ from: 0, to: 200, color: '#5B4' }, { from: 200, to: 400, color: '#DD0' }, { from: 400, to: 600, color: '#D44' }] },
        series: [{ name: 'Messages', data: [ 0 ], dataLabels: { borderWidth: 0, y: 10, style: { fontSize: '16px' } }, dial: { rearLength: '20%' } }]
    },
    function (chart) {
        setInterval(function () {
            var point = chart.series[0].points[0], newVal, span;
            for(var i = 0; i < timestamps.length; i++)
                if(timestamps[i] + 60000 < Date.now())
                    timestamps.splice(i, 1);
                else
                    break;
            span = (timestamps.length > 1 ? timestamps[timestamps.length -1] - timestamps[0] : 60000);
            newVal = Math.max(0, Math.min(((60000 * timestamps.length) / span), 650));
            curVal = (timestamps.length > actVal ? newVal : curVal - (curVal * 0.02));
            actVal = timestamps.length;
            point.update(Math.round(curVal));
        }, 200);
    });
});
