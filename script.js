

const names = ['An Artist', 'A Web Developer', 'An Animal Lover', 'An Optimist','Harry potter Fan']

function greetPerson () {
  let name = names.shift()
  names.push(name)
  const h1 = document.querySelector('.fader')
  const oldSpan = document.querySelector('span')
  
  if (oldSpan) {
    h1.removeChild(oldSpan)
  }
  
  const span = document.createElement('span')
  span.classList.add('fade')
  span.textContent = name
  h1.appendChild(span)
}

setInterval(greetPerson, 4000);


$(function() {
  $('.frame-image').hover(function() {
    $(this).siblings(".frame-title").children("p").css('color', 'var(--dark)');
  }, function() {
    // on mouseout, reset the background colour
    $('.frame-title').children("p").css('color', 'transparent');
  });
});