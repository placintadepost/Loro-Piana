"use strict";

if (!chrome.devtools) {
    // Listen for messages from the background page.
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        return ext.onMessage._dispatch(message, {}, sendResponse).includes(true);
    });
}

(function () {
    let port = null;

    ext.onExtensionUnloaded = {
        addListener(listener) {
            if (!port)
                port = chrome.runtime.connect();

            // When the extension is reloaded, disabled or uninstalled the
            // background page dies and automatically disconnects all ports
            port.onDisconnect.addListener(listener);
        },
        removeListener(listener) {
            if (port) {
                port.onDisconnect.removeListener(listener);

                if (!port.onDisconnect.hasListeners()) {
                    port.disconnect();
                    port = null;
                }
            }
        }
    };
}());
