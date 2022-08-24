const stream = require('stream');
const {promisify} = require('util');
const fs = require('fs');
const got = require('got');

const pipeline = promisify(stream.pipeline);

const imgs = ["http://www.ghibli.jp/images/omohide1.jpg", "http://www.ghibli.jp/images/on-your-mark1.jpg", "http://www.ghibli.jp/images/ghiblies1.jpg", "http://www.ghibli.jp/images/gedo1.jpg", "http://www.ghibli.jp/images/buta1.jpg", "http://www.ghibli.jp/images/ponpoko1.jpg", "http://www.ghibli.jp/images/neko1.jpg", "http://www.ghibli.jp/images/marnie1.jpg", "http://www.ghibli.jp/images/totoro1.jpg", "http://www.ghibli.jp/images/majyo1.jpg", "http://www.ghibli.jp/images/mimi1.jpg", "http://www.ghibli.jp/images/kokuriko1.jpg", "http://www.ghibli.jp/images/nausicaa1.jpg", "http://www.ghibli.jp/images/laputa1.jpg", "http://www.ghibli.jp/images/mononoke1.jpg", "http://www.ghibli.jp/images/chihiro1.jpg", "http://www.ghibli.jp/images/howl1.jpg", "http://www.ghibli.jp/images/ponyo1.jpg", "http://www.ghibli.jp/images/arietty1.jpg", "http://www.ghibli.jp/images/kaguya1.jpg"];

(async () => {

    for(img of imgs) {
      const filename = img.split('/').reverse()[0];
      
      console.log(filename);
      
      await pipeline(
        got.stream(img),
        fs.createWriteStream(`./imgs/${filename}`)
      );
      console.log(`Got ${filename}`);
  }
})();
