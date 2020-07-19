// https://cdn.i-ready.com/instruction/phoenix/release-1.10.x/1/?csid=DI.MATH.NO.8.1000.phx.10_e54f337f-8d0f-42ff-92ba-71ca4efada9e_M_math&type=TUTORIAL#/lesson/math/DI_MATH_NO_8_1000_10
// https://mrcoles.com/bookmarklet/
// https://projectsedward.github.io/SWFs/DDEXT.js

//Register body, video, and tempory div
var body = document.body;
var head = document.head;
var video = document.getElementsByTagName("video")[0];
var tempdiv = document.createElement('div');


function setup(url){
//fetch elements
var mainElement = document.getElementsByClassName("clssweater-school-bd")[0];
var musscr = document.getElementsByTagName("script")[37];

var imported = document.createElement('script');
imported.src = url;
document.head.appendChild(imported);

//create temp div
var id = document.createAttribute("id");
id.value = 'tempdiv';
tempdiv.setAttributeNode(id);

//define non-video canvas
var canvasno = document.getElementsByTagName("canvas")[0];

//set video src to nothing
var src = document.createAttribute("src");
src.value = "";
video.setAttributeNode(src);

//replacem main canvas with temp div
head.removeChild(musscr);
//body.removeChild(canvasno);
body.replaceChild(tempdiv, mainElement);
setTimeout(function() { setupCall();}, 500);
}
