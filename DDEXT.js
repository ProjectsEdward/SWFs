function setupCall(){
  //Register body
  var body = document.getElementsByTagName("body")[0];

  //Register SHA256
  var sha = document.createElement('script');
  sha.src = 'https://geraintluff.github.io/sha256/sha256.min.js';
  document.head.appendChild(sha);

  //Create dropdown div, create dropdown, and add id
  var dropdiv = document.createElement('div');
  var ddboxtop = (window.innerHeight * 0.02) + 10
  var ddbuttontop = (window.innerHeight * 0.02) + 54
  dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="flasher("https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf")">Doom</option><option value="flasher("https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf")">SH Basketball</option><option value="flasher("https://projectsedward.github.io/SWFs/Happy%20Wheels.swf")">Happy Wheels</option><option value="flasher("https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf")">vvvvvv</option><option value="flasher("https://projectsedward.github.io/SWFs/Tank_Trouble.swf")">Tank Trouble</option><option value="flasher("https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf")">Clicker Heroes</option><option value="flasher("https://projectsedward.github.io/SWFs/BTD5.swf")">BTD5</option><option value="flasher("https://projectsedward.github.io/SWFs/SuperMario63.swf")">Super Mario 63</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=buttonSet() type=button>Go</button>';
  var id = document.createAttribute("id");
  id.value = 'dddiv';
  dropdiv.setAttributeNode(id);

  //Create reset div and create dropdown button
  var resetdiv= document.createElement('div');
  resetdiv.innerHTML= '<a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 0px; top: 364px; font-family: \'Roboto\', sans-serif;" noreferrer" id="resetbutton" onclick=resetDD() type=button>Reset</a>';


  //get dropdown divs
  var dropd = document.getElementById("dropd");
  var swfbutton = document.getElementById("swfbutton");

  //set font to Roboto
  var dropstyle= document.createElement('style');
  dropstyle.innerHTML= '@import url(\'https://fonts.googleapis.com/css?family=Roboto:500&display=swap\');';

  //Replace tempdiv
  var tempdiv = document.getElementById("tempdiv");
  tempdiv.parentNode.replaceChild(dropdiv, tempdiv);

  //Append reset button
  body.appendChild(resetdiv);
}

//Set Game Button (Runs code from Dropdown)
function buttonSet(){
  var dropd = document.getElementById("dropd");
  var code = dropd.options[dropd.selectedIndex].value;

  if (code == pswdprot) {

  } else {
  eval(code);
}}

//Resetup
function resetDD(){
  var dropdiv = document.getElementById("dddiv");
  var ddboxtop = (window.innerHeight * 0.02) + 10
  var ddbuttontop = (window.innerHeight * 0.02) + 54
  dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf">Doom</option><option value="https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf">SH Basketball</option><option value="https://projectsedward.github.io/SWFs/Happy%20Wheels.swf">Happy Wheels</option><option value="https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf">vvvvvv</option><option value="https://projectsedward.github.io/SWFs/Tank_Trouble.swf">Tank Trouble</option><option value="https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf">Clicker Heroes</option><option value="https://projectsedward.github.io/SWFs/BTD5.swf">BTD5</option><option value="https://projectsedward.github.io/SWFs/SuperMario63.swf">Super Mario 63</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=buttonSet() type=button>Go</button>';

}


//Setup password input
function paswordDD(){
  var ddboxtop = (window.innerHeight * 0.02) + 10
  var ddbuttontop = (window.innerHeight * 0.02) + 54
  var dropd = document.getElementById("dropd");

  dropd.parentNode.innerHTML= '<input style="border-width: thin; background: #2b99ff; width: 127px; padding: 12px; color: #fff; border: 0px solid black; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd" placeholder= \'Password\'><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setpswd() type=button>Go</button><script></script>';
}

//Check Password and set input
function setpswd(){
  var dropd = document.getElementById("dropd");
  if (sha256(dropd.value) == "b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f") {
  var ddboxtop = (window.innerHeight * 0.02) + 10
  var ddbuttontop = (window.innerHeight * 0.02) + 54
  dropd.parentNode.innerHTML= '<select style="background: #2b99ff; border: 0px solid black; width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: ' + ddboxtop.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="framer("https://app.parsecgaming.com/")">Parsec</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 332px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=framer() type=button>Go</button>';
}
}


//Create Flash and Iframe

//Create Flash
function flasher(url){

//get elements
var game = document.createElement("embed");
var dropd = document.getElementById("dropd");
var canvas = document.getElementsByTagName("canvas")[0];

//style
var style = document.createAttribute("style");
var fromtop = (window.innerHeight * 0.02) + 5
style.value = 'position: absolute; opacity: 1; left: 171px; top: ' + fromtop.toString() + 'px;';
game.setAttributeNode(style);

//width
var width = document.createAttribute("width");
width.value = canvas.offsetWidth;
game.setAttributeNode(width);

//height
var height = document.createAttribute("height");
height.value = canvas.offsetHeight;
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
src.value = url;
game.setAttributeNode(src);

//id
var id = document.createAttribute("id");
id.value = "GameW";
game.setAttributeNode(id);

//Replace dropdown
var ddiv = document.getElementById("dddiv");
ddiv.innerHTML = '';
ddiv.appendChild(game);

}


//Create Iframe
function framer(url){
  var frame = document.createElement("iframe");
  var dropd = document.getElementById("dropd");
  var dropdv = dropd.options[dropd.selectedIndex].value;

  //style
  var style = document.createAttribute("style");
  var fromtop = (window.innerHeight * 0.02) + 5
  style.value = 'position: absolute; opacity: 1; left: 171px; top: ' + fromtop.toString() + 'px;';
  frame.setAttributeNode(style);
  var canvas = document.getElementsByTagName("canvas")[0];

  //width
  var width = document.createAttribute("width");
  width.value = canvas.offsetWidth;
  frame.setAttributeNode(width);

  //height
  var height = document.createAttribute("height");
  height.value = canvas.offsetHeight;
  frame.setAttributeNode(height);

  //align
  var align = document.createAttribute("align");
  align.value = "center";
  frame.setAttributeNode(align);

  //src
  var src = document.createAttribute("src");
  src.value = dropdv;
  frame.setAttributeNode(src);

  //id
  var id = document.createAttribute("id");
  id.value = "GameW";
  frame.setAttributeNode(id);

  //Replace dropdown
  var ddiv = document.getElementById("dddiv");
  ddiv.innerHTML = '';
  ddiv.appendChild(frame);
}

//Fix Size
while (true) {
  var canvas = document.getElementsByTagName("canvas")[0];
  var GameW = document.getElementById("dddiv");

  //width
  var width = document.createAttribute("width");
  width.value = canvas.offsetWidth;
  GameW.setAttributeNode(width);

  //height
  var height = document.createAttribute("height");
  height.value = canvas.offsetHeight;
  GameW.setAttributeNode(height);
}
