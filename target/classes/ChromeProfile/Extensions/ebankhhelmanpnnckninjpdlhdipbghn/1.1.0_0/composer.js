/* eslint-env jquery */

"use strict";

let targetPageId = null;

function onKeyDown(event)
{
  if (event.keyCode == 27)
  {
    event.preventDefault();
    closeDialog();
  }
  else if (event.keyCode == 13 && !event.shiftKey && !event.ctrlKey)
  {
    event.preventDefault();
    addFilters();
  }
}

function addFilters()
{
  ext.backgroundPage.sendMessage({
    type: "filters.importRaw",
    text: document.getElementById("filters").value
  },
  errors =>
  {
    if (errors.length > 0)
      alert(errors.join("\n"));
    else
      closeDialog(true);
  });
}

function closeDialog(success)
{
  ext.backgroundPage.sendMessage({
    type: "forward",
    targetPageId,
    payload:
    {
      type: "composer.content.finished",
      remove: (typeof success == "boolean" ? success : false)
    }
  });
  window.close();
}

function init()
{
  // Attach event listeners
  window.addEventListener("keydown", onKeyDown, false);

  document.getElementById("addButton").addEventListener("click", addFilters);
  document.getElementById("cancelButton").addEventListener(
    "click", closeDialog.bind(null, false)
  );

  // Apply jQuery UI styles
  $("button").button();

  document.getElementById("filters").focus();

  ext.onMessage.addListener((msg, sender, sendResponse) =>
  {
    switch (msg.type)
    {
      case "composer.dialog.init":
        targetPageId = msg.sender;
        document.getElementById("filters").value = msg.filters.join("\n");
        break;
      case "composer.dialog.close":
        window.close();
        break;
    }
  });

  window.removeEventListener("load", init);
}
window.addEventListener("load", init, false);
