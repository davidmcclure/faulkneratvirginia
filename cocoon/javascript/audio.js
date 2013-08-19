$(document).ready(function() {
  $('.icon-play-sign').click(function() {

    $(this).hide('slow');

    var start = $(this).attr('data-start');
    var end = $(this).attr('data-end');

    var audio = new Audio();
    var canPlayOgg = !!audio.canPlayType && audio.canPlayType('audio/ogg; codecs="vorbis"') !== "";
    var file = $('.entireclip > audio').attr('id');

    var baseUrl = "http://faulkner.lib.virginia.edu/static/audio/";
    baseUrl += canPlayOgg ? file + ".ogg" : file + '.mp3';
    baseUrl += "#t=" + start + "," + end;

    audio.setAttribute('src', baseUrl);
    audio.controls = true;
    audio.preload = 'auto';

    $(this).parent().append(audio).show('slow');
    audio.play();

  });
});
