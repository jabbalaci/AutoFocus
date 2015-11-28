// ==UserScript==
// @name        AutoFocus
// @namespace   jabba.laci@gmail.com
// @description Set focus to the specified input field.
// @version     1
// @grant       none
// ==/UserScript==

(function () {
    var h = document.location.href;

    if (/^http.*wikipedia\.org/.test(h)) {
        document.getElementById('searchInput').focus();
        return;
    }
    if (/^http.*imdb\.com/.test(h)) {
        document.getElementById('navbar-query').focus();
        return;
    }
})();
