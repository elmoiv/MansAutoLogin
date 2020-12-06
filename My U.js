// ==UserScript==
// @name         MYU Automatic Login
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Click myu login button
// @author       elmoiv
// @match        https://myu.mans.edu.eg/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Wait 1 seconds
    setTimeout(clickLogin, 1000);
})();

// Click Login Button
function clickLogin () {
    document.getElementsByClassName("btn ls-dark-btn col-md-12 col-sm-12 col-xs-12")[0].click();
}
