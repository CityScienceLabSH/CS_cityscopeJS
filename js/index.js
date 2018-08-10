/*/////////////////////////////////////////////////////////////////////////////////////////////////////////

{{ CityScopeJS }}
Copyright (C) {{ 2018 }}  {{ Ariel Noyman }}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

CityScopeJS -- decoding 2d array of black and white LEGO bricks, parsing and sending to remote server.
"@context": "https://github.com/CityScope/", "@type": "Person", "address": {
"@type": "75 Amherst St, Cambridge, MA 02139", "addressLocality":
"Cambridge", "addressRegion": "MA",}, 
"jobTitle": "Research Scientist", "name": "Ariel Noyman",
"alumniOf": "MIT", "url": "http://arielnoyman.com", 
"https://www.linkedin.com/", "http://twitter.com/relno",
https://github.com/RELNO]

*/ ///////////////////////////////////////////////////////////////////////////////////////////////////////

import "babel-polyfill";
import { setupWebcam } from "./UI/Webcam";
import { datGUI } from "./UI/DATGUI";
import { setupSVG } from "./ui/UItools";
import { makeInfoDiv } from "./UI/InfoDiv";
//Import Storage class
import "./Storage";

async function init() {
  // Storage.infoDiv = makeInfoDiv();
  // UpdateinfoDiv("Setting up Webcam...");

  //declare WebWorker as global
  window.CVworker = new Worker("./CV/CVwebworker.js");
  //init UI
  console.log(">>> Starting CityScopeJS applet");

  //setup and start webcam
  setupWebcam();
  //make the UI
  setupSVG();
  datGUI();
  console.log("Waiting for your settings file [JSON]...");
}

//start app after HTML load
window.onload = function() {
  init();
};
