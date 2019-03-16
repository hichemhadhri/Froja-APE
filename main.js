console.log("hello wolrd ");

var vid = document.getElementsByTagName('video')[0];


   isad=true;

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
