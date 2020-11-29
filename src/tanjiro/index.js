import p5 from 'p5'
import 'p5/lib/addons/p5.dom'

window.onload = function () {
  const sketch = (p5) => {
    window.p5 = p5
    const height = window.parent.screen.height
    const width = window.parent.screen.width
    p5.setup = () => {
      const canvas = p5.createCanvas(width, height)
      canvas.background(0)
      canvas.parent('canvas')
    }

    const size = 30
    const tanjiroGreen = "#25a36e"
    p5.draw = () => {
      for (let y = 0; y <= height; y += size) {
        if (y % (size * 2) == 0) {
          for (let x = size; x <= width; x += size * 2) {
            p5.noStroke()
            p5.fill(tanjiroGreen)
            p5.rect(x, y, size, size)
          }
        } else {
          for (let x = 0; x <= width; x += size * 2) {
            p5.noStroke()
            p5.fill(tanjiroGreen)
            p5.rect(x, y, size, size)
          }
        }
      }
    }
  }

  new p5(sketch)
}