// ==UserScript==
// @name        Max Width Video
// @namespace	github.com/heussd/max-width-video-bookmarklet
// @description	Displays videos with max with
// @include     *.mp4
// @version     1.0
// ==/UserScript==

document.getElementsByTagName("video")[0].setAttribute('width', '100%');

