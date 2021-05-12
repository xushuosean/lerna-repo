import { some } from 'other-repo'

some()

import container from 'ddi-assets'

const app = document.querySelector('#app')

let div = document.createElement('div')
div.textContent = 'here is div by createElement react'
app.appendChild(div)

let img = new Image()

img.src = container.assets['500'].default

app.appendChild(img)