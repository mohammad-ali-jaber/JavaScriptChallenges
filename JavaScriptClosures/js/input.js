export function getUserInput(inputId) {
  const inputElement = document.getElementById(inputId);
  if (inputElement) {
    return inputElement.value.trim();
  }
  return "";
}
