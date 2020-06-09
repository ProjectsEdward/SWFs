function setSWF(){
//get elements
var game = document.createElement("embed");
var dropd = document.getElementById("dropd");
var swffile = dropd.options[dropd.selectedIndex].value;

if (swffile == "pswdprot") {
  dropd.parentNode.innerHTML= '<input style="border-width: thin; background: #2b99ff; width: 127px; padding: 12px; color: #fff; border: 0px solid black; position: absolute; opacity: 1; left: 175px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd" placeholder= \'Password\'><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 332px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setpswd() type=button>Go</button><script></script>';

} else {
//style
var style = document.createAttribute("style");
var fromtop = window.innerHeight * 0.02
style.value = 'position: absolute; opacity: 1; left: 171px; top: ' + fromtop.toString() + 'px;';
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

//Replace dropdown
var ddiv = document.getElementById("dddiv");
ddiv.innerHTML = '';
ddiv.appendChild(game);

}
}

function setpswd(){
  var dropd = document.getElementById("dropd");
  if (sha256(dropd.value) == "b7fb0394c7183fd5cac17fb41961c826212a185070e4c1d2f4920e51c1dee35f")
  dropd.parentNode.innerHTML= '<select style="background: #2b99ff; border: 0px solid black; width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: 175px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://app.parsecgaming.com/">Parsec</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 332px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=framer() type=button>Go</button>';
}

function framer(){
  var frame = document.createElement("iframe");
  var dropd = document.getElementById("dropd");
  var dropdv = dropd.options[dropd.selectedIndex].value;

  //style
  var style = document.createAttribute("style");
  var fromtop = window.innerHeight * 0.02
  style.value = 'position: absolute; opacity: 1; left: 171px; top: ' + fromtop.toString() + 'px;';
  frame.setAttributeNode(style);

  //width
  var width = document.createAttribute("width");
  width.value = 1024;
  frame.setAttributeNode(width);

  //height
  var height = document.createAttribute("height");
  height.value = 700;
  frame.setAttributeNode(height);

  //align
  var align = document.createAttribute("align");
  align.value = "center";
  frame.setAttributeNode(align);

  //src
  var src = document.createAttribute("src");
  src.value = dropdv;
  frame.setAttributeNode(src);

  //Replace dropdown
  var ddiv = document.getElementById("dddiv");
  ddiv.innerHTML = '';
  ddiv.appendChild(frame);
}
