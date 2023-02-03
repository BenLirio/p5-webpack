import p5 from 'p5'
import draw from './draw'
import setup from './setup'

new p5((p:p5) => {
  p.setup = () => setup(p)
  p.draw = () => draw(p)
})