
var dropdiv = document.createElement('div');

//video styling
var fromtop = parseInt(video.offsetTop);
var fromleft = parseInt(video.offsetLeft);
var fromtop10 = parseInt(video.offsetTop) + 10;
var fromleft10 = parseInt(video.offsetLeft) + 10;
var vwidth = parseInt(video.offsetWidth);
var vheight = parseInt(video.offsetHeight);

//get dropdown divs
var dropd = document.getElementById("dropd");
var swfbutton = document.getElementById("swfbutton");

function setupCall(){
  //Register SHA256
  var sha = document.createElement('script');
  sha.src = 'https://geraintluff.github.io/sha256/sha256.min.js';
  document.head.appendChild(sha);

  //create dropdown
  var ddbuttontop = fromtop10 + 44
  dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: ' + fromleft10.toString() + 'px; top: ' + fromtop10.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="flasher(\'https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf\')">Doom</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf\')">SH Basketball</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Happy%20Wheels.swf\')">Happy Wheels</option><option value="flasher(\'https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf\')">vvvvvv</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Tank_Trouble.swf\')">Tank Trouble</option><option value="flasher(\'https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf\')">Clicker Heroes</option><option value="flasher(\'https://projectsedward.github.io/SWFs/BTD5.swf\')">BTD5</option><option value="flasher(\'https://projectsedward.github.io/SWFs/SuperMario63.swf\')">Super Mario 63</option><option value="flasher(\'https://www.mcleodgaming.com/flash/?f=embeds/SSF2Beta_v1_2_2_1.swf\')">BTD5</option><option value="framer(\'https://projectsedward.github.io/SWFs/skid-inc/\')">Skid Inc.</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: ' + fromleft10.toString() + 'px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=buttonSet() type=button>Go</a>';

  //Create reset div and create dropdown button
  var resetdiv= document.createElement('div');
  resetdiv.innerHTML= '<a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: 0px; top: 0px; font-family: \'Roboto\', sans-serif;" noreferrer" id="resetbutton" onclick=resetDD() type=button>Reset</a>';

  //set font to Roboto
  var dropstyle= document.createElement('style');
  dropstyle.innerHTML= '@import url(\'https://fonts.googleapis.com/css?family=Roboto:500&display=swap\');';

  //get dropdown divs
  var dropd = document.getElementById("dropd");
  var swfbutton = document.getElementById("swfbutton");

  //Replace tempdiv
  tempdiv.parentNode.replaceChild(dropdiv, tempdiv);

  //Append reset button
  body.appendChild(resetdiv);
}

//Set embed Button (Runs code from Dropdown)
function buttonSet(){
  var dropd = document.getElementById("dropd");
  var code = dropd.options[dropd.selectedIndex].value;

  if (code == "pswdprot") {
    paswordDD();
} else {
  eval(code);
}}

//Resetup
function resetDD(){
  var ddbuttontop = fromtop10 + 44
  dropdiv.innerHTML= '<select style="background: #2b99ff;border: 0px solid black;  width: 152px; padding: 11px; color: #fff; position: absolute; opacity: 1; left: ' + fromleft10.toString() + 'px; top: ' + fromtop10.toString() + 'px; font-family: \'Roboto\', sans-serif;" id="dropd"><option>  </option><option value="flasher(\'https://projectsedward.github.io/SWFs/Doom%20w800%20h500.swf\')">Doom</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Sports%20Heads%20Basketball.swf\')">SH Basketball</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Happy%20Wheels.swf\')">Happy Wheels</option><option value="flasher(\'https://projectsedward.github.io/SWFs/vvvvvv%20w640%20h480.swf\')">vvvvvv</option><option value="flasher(\'https://projectsedward.github.io/SWFs/Tank_Trouble.swf\')">Tank Trouble</option><option value="flasher(\'https://projectsedward.github.io/SWFs/ClickerHeroes%20w1000%20h563.swf\')">Clicker Heroes</option><option value="flasher(\'https://projectsedward.github.io/SWFs/BTD5.swf\')">BTD5</option><option value="flasher(\'https://projectsedward.github.io/SWFs/SuperMario63.swf\')">Super Mario 63</option><option value="flasher(\'https://www.mcleodgaming.com/flash/?f=embeds/SSF2Beta_v1_2_2_1.swf\')">BTD5</option><option value="framer(\'https://projectsedward.github.io/SWFs/skid-inc/\')">Skid Inc.</option><option value="pswdprot">Protected Content</option></select><a style="cursor: pointer; border-width: thin; background: #2b99ff; padding: 12px; color: #fff; position: absolute; opacity: 1; left: ' + fromleft10.toString() + 'px; top: ' + ddbuttontop.toString() + 'px; font-family: \'Roboto\', sans-serif;" noreferrer" id="swfbutton" onclick=buttonSet() type=button>Go</a>';

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
  var embed = document.createElement("embed");
  var dropd = document.getElementById("dropd");

  //style
  var style = document.createAttribute("style");
  style.value = 'position: absolute; opacity: 1; left: ' + fromleft.toString() + 'px; top: ' + fromtop.toString() + 'px;';
  embed.setAttributeNode(style);

  //width
  var width = document.createAttribute("width");
  width.value = vwidth;
  embed.setAttributeNode(width);

  //height
  var height = document.createAttribute("height");
  height.value = vheight;
  embed.setAttributeNode(height);

  //quality
  var quality = document.createAttribute("quality");
  quality.value = "high";
  embed.setAttributeNode(quality);

  //pluginspage
  var pluginspage = document.createAttribute("pluginspage");
  pluginspage.value = "https://www.macromedia.com/go/getflashplayer";
  embed.setAttributeNode(pluginspage);

  //align
  var align = document.createAttribute("align");
  align.value = "center";
  embed.setAttributeNode(align);

  //src
  var src = document.createAttribute("src");
  src.value = url;
  embed.setAttributeNode(src);

  //id
  var id = document.createAttribute("id");
  id.value = "embedW";
  embed.setAttributeNode(id);

  //Replace dropdown
  dropdiv.innerHTML = '';
  dropdiv.appendChild(embed);

}


//Create Iframe
function framer(url){

  //get elements
  var frame = document.createElement("iframe");
  var dropd = document.getElementById("dropd");

  //style
  var style = document.createAttribute("style");
  style.value = 'position: absolute; opacity: 1; left: ' + fromleft.toString() + 'px; top: ' + fromtop.toString() + 'px;';
  frame.setAttributeNode(style);


  //width
  var width = document.createAttribute("width");
  width.value = vwidth;
  frame.setAttributeNode(width);

  //height
  var height = document.createAttribute("height");
  height.value = vheight;
  frame.setAttributeNode(height);

  //align
  var align = document.createAttribute("align");
  align.value = "center";
  frame.setAttributeNode(align);

  //src
  var src = document.createAttribute("src");
  src.value = url;
  frame.setAttributeNode(src);

  //id
  var id = document.createAttribute("id");
  id.value = "embedW";
  frame.setAttributeNode(id);

  //Replace dropdown
  dropdiv.innerHTML = '';
  dropdiv.appendChild(frame);
}


//Create Full Width Iframe
function framerFullWidth(url){

    //create frame
    var frame = document.createElement("iframe");

    //style
    var style = document.createAttribute("style");
    style.value = 'position: absolute; opacity: 1; left: ' + fromleft.toString() + 'px; top: ' + fromtop.toString() + 'px;';
    frame.setAttributeNode(style);

    //width
    var width = document.createAttribute("width");
    width.value = (vheight / 9) * 16;
    frame.setAttributeNode(width);

    //height
    var height = document.createAttribute("height");
    height.value = vheight;
    frame.setAttributeNode(height);

    //align
    var align = document.createAttribute("align");
    align.value = "center";
    frame.setAttributeNode(align);

    //src
    var src = document.createAttribute("src");
    src.value = url;
    frame.setAttributeNode(src);

    //id
    var id = document.createAttribute("id");
    id.value = "embedW";
    frame.setAttributeNode(id);

    //Replace dropdown
    dropdiv.innerHTML = '';
    dropdiv.appendChild(frame);
}

// Play Music
 document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.key === "u"  &&  zEvent.key === "r"  &&  zEvent.key === "d") {
      new Audio('https://projectsedward.github.io/SWFs/Song.mp3').play()

    }
} );
