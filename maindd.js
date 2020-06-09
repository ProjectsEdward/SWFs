// https://cdn.i-ready.com/instruction/phoenix/release-1.10.x/1/?csid=DI.MATH.NO.8.1000.phx.10_e54f337f-8d0f-42ff-92ba-71ca4efada9e_M_math&type=TUTORIAL#/lesson/math/DI_MATH_NO_8_1000_10
// https://mrcoles.com/bookmarklet/
// https://projectsedward.github.io/SWFs/DDEXT.js

function maindd(){
//fetch elements
var mainDD = document.getElementsByClassName("clssweater-school-bd")[0];
var video = document.getElementsByTagName("video")[0];
var musscr = document.getElementsByTagName("script")[37];
var body = document.getElementsByTagName("body")[0];

var imported = document.createElement('script');
imported.src = 'https://projectsedward.github.io/SWFs/DDEXT.js';
document.head.appendChild(imported);

var sha = document.createElement('script');
sha.src = 'https://geraintluff.github.io/sha256/sha256.min.js';
document.head.appendChild(sha);

var dropstyle= document.createElement('style');
dropstyle.innerHTML= '@import url(\'https://fonts.googleapis.com/css?family=Roboto:500&display=swap\');';

//Create dropdown div and create dropdown
var dropdiv = document.createElement('div');
var ddboxtop = (window.innerHeight * 0.02) + 10
var ddbuttontop = (window.innerHeight * 0.02) + 49
dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf">Doom</option><option value="https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf">SH Basketball</option><option value="https://projectsedward.github.io/SWFs/Happy%20Wheels.swf">Happy Wheels</option><option value="https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf">vvvvvv</option><option value="https://projectsedward.github.io/SWFs/Tank_Trouble.swf">Tank Trouble</option><option value="https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf">Clicker Heroes</option><option value="https://projectsedward.github.io/SWFs/BTD5.swf">BTD5</option><option value="https://projectsedward.github.io/SWFs/SuperMario63.swf">Super Mario 63</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setSWF() type=button>Go</button>';

//Create reset div and create dropdown button
var resetdiv= document.createElement('div');
resetdiv.innerHTML= '<a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 0px; top: 364px; font-family: \'Roboto\', sans-serif;" noreferrer" id="resetbutton" onclick=resetDD() type=button>Reset</a>';

//add id to div
var id = document.createAttribute("id");
id.value = 'dddiv';
dropdiv.setAttributeNode(id);

//get dropdown divs
var dropd = document.getElementById("dropd");
var swfbutton = document.getElementById("swfbutton");

//remove video, replace with div
video.parentNode.removeChild(video);
musscr.parentNode.removeChild(musscr);
body.appendChild(resetdiv);
mainDD.parentNode.replaceChild(dropdiv, mainDD);
}
function resetDD(){
  var dropdiv = document.getElementById("dddiv");
  dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.tostring() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf">Doom</option><option value="https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf">SH Basketball</option><option value="https://projectsedward.github.io/SWFs/Happy%20Wheels.swf">Happy Wheels</option><option value="https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf">vvvvvv</option><option value="https://projectsedward.github.io/SWFs/Tank_Trouble.swf">Tank Trouble</option><option value="https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf">Clicker Heroes</option><option value="https://projectsedward.github.io/SWFs/BTD5.swf">BTD5</option><option value="https://projectsedward.github.io/SWFs/SuperMario63.swf">Super Mario 63</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setSWF() type=button>Go</button>';

}
