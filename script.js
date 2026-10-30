// ==UserScript==
// @name         BiliLiveHelper
// @namespace    http://tampermonkey.net/
// @author       Astria
// @homepage     https://github.com/TianmuTNT/BiliLiveHelper
// @license      GPLv3
// @version      2.1
// @description  B站直播小助手，自动进行多项优化，提升观看体验！
// @match        https://live.bilibili.com/*
// @grant        none
// @iconURL      https://www.bilibili.com/favicon.ico
// @icon64URL    https://www.bilibili.com/favicon.ico
// ==/UserScript==

(function() {
    'use strict';

    const config = {
        childList: true,
        subtree: true
    };

    new MutationObserver(() => {
        const mask = document.querySelector('.web-player-module-area-mask');
        const icon = document.querySelector('.web-player-icon-roomStatus');
        const ann = document.querySelector('.announcement-wrapper.clearfix.no-select')
        
        if (mask) {
            mask.remove();
            console.log('[BiliLiveHelper] 移除了模糊遮罩');
        }
        
        if (icon) {
            icon.remove();
            console.log('[BiliLiveHelper] 移除了B站图标');
        }
        
        if (ann) {
            ann.remove()
            console.log('[BiliLiveHelper] 移除了公告弹幕')
        }
        
    }).observe(document.body, config);
    
    Object.defineProperty(document, 'hidden', {
        get: () => false
    });
 
    document.addEventListener('visibilitychange', e => {
        e.stopImmediatePropagation();
    }, true);
 
    window.onblur = null;
    window.addEventListener('blur', e => {
        e.stopImmediatePropagation();
    }, true);
    
})();
