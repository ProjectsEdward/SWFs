// https://cdn.i-ready.com/instruction/phoenix/release-1.10.x/1/?csid=DI.MATH.NO.8.1000.phx.10_e54f337f-8d0f-42ff-92ba-71ca4efada9e_M_math&type=TUTORIAL#/lesson/math/DI_MATH_NO_8_1000_10
// https://mrcoles.com/bookmarklet/
// https://projectsedward.github.io/SWFs/DDEXT.js

function maindd(){
//fetch elements
var mainDD = document.getElementsByClassName("clssweater-school-bd")[0];
var video = document.getElementsByTagName("video")[0];
var musscr = document.getElementsByTagName("script")[37];

var imported = document.createElement('script');
imported.src = 'https://projectsedward.github.io/SWFs/DDEXT.js';
document.head.appendChild(imported);
  
var dropdiv2= document.createElement('div');
dropdiv2.innerHTML= '<style>@import url(\'https://fonts.googleapis.com/css?family=Roboto:500&display=swap\');</style>';
//Create dropdown
var dropdiv= document.createElement('div');
dropdiv.innerHTML= '<select style="background: #2b99ff; padding: 10px; color: #fff; position: absolute; opacity: 1; left: 175px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf">Doom</option><option value="https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf">SH Basketball</option><option value="https://projectsedward.github.io/SWFs/Happy%20Wheels.swf">Happy Wheels</option><option value="https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf">vvvvvv</option><option value="https://projectsedward.github.io/SWFs/Tank_Trouble.swf">Tank Trouble</option><option value="https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf">Clicker Heroes</option><option value="https://projectsedward.github.io/SWFs/BTD5.swf">BTD5</option><option value="https://projectsedward.github.io/SWFs/SuperMario63.swf">Super Mario 63</option></select><a style="border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 310px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setSWF() type=button>Play</button>';
//add id to div
var id = document.createAttribute("id");
id.value = 'dddiv';
dropdiv.setAttributeNode(id);
//get dropdown divs
var dropd = document.getElementById("dropd");
var swfbutton = document.getElementById("swfbutton");
//remove video and replace
video.parentNode.removeChild(video);
musscr.parentNode.removeChild(musscr);
mainDD.parentNode.replaceChild(dropdiv, mainDD);
}
