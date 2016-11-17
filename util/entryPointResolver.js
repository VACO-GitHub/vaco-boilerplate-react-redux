module.exports = function entryPointResolver(page) {
  return [
    'webpack-hot-middleware/client?path=/__webpack_hmr',

    './src/styles/grid/all.scss', // include MDL's grid on each page (PurifyCSS removes if unused).

    `./src/pages/${page}.jsx`,
  ];
};
