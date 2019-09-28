// ==UserScript==
// @name         戒拖延
// @namespace    https://blog.rehtt.com
// @version      0.1
// @description  简单屏掉指定网站
// @author       Rehtt
// @match        *://*.bilibili.com/*
// @require      http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @grant        none
// ==/UserScript==

jQuery.noConflict();
(function ($) {
    'use strict';
    
    document.head.innerHTML = "<meta charset=\"UTF-8\">+<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>你都一事无成，还想偷懒？</title><style> body{text-align:center} </style>";
    document.body.innerHTML = "<h1>你项目做完了？考研都会了？国家培养申请了？优秀学生评了？论文发了？</h1>";
})(jQuery);