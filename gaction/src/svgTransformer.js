const path = require('path');

// module.exports = {
//     process(sourceText, sourcePath, options) {
//         return {
//             code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
//         };
//     },
//     getCacheKey() {
//         return 'svgTransformer';
//     }
// };

module.exports = {
    process(src, filename, config, options) {
      return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
    },
  };