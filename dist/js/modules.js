/**
 * Injects the content of an HTML file into a specified HTML element.
 * @param {string} filePath - Path to the HTML file to inject.
 * @param {HTMLElement} elem - The target HTML element for content injection.
 * sample
 */
async function injectHTML(filePath, elem) {
  try {
    // Fetch the HTML file
    const response = await fetch(filePath);

    // Handle fetch errors
    if (!response.ok) {
      console.error(
        `Failed to fetch file: ${filePath} (Status: ${response.status})`
      );
      return;
    }

    // Inject the fetched content into the target element
    const htmlContent = await response.text();
    elem.innerHTML = htmlContent;
  } catch (error) {
    console.error(`Error injecting HTML from ${filePath}:`, error.message);
  }
}

/**
 * Processes all <div> elements with an "include" attribute.
 * Injects the content of the specified HTML file into each matching element.
 */
function injectAll() {
  const elements = document.querySelectorAll('div[include]');

  elements.forEach((elem) => {
    const filePath = elem.getAttribute('include');

    if (filePath) {
      injectHTML(filePath, elem);
    } else {
      console.warn('Missing "include" attribute in element:', elem);
    }
  });
}

// Initialize the injection process
injectAll();
