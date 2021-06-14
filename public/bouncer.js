const timeoutLoop = () => {
  let waitTime = ($('.bouncer').hasClass('bounced')) ? 1000 : 500;

  setTimeout(() => {
    if ($('#hero-bouncer').hasClass('bounced') && ! $('#about-bouncer').hasClass('bounced')) {
      // let hero bouncer fall to the bottom before you start bouncing about
      $('#hero-bouncer').toggleClass('bounced')
    } else {
      $('.bouncer').toggleClass('bounced')
    }

    timeoutLoop()
  }, waitTime);
}

$(function() {
  timeoutLoop()
})