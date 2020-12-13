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
    window.onload = function () {
        document.getElementsByClassName("header-main-content")[0].click();
        document.getElementsByClassName("btn btn-primary btn-block mt-3")[0].click();
    }
})();
