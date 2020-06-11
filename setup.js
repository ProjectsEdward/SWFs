// https://cdn.i-ready.com/instruction/phoenix/release-1.10.x/1/?csid=DI.MATH.NO.8.1000.phx.10_e54f337f-8d0f-42ff-92ba-71ca4efada9e_M_math&type=TUTORIAL#/lesson/math/DI_MATH_NO_8_1000_10
// https://mrcoles.com/bookmarklet/
// https://projectsedward.github.io/SWFs/DDEXT.js

function setup(url){
//fetch elements
var mainElement = document.getElementsByClassName("clssweater-school-bd")[0];
var video = document.getElementsByTagName("video")[0];
var musscr = document.getElementsByTagName("script")[37];
var body = document.getElementsByTagName("body")[0];

var imported = document.createElement('script');
imported.src = url;
document.head.appendChild(imported);

//create temp div
var tempdiv = document.createElement('div');
var id = document.createAttribute("id");
id.value = 'tempdiv';
tempdiv.setAttributeNode(id);


//remove video, replace with temp div
video.parentNode.removeChild(video);
musscr.parentNode.removeChild(musscr);
mainElement.parentNode.replaceChild(tempdiv, mainElement);
setupCall();
}
