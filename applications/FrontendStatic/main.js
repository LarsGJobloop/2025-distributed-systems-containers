console.log("Static Site Loaded")

const displayElement = safeQuerySelector(document, "[data-counter='display']")
const incrementButton = safeQuerySelector(document, "[data-counter='increment']")
const decrementButton = safeQuerySelector(document, "[data-counter='decrement']")
const resetButton = safeQuerySelector(document, "[data-counter='reset']")

/**
 * @param {Element} root
 * @param {string} selector
 */
function safeQuerySelector(root, selector) {
  const result = root.querySelector(selector)
  if (result === null) {
    throw new Error(`No element with selector found, check your HTML.\n\nSelector:\n\t${selector}\n`)
  }
  return result
}

function setValue(updater) {
  displayElement.textContent = updater(Number(displayElement.textContent));
}

const increment = () => setValue(prev => prev + 1)
const decrement = () => setValue(prev => prev - 1)
const reset = () => setValue(() => 0)

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);
