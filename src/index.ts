import p5 from 'p5'
import draw from './draw'
import setup from './setup'

window.addEventListener('DOMContentLoaded', () => {
  const p5Div = document.getElementById('p5-div')
  new p5((p:p5) => {
    p.setup = () => setup(p)
    p.draw = () => draw(p)
  }, p5Div)
})