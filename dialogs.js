// Get the dialog container HTML element (with the accessor method you want)
const element = document.getElementById('boom-dialog');

// If a dialog exists on the page, instantiate it.
if (element) {
  // Instantiate a new A11yDialog module
  const dialog = new A11yDialog(element);

  // When the user opens the dialog, update the inner content.
  dialog.on('show', function (event) {
    const target = event.detail.target;
    const opener = target.closest('[data-a11y-dialog-show]');
    const dynamicContent = opener.querySelector('.dialog-dynamic-content');
    const dialogContent = element.querySelector('.dialog-inner-content');

    dialogContent.innerHTML = dynamicContent.innerHTML
  })
}


