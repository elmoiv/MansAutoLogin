// ==UserScript==
// @name         MYU Automatic Login
// @namespace    https://elmoiv.github.io/
// @version      0.1
// @description  Click myu login button
// @author       elmoiv
// @match        https://myu.mans.edu.eg/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = function () {
        document.getElementsByClassName("btn ls-dark-btn col-md-12 col-sm-12 col-xs-12")[0].click();
    }
})();
