function setSWF(){
//get elements
var game = document.createElement("embed");
var dropd = document.getElementById("dropd");
var swffile = dropd.options[dropd.selectedIndex].value;

if (swffile == "ZALTTP"){
  //setup ZALTTP
  var flashvars = 
				{
					system : 'snes',
					url : 'https://projectsedward.github.io/SWFs/roms/ZALTTP.smc'
				};
				var params = {};
				var attributes = {};
				
				params.allowscriptaccess = 'sameDomain';
				params.allowFullScreen = 'true';
				params.allowFullScreenInteractive = 'true';
				
				swfobject.embedSWF('https://projectsedward.github.io/SWFs/flash/Nesbox.swf', 'emulator', '1024', '700', '11.2.0', 'https://projectsedward.github.io/SWFs/flash/expressInstall.swf', flashvars, params, attributes);
        var game = document.getElementById("emulator");
} else {
  //src
var src = document.createAttribute("src");
src.value = swffile;
game.setAttributeNode(src);
} 

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

};
//Replace game
var ddiv = document.getElementById("dddiv");
ddiv.parentNode.replaceChild(game, ddiv);
game.parentNode.appendChild(game);
}
