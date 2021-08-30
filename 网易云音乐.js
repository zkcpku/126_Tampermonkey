// ==UserScript==
// @name         netease_website
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://music.163.com/*
// @icon         https://www.google.com/s2/favicons?domain=163.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function setCookie(cookieName,value,expiresTime,path){
        expiresTime = expiresTime || "Thu, 01-Jan-2030 00:00:01 GMT";
        path = path || "/";
        document.cookie=cookieName+ "=" +encodeURIComponent(value)+ "; expires="+ expiresTime+ "; path="+path;
    }
    setCookie('os','pc');

    // Your code here...
})();
