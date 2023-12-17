function getRandomHexColor() {
  const randColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
      return randColor;
    }

    const startButton = document.querySelector('[data-start]');
    const stopButton = document.querySelector('[data-stop]');

    let intervalId = null;

    // start changing background colors per 1 second
    function startColorChange() {
      startButton.disabled = true;
      stopButton.disabled = false;

      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    }

    // Stop changing colors function
    function stopColorChange() {
      startButton.disabled = false;
      stopButton.disabled = true;

      clearInterval(intervalId);
    }

    // buttons for evet function
    startButton.addEventListener('click', startColorChange);
    stopButton.addEventListener('click', stopColorChange);
