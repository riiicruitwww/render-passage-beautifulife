const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'module-resolver',
    {
      root: ['./src'],
      alias: {
        App: './src/components/App/App',
        Base: './src/components/Base',
        Contents: './src/components/Contents',
        NotFound: './src/components/NotFound/NotFound',
        Template: './src/components/Template'
      }
    }
  ])
);
