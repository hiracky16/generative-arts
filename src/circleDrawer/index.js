import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

window.onload = function () {
  const sketch = (p5) => {
    window.p5 = p5;
    p5.setup = () => {
      const canvas = p5.createCanvas(800, 800)
      const context = canvas.elt.getContext('2d');
      canvas.parent('canvas');
      p5.randomSeed(0);
    }

    p5.draw = () => {
      var r = p5.random(0, 255);
      var g = p5.random(0, 255);
      var b = p5.random(0, 255);
      p5.fill(r, g, b)
      p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    }
  }

  new p5(sketch);
}