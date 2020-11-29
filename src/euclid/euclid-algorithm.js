import p5 from 'p5';

// TODO: インタラクティブにしたい
const initValue = (a, b) => {
  let eleA = document.getElementById('A')
  let eleB = document.getElementById('B')
  eleA.value = a
  eleB.value = b
}

window.onload = function () {
  const sketch = (p5) => {
    window.p5 = p5;
    p5.setup = () => {
      const canvas = p5.createCanvas(1200, 1000)
      // const context = canvas.elt.getContext('2d');
      canvas.parent('canvas');
      p5.randomSeed(0);
    }

    p5.draw = () => {
      p5.noLoop()
      document.getElementById('A').value = 10
      document.getElementById('B').value = 6
      let numA = document.getElementById('A').value
      let numB = document.getElementById('B').value
      let ratio = numB / numA
      let scaler = 50
      let width = (numA > numB ? numB : numA) * scaler
      let wd = width
      let xPos = 0
      let yPos = 0
      let i = 0
      while (wd > 0.1) {
        i++
        p5.colorMode(p5.HSB, 1);
        const color = p5.color(p5.random(i), 1, 1)
        p5.fill(color)
        if (i % 2 == 1) {
          while (xPos + wd * ratio < width + 0.1) {
            p5.rect(xPos, yPos, wd * ratio, wd)
            xPos += wd * ratio
          }
          wd = width - xPos
        } else {
          while (yPos + wd / ratio < width + 0.1) {
            p5.rect(xPos, yPos, wd, wd / ratio)
            yPos += wd / ratio
          }
          wd = width - yPos
        }
      }
    }
  }

  new p5(sketch);
}