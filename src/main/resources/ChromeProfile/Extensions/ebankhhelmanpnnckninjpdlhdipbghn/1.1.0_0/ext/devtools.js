"use strict";

(function () {
    let inspectedTabId = chrome.devtools.inspectedWindow.tabId;
    let port = chrome.runtime.connect({name: "devtools-" + inspectedTabId});

    ext.onMessage = port.onMessage;
    ext.devtools = chrome.devtools;
}());
