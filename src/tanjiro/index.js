import p5 from 'p5';
import 'p5/lib/addons/p5.dom';

window.onload = function () {
  const sketch = (p5) => {
    window.p5 = p5;
    const height = window.parent.screen.height;
    const width = window.parent.screen.width;
    p5.setup = () => {
      const canvas = p5.createCanvas(width, height)
      canvas.background(0);
      canvas.parent('canvas');
      p5.randomSeed(0);
    }

    p5.draw = () => {
      const step = 30;
      /// 参考: https://game.watch.impress.co.jp/img/gmw/list/1265/178/1.jpg
      const tanjiroGreen = "#25a37e";
      for (let y = 0; y <= 800; y += step) {
        if (y % (step * 2) == 0) {
          for (let x = step; x <= width; x += step * 2) {
            p5.noStroke();
            p5.fill(tanjiroGreen);
            p5.rect(x, y, step, step);
          }
        } else {
          for (let x = 0; x <= width; x += step * 2) {
            p5.noStroke();
            p5.fill(tanjiroGreen);
            p5.rect(x, y, step, step);
          }
        }
      }
    }
  }

  new p5(sketch);
}