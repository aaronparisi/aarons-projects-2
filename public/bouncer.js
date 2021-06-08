const timeoutLoop = () => {
  let waitTime = ($('#bouncer-about').hasClass('bounced')) ? 1000 : 500;

  setTimeout(() => {
    $('.bouncer').toggleClass('bounced')

    timeoutLoop()
  }, waitTime);
}

$(function() {
  timeoutLoop()
})