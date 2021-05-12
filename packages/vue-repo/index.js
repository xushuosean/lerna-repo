import container from 'ddi-assets'

const app = document.querySelector('#app')

let div = document.createElement('div')
div.textContent = 'here is div by createElement'
app.appendChild(div)

let img = new Image()

console.log(container.assets)

img.src = container.assets['404'].default

let img1 = new Image()
img1.src = require('../ddi-assets/img/404.png').default

app.appendChild(img1)

app.appendChild(img)