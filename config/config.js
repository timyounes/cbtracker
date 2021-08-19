const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    server: {
      port: process.env.PORT || 3000,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://localhost/express-development',
    },
  },

  test: {
    server: {
      port: process.env.PORT || 3100,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://localhost/express-test',
    },
  },

  production: {
    server: {
      port: process.env.PORT || 443,
      hostname: process.env.HOSTNAME || 'localhost',
    },
    database: {
      url: 'mongodb://mongo:27017/express-production',
    },
  },
};

config[env].isDev = env === 'development';
config[env].isTest = env === 'test';
config[env].isProd = env === 'production';

process.argv.forEach((val) => {
  if (val.startsWith('--port')) config[env].port = val.split('=')[1];
});

module.exports = config[env];
