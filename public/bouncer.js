const timeoutLoop = () => {
  let waitTime = ($('.bouncer').hasClass('bounced')) ? 1000 : 500;

  setTimeout(() => {
    $('.bouncer').toggleClass('bounced')

    timeoutLoop()
  }, waitTime);
}

$(function() {
  timeoutLoop()
})