// Define a script element to load the accessible dialog plugin from the jsdeliver CDN.
const dialogPlugin = document.createElement("script");
dialogPlugin.src =
  "https://cdn.jsdelivr.net/npm/a11y-dialog@8/dist/a11y-dialog.min.js";

// A function to build and insert the markup for the dialog window.
function buildDialog() {
  // Create the dialog wrapper and assign attributes.
  const div = document.createElement("div");
  div.setAttribute("class", "dialog-container");
  div.setAttribute("id", "boom-dialog");
  div.setAttribute("aria-hidden", "true");
  div.setAttribute("aria-labelledby", "dialog-title");

  // Set all the inner HTML for the dialog window.
  div.innerHTML = `
		<div class="dialog-overlay" data-a11y-dialog-hide></div>
		<div class="dialog-content" role="document">
			<button data-a11y-dialog-hide class="dialog-close" aria-label="Close this dialog window">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round">
					<line x2="50" y2="50" />
					<line x1="50" y2="50" />
				</svg>
			</button>
			<div class="dialog-inner-content"></div>
		</div>
	`;

  // Apped the dialog to the .wrapper.
  document.querySelector(".wrapper").appendChild(div);
}

// A function to initialize the dialog.
function initializeDialog() {
  // Get the dialog container HTML element (with the accessor method you want)
  const element = document.getElementById("boom-dialog");

  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element);

  // When the user opens the dialog, update the inner content.
  dialog.on("show", function (event) {
    const target = event.detail.target;
    const opener = target.closest("[data-a11y-dialog-show]");
    const dynamicContent = opener.querySelector(".dialog-dynamic-content");
    const dialogContent = element.querySelector(".dialog-inner-content");

    dialogContent.innerHTML = dynamicContent.innerHTML;
  });
}

// When the dialog script is loaded, build and initialize the dialog.
dialogPlugin.onload = function () {
  buildDialog();
  initializeDialog();
};

// Load the dialog script.
document.head.appendChild(dialogPlugin);
