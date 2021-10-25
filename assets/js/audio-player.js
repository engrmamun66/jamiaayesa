var song = new Audio;
var muted = false;
var vol = 1;
var animations = ['animate__lightSpeedInRight',
'animate__slideInDown',
'animate__slideInLeft',
'animate__slideInRight',
'animate__slideInUp',
'animate__flipInY',
'animate__jackInTheBox',
'animate__zoomInLeft',
'animate__zoomInUp',
]
song.type = 'audio/mpeg';
// song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';//Audio file source url
song.src = 'ya-elahi.mp3';//Audio file source url
function skip(time) {
	if (time == 'back') {
		song.currentTime = (song.currentTime - 5);
	} else if (time == 'fwd') {
		song.currentTime = (song.currentTime + 5);
	}
}
function playpause() {

	if (!song.paused) {
		song.pause();
		document.getElementById('play-pause').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
		document.getElementById('gloweffect').classList.remove("player-glow");
		document.getElementById('player-image').classList.remove("round");		
	} else {
		song.play();
		document.getElementById('play-pause').innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
		document.getElementById('gloweffect').classList.add("player-glow");
		document.getElementById('player-image').classList.add("round");			
	}
	
}
function stop() {
	song.pause();
	song.currentTime = 0;
	document.getElementById('player-seek').value = 0;
	document.getElementById('play-pause').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	document.getElementById('gloweffect').classList.remove("player-glow");
	document.getElementById('player-image').classList.remove("round");			
}
function setPos(pos) {
	song.currentTime = pos;
}
function mute() {
	if (muted) {
		song.volume = vol;
		muted = false;
		document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
	} else {
		song.volume = 0;
		muted = true;
		document.getElementById('mute').innerHTML = '<i class="fa fa-volume-off"></i>';
	}
}
function setVolume(volume) {
	song.volume = volume;
	vol = volume;
}
song.addEventListener('timeupdate',function() {
	curtime = parseInt(song.currentTime,10);
	var duration = song.duration
	document.getElementById('player-seek').max = duration;
	document.getElementById('player-seek').value = curtime;

	if(Math.floor(duration) == curtime){
		document.getElementById('play-pause').innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
	}
})

function getRandomAnimation() {
  var rand = Math.floor(Math.random() * animations.length);
  console.log(rand);
  return animations[rand];
}
