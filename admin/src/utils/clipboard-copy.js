export async function copyToClipboard(value, successCallback) {
  const { state } = await navigator.permissions.query({
    name: 'clipboard-write'
  });

  if (navigator.clipboard && state !== 'denied') {
    try {
      const clipboard = navigator.clipboard;

      await clipboard.writeText(value);

      if (successCallback) successCallback();

      return;
    } catch (err) {
      console.error(err);
    }
  }

  const inputField = document.createElement('input');
  inputField.value = value;
  document.body.appendChild(inputField);
  inputField.select();
  const success = document.execCommand('copy');
  if (success && successCallback) successCallback();
  document.body.removeChild(inputField);
}
