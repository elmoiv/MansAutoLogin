// ==UserScript==
// @name         Moodle Automatic Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Click Moodle log in button
// @author       elmoiv
// @match        https://vc1.mans.edu.eg/moodle02/login/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Wait 5 seconds
    setTimeout(clickLogin, 1000);
})();

// Click Login Button
function clickLogin () {
    document.getElementsByClassName("btn btn-primary btn-block mt-3")[0].click();
}
