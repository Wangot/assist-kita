var browserify = require('browserify'),
    path = require('path'),
    fs = require('fs');

  var config = require('./config.json'),
  deps = config.dependencies;

  var srcPath = path.join(__dirname, '../', 'assets', 'js', 'main.js');
  var bundlePath = path.join(__dirname, '../', 'assets', 'build', 'vendor.js');

  var bundler = browserify();

  for (var i = 0; i < deps.length; i++) {
    bundler.require(deps[i]);
  }

  bundler.bundle()
  .on('error', function (err) { console.error(err); })
  .pipe(
    fs.createWriteStream(bundlePath)
    .on('finish', function() {
      var myArgs = process.argv.slice(2);
      if (myArgs == 'minify') {
        var UglifyJS = require("uglify-js");

        var result = UglifyJS.minify(bundlePath, {
            mangle: false
        });

        var wstream = fs.createWriteStream(bundlePath);
        wstream.write(result.code);
        wstream.end();
      }
    })
  );
