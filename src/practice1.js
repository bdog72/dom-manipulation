console.log('Dorkey')

var button = document.querySelector('button')
var para = document.querySelector('p')
button.addEventListener('click', function () {
  para.textContent = 'someone clikced me'
  button.style.background = 'red'
  para.style.color = 'orange'
})

var butt = document.querySelector('#but1')
var para1 = document.querySelector('.para1')

butt.addEventListener('click', changeText)

function changeText () {
  para1.textContent = 'someone clicked me'
}
