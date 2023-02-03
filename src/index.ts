import p5 from 'p5'
import draw from './draw'
import setup from './setup'

window.addEventListener('DOMContentLoaded', () => {
  new p5((p:p5) => {
    p.setup = () => setup(p)
    p.draw = () => draw(p)
  })
})