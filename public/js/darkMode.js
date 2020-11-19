import {populateStorage, setStyles, toggleDarkMode} from './utility.js'
import {Moon, darkModeID, light} from './constats.js'

let body = document.getElementsByTagName("body")[0]
let darkButton = document.getElementById("dark-button");
darkButton.addEventListener("click", () => toggleDarkMode(body, darkButton), false);
darkButton.innerHTML = Moon;
if(!window.localStorage.getItem(darkModeID)) {
    populateStorage(darkModeID, light);
} else {
    setStyles(body, darkButton)
}