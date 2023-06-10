'use stric';
const swither = document.querySelector('.btn');
swither.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    const themeName = document.body.className;
    if (themeName == 'dark-theme') {
        swither.textContent = 'Light';
    } else {
        swither.textContent = 'Dark';
    }
    console.log('current theme: ', themeName);
});

function cargarAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0px',
        width: '0px',
        playerVars: {
            listTyoe: 'playlist',
            list: "PL_OV5OC2JCZ8-lq-ffMue3CKZMPmvvcBJ"
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function reproducirVideo() {
    player.playVideo();
}

function pausarVideo() {
    player.pauseVideo();
}

function nextVideo() {
    player.nextVideo();
}

document.addEventListener("DOMContentLoaded", cargarAPI);
document.getElementById("reproducir").addEventListener("click", reproducirVideo);
document.getElementById("pausar").addEventListener("click", pausarVideo);
document.getElementById("siguiente").addEventListener("click", nextVideo)