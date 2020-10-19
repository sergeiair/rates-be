module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './main.js';
    config.resolve.modules = ['./modules'];
    return config
  }
};
