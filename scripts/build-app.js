var browserify = require('browserify'),
    parcelify = require('parcelify'),
    path = require('path'),
    fs = require('fs');

  var config = require('./config.json'),
  deps = config.dependencies;

  var assetPath = path.join(__dirname, '../', 'assets');

  var srcPath = path.join(assetPath, 'js', 'main.js');
  var bundlePath = path.join(assetPath, 'build', 'app.js');
  var bundlePathMap = path.join(assetPath, 'build', 'app.min.js');

  var bundler = browserify(srcPath);

  for (var i = 0; i < deps.length; i++) {
    bundler.external(deps[i]);
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


// build css
var options = {
    bundles : {
      // script : path.join( dstDir, 'bundle.js' ),
      style : path.join( assetPath, 'stylesheets', 'plugins.css' )
    }
  };

p = parcelify(bundler, options);
