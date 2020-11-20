import {Moon, Sun, darkModeID, dark, light} from './constats.js'

let populateStorage = (id, value) => {
    window.localStorage.setItem(id, value);
}
let setStyles = (body, darkButton) => {
    let darkMode = window.localStorage.getItem(darkModeID);
    if (darkMode === dark) {
        body.classList.add(dark)
        darkButton.innerHTML = Sun;
    } else {
        body.classList.remove(dark)
        darkButton.innerHTML = Moon;
    }
}
let toggleDarkMode = (body, darkButton) => {
    let darkMode = window.localStorage.getItem(darkModeID);
    if (darkMode === dark) {
        window.localStorage.setItem(darkModeID, light);
    } else {
        window.localStorage.setItem(darkModeID, dark);
    }
    setStyles(body, darkButton)
}

export {populateStorage, setStyles, toggleDarkMode}