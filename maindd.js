// https://cdn.i-ready.com/instruction/phoenix/release-1.10.x/1/?csid=DI.MATH.NO.8.1000.phx.10_e54f337f-8d0f-42ff-92ba-71ca4efada9e_M_math&type=TUTORIAL#/lesson/math/DI_MATH_NO_8_1000_10
// https://javascript-minifier.com/
// https://mrcoles.com/bookmarklet/
// https://projectsedward.github.io/SWFs/DDEXT.js
//fetch elements
function maindd(){
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
dropdiv.innerHTML= '<select style="background: #2b99ff; padding: 10px; color: #fff; position: absolute; opacity: 1; left: 175px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf">Doom</option><option value="https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf">SH Basketball</option><option value="https://projectsedward.github.io/SWFs/Happy%20Wheels.swf">Happy Wheels</option><option value="https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf">vvvvvv</option><option value="https://projectsedward.github.io/SWFs/Tank_Trouble.swf">Tank Trouble</option></select><a style="border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 310px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setSWF() type=button>Set</button>';
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
//Append
//dropd.parentNode.appendChild(dropd);
//swfbutton.parentNode.appendChild(swfbutton);
/* Code on Github
function setSWF(){
//get elements
var game = document.createElement("embed");
var dropd = document.getElementById("dropd");
var swffile = dropd.options[dropd.selectedIndex].value;

//style
var style = document.createAttribute("style");
style.value = "position: absolute; opacity: 1; left: 171px; top: 19px;";
game.setAttributeNode(style);

//width
var width = document.createAttribute("width");
width.value = 1024;
game.setAttributeNode(width);

//height
var height = document.createAttribute("height");
height.value = 700;
game.setAttributeNode(height);

//quality
var quality = document.createAttribute("quality");
quality.value = "high";
game.setAttributeNode(quality);

//pluginspage
var pluginspage = document.createAttribute("pluginspage");
pluginspage.value = "https://www.macromedia.com/go/getflashplayer";
game.setAttributeNode(pluginspage);

//align
var align = document.createAttribute("align");
align.value = "center";
game.setAttributeNode(align);

//src
var src = document.createAttribute("src");
src.value = swffile;
game.setAttributeNode(src);

//Replace game
var ddiv = document.getElementById("dddiv");
ddiv.parentNode.replaceChild(game, ddiv);
game.parentNode.appendChild(game);

}*/
}
