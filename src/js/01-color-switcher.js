 const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
  }

  refs.startBtn.addEventListener('click', startColorChange);
  refs.stopBtn.addEventListener('click', stopColorChange);

  let intervalId = null;

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  };

  function startColorChange() {    
    refs.startBtn.disabled = true;

    intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
 };

  function stopColorChange () {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
  }
  