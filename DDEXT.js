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

}
