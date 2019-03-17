console.log("hello wolrd ");

  vid = document.getElementsByTagName('video')[0];

 var buton=document.getElementsByClassName('vjs-big-play-button')[0];


vid.muted=true;
 var promise = document.querySelector('video').play();

 if (promise !== undefined) {
      promise.then(_ => {
      // Autoplay started!
  }).catch(error => {
     // Autoplay was prevented.
     // Show a "Play" button so that user can start playback.
   });
 }
 vid.muted=false;

 promise =vid.requestFullscreen();
 if (promise !== undefined) {
      promise.then(_ => {
      // Autoplay started!
  }).catch(error => {
     // Autoplay was prevented.
     // Show a "Play" button so that user can start playback.
   });
 }


   isad=true;
// getgffhfghfgh
vid.onplay = function(){
  isad=vid.getAttribute('src').search('blob')==-1;
console.log(isad);
 };






  vid.onended=function(e){
     console.log('end');
      if(!isad)
      {
        setTimeout(nextEpisode,5000);
      }
    };








function nextEpisode()
{
//  console.log(document.getElementsByClassName('slick-current')[0].nextSibling.firstElementChild);
var next=document.getElementsByClassName('slick-current')[0].nextSibling.firstElementChild;
window.location.replace(next.getAttribute('episode-url'));
//console.log(getAttribute('episode-url'));



}
