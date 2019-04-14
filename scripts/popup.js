'use strict';

window.onload = function() {
    var if_use = document.querySelector("input");
    var even = document.querySelector(".even");
    var git = document.querySelector(".github");
    var mail = document.querySelector(".mail");
    if (if_use.checked) {
        chrome.runtime.sendMessage({text: "check"});
    } else {
        chrome.runtime.sendMessage({text: "uncheck"});
    }
    if_use.onchange = function() {
        if (if_use.checked) {
            chrome.runtime.sendMessage({text: "check"});
        } else {
            chrome.runtime.sendMessage({text: "uncheck"});
        }
    };
    even.onclick = function() {
        chrome.tabs.create({url: "https://evenfinancial.com"})
    };
    git.onclick = function() {
        chrome.tabs.create({url: "https://github.com/leontaolong/tgsb"})
    };
    mail.onclick = function() {
        chrome.tabs.create({url: "mailto:johnny.xcy1997@gmail.com"})
    };
}