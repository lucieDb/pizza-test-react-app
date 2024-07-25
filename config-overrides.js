// // This file simplify import in different files using alias
// //source : https://medium.com/how-to-react/create-path-aliases-in-react-js-1256550c7d52

const path = require('path');

module.exports = function override(config) {
  config['resolve'] = {
    alias: {
        components: path.resolve(__dirname, 'src/components/'),
        styles: path.resolve(__dirname, 'src/styles/'),
        utils: path.resolve(__dirname, 'src/utils/')
    },
    extensions: ['.js']
  }

  return config;
};
