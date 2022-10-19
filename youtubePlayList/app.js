// 유튜브 iframe API 사용해서 플레이어 삽입

// Iframe Player API를 비동기적으로 로드
var tag = document.cleateElement('script');

tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementById("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Iframe을 생성하여 원하는 동영상 정보를 받아오는 기능
var player;
function onYouTubeIframeAPIReady(){
    player = new YT.Player('player', {
        height: '360',
        width : '640',
        videoId : 'UC8ixhiHeptXE5tD9JJ98oXg',
        playerVars: {
            'rel' : 0,
            'controls' : 0,
            'autoplay' : 0,
            'mute' : 1,
            'loop' : 0,
            'playsinline' : 1,
            'playlist' : 'UC8ixhiHeptXE5tD9JJ98oXg'        
        },
        events: {
            'onReady' : onPlayerReady,
            'onStateChange' : onPlayerStateChange
        }
    });
}

// API가 준비되면 비디오를 불러옴
function onPlayerReady(event){
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event){
    if(event.data == YT.PlayerState.PLAYING && !done){
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

function stopVideo(){
    player.stopVideo();
}

    
