document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.htmlFor=e.id,t.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.placeholder=e.name.charAt(0)+e.name.slice(1),e.parentElement.prepend(t)});
//# sourceMappingURL=index.92dfbf89.js.map
