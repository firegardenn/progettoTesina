var video = document.querySelector('.video');
var juice = document.querySelector('.orange-juice');
var bar = document.querySelector('.orange-bar');
var btn = document.getElementById('play-pause');
var orangeBar = document.getElementById('.orange-bar');
var curtimetext = document.getElementById("curtimetext");
var durtimetext = document.getElementById("durtimetext");

function togglePlayPause() {
    if (video.paused) {
        btn.className = 'pause';
        video.play();
    } else {
        btn.className = 'play';
        video.pause();
    }
}

function scrub(e) {
    const scrubTime = (e.offsetX / bar.offsetWidth) * video.duration;
    video.currentTime = scrubTime
        //sconsole.log(e);
}
btn.onclick = function() {
    togglePlayPause();
}
video.addEventListener('timeupdate', function() {
    var juicePos = video.currentTime / video.duration;
    juice.style.width = juicePos * 100 + "%";
    if (video.ended) {
        btn.className = 'play';
    }
})


bar.addEventListener('click', scrub);