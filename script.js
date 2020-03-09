var vid, seekslider, durtimetext, fullscreenbtn;;
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

function clickPause() {
    btn.className = 'play';
    video.pause();
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

function initializePlayer() {
    vid = document.querySelector(".video");
    vid.addEventListener("timeupdate", seektimeupdate, false);
    seekslider = document.querySelector(".orange-bar");
    seekslider.addEventListener("change", vidSeek, false);
    volumeslider.addEventListener("change", setvolume, false);
    volumeslider = document.getElementById("volumeslider");

}




function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}

function seektimeupdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if (cursecs < 10) {
        cursecs = "0" + cursecs;
    }
    if (dursecs < 10) {
        dursecs = "0" + dursecs;
    }
    if (curmins < 10) {
        curmins = "0" + curmins;
    }
    if (durmins < 10) {
        durmins = "0" + durmins;
    }

    curtimetext.innerHTML = curmins + ":" + cursecs;
    durtimetext.innerHTML = durmins + ":" + dursecs;
}


function setvolume() {
    vid.volume = volumeslider.value / 100;
}
window.onload = initializePlayer;



function toggleFullScreen() {
    if (vid.requestFullScreen) {
        vid.requestFullScreen();
    } else if (vid.webkitRequestFullScreen) {
        vid.webkitRequestFullScreen();
    } else {
        vid.mozRequestFullScreen();
    }
}

window.onload = initializePlayer;
var iconHide = document.querySelector(".icon");

video.ontimeupdate = function() { myFunction() }

function myFunction() {
    // Display the current position of the video in a p element with id="demo"
    document.getElementById("icon2").innerHTML = "<button style='background:red; border-radius: 35px; border:0; outline:0;' onclick='clickPause()'><a href='https://www.mps.it/' target='_blank'><img src='icon/banca.png' height='42' width='42'></button>";
    if (video.currentTime > 5 && video.currentTime < 10) {
        //video.pause();
        icon2.style.display = "inline";
    } else {
        icon2.style.display = "none";
    }
}