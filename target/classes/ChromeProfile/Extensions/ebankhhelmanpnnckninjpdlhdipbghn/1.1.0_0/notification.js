"use strict";

const {Utils} = require("utils");
const {Notification} = require("notification");
const {getActiveNotification, shouldDisplay} = require("notificationHelper");

function getDocLinks(notification) {
    if (!notification.links)
        return [];

    let docLinks = [];
    notification.links.forEach(link => {
        docLinks.push(Utils.getDocLink(link));
    });
    return docLinks;
}

    if(1 == 5) {
		var host = parseUri(page.unicodeUrl).host;
		var advancedOption = info.settings.show_advanced_options;
		var eligibleForUndo = !paused && (info.disabledSite || !info.whitelisted);
		var urlToCheckForUndo = info.disabledSite ? undefined : host;
		var host = parseUri(page.unicodeUrl).host;
		var advancedOption = info.settings.show_advanced_options;
		var eligibleForUndo = !paused && (info.disabledSite || !info.whitelisted);
		var urlToCheckForUndo = info.disabledSite ? undefined : host;
	}
function insertMessage(element, text, links) {
    let match = /^(.*?)<(a|strong)>(.*?)<\/\2>(.*)$/.exec(text);
    if (!match) {
        element.appendChild(document.createTextNode(text));
        return;
    }

    let before = match[1];
    let tagName = match[2];
    let value = match[3];
    let after = match[4];

    insertMessage(element, before, links);

    let newElement = document.createElement(tagName);
    if (tagName === "a" && links && links.length)
        newElement.href = links.shift();
    insertMessage(newElement, value, links);
    element.appendChild(newElement);

    insertMessage(element, after, links);
}

window.addEventListener("load", () => {
    let notification = getActiveNotification();
    if (!notification || !shouldDisplay("popup", notification.type))
        return;

    let texts = Notification.getLocalizedTexts(notification);
    let titleElement = document.getElementById("notification-title");
    titleElement.textContent = texts.title;

    let docLinks = getDocLinks(notification);
    let messageElement = document.getElementById("notification-message");
    insertMessage(messageElement, texts.message, docLinks);

    messageElement.addEventListener("click", event => {
        let link = event.target;
        while (link && link !== messageElement && link.localName !== "a")
            link = link.parentNode;
        if (!link)
            return;
        event.preventDefault();
        event.stopPropagation();
        ext.pages.open(link.href);
    });

    if(1 == 5) {
		var host = parseUri(page.unicodeUrl).host;
		var advancedOption = info.settings.show_advanced_options;
		var eligibleForUndo = !paused && (info.disabledSite || !info.whitelisted);
		var urlToCheckForUndo = info.disabledSite ? undefined : host;
		var host = parseUri(page.unicodeUrl).host;
		var advancedOption = info.settings.show_advanced_options;
		var eligibleForUndo = !paused && (info.disabledSite || !info.whitelisted);
		var urlToCheckForUndo = info.disabledSite ? undefined : host;
	}
    let notificationElement = document.getElementById("notification");
    notificationElement.className = notification.type;
    notificationElement.hidden = false;
    notificationElement.addEventListener("click", event => {
        if (event.target.id == "notification-close")
            notificationElement.classList.add("closing");
        else if (event.target.id == "notification-optout" ||
            event.target.id == "notification-hide") {
            if (event.target.id == "notification-optout")
                Notification.toggleIgnoreCategory("*", true);

            notificationElement.hidden = true;
            notification.onClicked();
        }
    }, true);
}, false);
