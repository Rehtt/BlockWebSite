// ==UserScript==
// @name         戒拖延
// @namespace    https://github.com/Rehtt/BlockWebSite
// @version      0.1.2
// @updateURL    https://raw.githubusercontent.com/Rehtt/BlockWebSite/master/main.js
// @description  简单屏掉指定网站
// @author       Rehtt
// @match        *://*.bilibili.com/*
// @note         2019-9-29 0.1.2 新增 计次
// @grant        GM_setValue
// @grant        GM_getValue
// @run-at document-done
// ==/UserScript==

(function ($) {
    'use strict';

    // GM_setValue('data',{
    //     'time':0,
    //     'number':0
    // })
    var nowTime = Date.now() / 1000;
    var timeValue = 0;
    var number = 0;
    try {
        timeValue = GM_getValue('data').time;
        number = GM_getValue('data').number;
    } catch (error) {
        GM_setValue('data', {
            'time': nowTime,
            'number': 0
        })
    }
    if (new Date(nowTime).getDay() === new Date(timeValue).getDay()) {
        if (number <= 5) {
            number += 1;
            GM_setValue('data', {
                'time': nowTime,
                'number': number
            })
        } else{
            document.head.innerHTML = "<meta charset=\"UTF-8\">+<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>你都一事无成，还想偷懒？</title><style> body{text-align:center} </style>";
            document.body.innerHTML = "<img src=\"https://previews.123rf.com/images/krisdog/krisdog1601/krisdog160100114/51305545-woodcut-vintage-style-hand-pointing-a-finger-at-you-in-a-wants-you-or-needs-you-gesture.jpg\" width=30% height=30%><br><h1>你项目做完了？考研都会了？国家培养申请了？优秀学生评了？论文发了？</h1>";

        }

    } else {
        GM_setValue('data', {
            'time': nowTime,
            'number': 0
        })
    }

})();
