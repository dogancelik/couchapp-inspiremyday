exports.make = function (body, style, prev, next) {
  return  '<!doctype html>' + 
          '<html lang="en">' +
          '<head>' +
          '<meta charset="UTF-8">' +
          '<title>Inspire My Day</title>' +
          '<script src="./assets/resize.js"></script>' +
          '<link rel="stylesheet" href="./assets/style.css" />' +
          '<style>' +
          style +
          '</style>' +
          '</head>' +
          '<body>' +
          body +
          '<footer><div id="nav">' +
          (prev === undefined ? '' : '<a href="/' + prev + '">Check out yesterday\'s quote</a>') +
          (prev !== undefined && next !== undefined ? ' - ' : '') +
          (next === undefined ? '' : '<a href="/' + next + '">Check out tomorrow\'s quote</a>') +
          '</div><div id="info"><a href="#">Project by Doğan</a> - <a href="#">Contribute to this project!</a></div></footer>' +
          '</body>' +
          '</html>';
};