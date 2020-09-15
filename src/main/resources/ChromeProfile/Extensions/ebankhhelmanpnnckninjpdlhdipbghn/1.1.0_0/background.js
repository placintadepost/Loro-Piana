"use strict";

const {port} = require("messaging");

port.on("forward", (msg, sender) => {
    let targetPage;
    if (msg.targetPageId)
        targetPage = ext.getPage(msg.targetPageId);
    else
        targetPage = sender.page;

    if (targetPage) {
        msg.payload.sender = sender.page.id;
        if (msg.expectsResponse)
            return new Promise(targetPage.sendMessage.bind(targetPage, msg.payload));
        targetPage.sendMessage(msg.payload);
    }
});
