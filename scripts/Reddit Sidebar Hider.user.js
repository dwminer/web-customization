// ==UserScript==
// @name         Reddit Sidebar Hider
// @version      0.1
// @description  Adds a crude button to minimize the Reddit sidebar. Likely broken by custom subreddit styles.
// @author       dwminer
// @match        https://*.reddit.com/*
// @grant        GM_addStyle
// ==/UserScript==
/* jshint -W097 */
'use strict';

function toggleSideBar()
{
    if (sidebarHidden)
    {
        sidebar.setAttribute('class', 'side');
        toggleButton.innerText = '>';
    }
    else
    {
        sidebar.setAttribute('class', 'side side-hidden');
        toggleButton.innerText = '<';
    }
    sidebarHidden = !sidebarHidden;
    console.log(sidebarHidden);
}

GM_addStyle(".side.side-hidden {" +
            "    width: 25px;" +
            "    height: 35px;" +
            "    overflow: hidden!important;" +
            "}");

//////Main
var sidebarHidden = false;
var sidebar = document.getElementsByClassName("side")[0];
var div = document.createElement('div');
div.setAttribute('class','spacer');

var toggleButton = document.createElement('button');
toggleButton.innerText = '>';
toggleButton.addEventListener('click', toggleSideBar);

div.appendChild(toggleButton);
sidebar.insertBefore(div, sidebar.firstChild);