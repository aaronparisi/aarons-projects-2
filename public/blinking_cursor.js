const blinkerLoop = () => {
  setTimeout(() => {
    $('#blinking-cursor').toggleClass('blinked-off')

    blinkerLoop()
  }, 500);
}

$(function() {
  blinkerLoop()
})