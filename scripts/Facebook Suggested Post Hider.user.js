// ==UserScript==
// @name         Facebook Suggested Post Hider
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides those annoying "suggested posts" that plague my feed.
//               For the 1000th time, I don't care about Soylent. Cripes.
// @author       You
// @match        https://www.facebook.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var hideAds = function(){
        var fbPosts = document.getElementsByClassName("fbUserContent");
        for (var post of fbPosts) {
            if (post.firstChild.firstChild.innerText === "Suggested Post")
            {
                post.style.display = "none";
                console.log("Hid post: " + post);
            }
        }
    };

    hideAds();

    document.addEventListener('scroll', hideAds);
})();