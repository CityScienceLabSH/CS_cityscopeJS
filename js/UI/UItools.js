//Import Storage class
import "../Storage";

export function setupSVG() {
  var camCanvas = Storage.camCanvas;

  // load the SVGcdn to var
  var svgCDN = "http://www.w3.org/2000/svg";
  //SVG setup for later viz.
  var svgDiv = document.createElement("div");
  document.body.appendChild(svgDiv);
  svgDiv.id = "svgDiv";
  svgDiv.width = camCanvas.width;
  svgDiv.height = camCanvas.height;
  svgDiv.className = "svgDiv";
  var svgKeystone = document.createElementNS(svgCDN, "svg");
  svgKeystone.id = "svgKeystone";
  svgKeystone.setAttributeNS(null, "width", camCanvas.width);
  svgKeystone.setAttributeNS(null, "height", camCanvas.height);
  svgDiv.appendChild(svgKeystone);

  return svgKeystone;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export function magGlass(state) {
  if (state !== false) {
    var camCanvas = Storage.camCanvas;
    //make gls div
    var glsDiv = document.createElement("div");
    glsDiv.id = "glsDiv";
    document.body.appendChild(glsDiv);
    //another canvas for magnifying glass
    var magGlassCanvas = document.createElement("canvas");
    // mag. glass
    glsDiv.appendChild(magGlassCanvas);
    magGlassCanvas.id = "magGlass";
    magGlassCanvas.className = "magGlassCanvas";
    let magWid = (magGlassCanvas.width = 200);
    magGlassCanvas.height = magWid;
    magGlassCanvas.style.zIndex = 1;
    let magGlassCtx = magGlassCanvas.getContext("2d");
    document.addEventListener("mousemove", function(e) {
      magGlassCtx.clearRect(0, 0, magWid, magWid);
      magGlassCtx.drawImage(
        camCanvas,
        e.pageX - magWid / 4,
        e.pageY - magWid / 4,
        camCanvas.width,
        camCanvas.width,
        0,
        0,
        camCanvas.width * 2,
        camCanvas.height * 2
      );
      magGlassCanvas.style.top = e.pageY - magWid / 2 + "px";
      magGlassCanvas.style.left = e.pageX - magWid / 2 + "px";
      magGlassCanvas.style.display = "block";
      magGlassCanvas.style.position = "absolute";
      magGlassCanvas.style.border = "2px black solid";
    });
  } else {
    //WIP
    var glsDiv = document.querySelector("#glsDiv");
    glsDiv.innerHTML = "";
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

export function svgLine(srcPt, dstPt) {
  var svgCDN = "http://www.w3.org/2000/svg";

  var line = document.createElementNS(svgCDN, "line");
  line.setAttributeNS(null, "x1", srcPt[0]);
  line.setAttributeNS(null, "y1", srcPt[1]);
  line.setAttributeNS(null, "x2", dstPt[0]);
  line.setAttributeNS(null, "y2", dstPt[1]);
  line.setAttributeNS(null, "stroke", "#f35790");
  line.setAttributeNS(null, "stroke-width", "1");
  return line;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
export function svgCircle(dstPt, fillCol, size, fillOp, strkCol, strkWidth) {
  var svgCDN = "http://www.w3.org/2000/svg";

  //display with SVG
  var scanPt = document.createElementNS(svgCDN, "circle");
  scanPt.setAttributeNS(null, "cx", dstPt[0]);
  scanPt.setAttributeNS(null, "cy", dstPt[1]);
  scanPt.setAttributeNS(null, "fill", fillCol);
  scanPt.setAttributeNS(null, "r", size);
  scanPt.setAttributeNS(null, "fill-opacity", fillOp);
  scanPt.setAttributeNS(null, "stroke", strkCol);
  scanPt.setAttributeNS(null, "stroke-width", strkWidth);

  return scanPt;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
export function svgText(dstPt, txt, size) {
  var svgCDN = "http://www.w3.org/2000/svg";

  var newText = document.createElementNS(svgCDN, "text");
  newText.setAttributeNS(null, "x", dstPt[0]);
  newText.setAttributeNS(null, "y", dstPt[1]);
  newText.setAttributeNS(null, "font-size", size);

  newText.innerHTML = txt;
  return newText;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//stats
export function stats() {
  var script = document.createElement("script");
  script.onload = function() {
    var stats = new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
  };
  script.src = "//rawgit.com/mrdoob/stats.js/master/build/stats.min.js";
  document.head.appendChild(script);
}
