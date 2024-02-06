function startAudio() {
    var audio = document.getElementById('backgroundAudio');
    audio.play();
}


window.addEventListener('load', function(){
    var newVideo = document.getElementById('video_a');
    newVideo.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    newVideo.play();

});