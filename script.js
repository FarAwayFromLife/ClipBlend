var textboxCount = 1;

  function copyText(textboxId) {
    var textbox = document.getElementById(textboxId);
    textbox.select();
    document.execCommand("copy");

  }

  function deleteTextbox(textboxId) {
    var container = document.querySelector(".container");
    var textbox = document.getElementById(textboxId);
    var textboxContainer = textbox.parentElement;
    container.removeChild(textboxContainer);
  }

  function pasteText(textboxId) {
    navigator.clipboard.readText()
      .then(text => {
        var textbox = document.getElementById(textboxId);
        textbox.value = text;
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  }

  function addTextbox() {
    var container = document.querySelector(".container");
    var newTextbox = document.createElement("input");
    newTextbox.type = "text";
    newTextbox.className = "textbox";
    newTextbox.placeholder = "Textbox " + (++textboxCount);
    newTextbox.id = "textbox" + textboxCount;
    var copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = function() {
      copyText(newTextbox.id);
    };
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
      deleteTextbox(newTextbox.id);
    };
    var pasteBtn = document.createElement("button");
    pasteBtn.className = "paste-btn";
    pasteBtn.textContent = "Paste";
    pasteBtn.onclick = function() {
      pasteText(newTextbox.id);
    };
    var newTextboxContainer = document.createElement("div");
    newTextboxContainer.className = "textbox-container";
    newTextboxContainer.appendChild(newTextbox);
    newTextboxContainer.appendChild(copyBtn);
    newTextboxContainer.appendChild(deleteBtn);
    newTextboxContainer.appendChild(pasteBtn);
    container.insertBefore(newTextboxContainer, container.lastElementChild);
  }