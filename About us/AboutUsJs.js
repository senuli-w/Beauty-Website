let currentFontSize = 16; // Initial font size in pixels

  function increaseFontSize() {
    currentFontSize += 2; // Increase font size by 2 pixels
    document.querySelector("main").style.fontSize = currentFontSize + "px";
  }

  function decreaseFontSize() {
    if (currentFontSize > 10) {
      // Prevent font size from going below 10 pixels
      currentFontSize -= 2; // Decrease font size by 2 pixels
      document.querySelector("main").style.fontSize =
        currentFontSize + "px";
    }
  }