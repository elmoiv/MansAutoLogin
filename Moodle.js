// ==UserScript==
// @name         Moodle Automatic Login
// @namespace    https://elmoiv.github.io/
// @version      0.1
// @description  Click Moodle log in button
// @author       elmoiv
// @match        https://vc1.mans.edu.eg/moodle02/login/index.php
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Wait 1.5 seconds
    setTimeout(clickLogin, 1500);
})();

// Click Login Button
function clickLogin () {
    document.getElementsByClassName("header-main-content")[0].click();
    document.getElementsByClassName("btn btn-primary btn-block mt-3")[0].click();
}
