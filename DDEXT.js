function setSWF(){
//get elements
var game = document.createElement("embed");
var dropd = document.getElementById("dropd");
var swffile = dropd.options[dropd.selectedIndex].value;

if (swffile == "pswdprot") {
  dropd.parentNode.innerHTML= '<input style="border-width: thin; background: #2b99ff; width: 152px; padding: 12px; color: #fff; border: 1px solid black; position: absolute; opacity: 1; left: 175px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd"><a style="border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 332px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=setpswd() type=button>Go</button><script></script>';

} else {

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

}
}

function setpswd(){
  var dropd = document.getElementById("dropd");
  if (dropd.value == "pswd")
  dropd.parentNode.innerHTML= '<select style="border-width: thin; background: #2b99ff; width: 152px; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 180px; top: 24px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="https://piczel.tv/">Live Streams</option></select><a style="border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 332px; top: 24px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=framer() type=button>Go</button>';
}

function framer(){
  var frame = document.createElement("iframe");
  var dropd = document.getElementById("dropd");
  var dropdv = dropd.options[dropd.selectedIndex].value;

  //style
  var style = document.createAttribute("style");
  style.value = "position: absolute; opacity: 1; left: 171px; top: 19px;";
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

  var ddiv = document.getElementById("dddiv");
  ddiv.parentNode.replaceChild(frame, ddiv);
  frame.parentNode.appendChild(frame);
}
