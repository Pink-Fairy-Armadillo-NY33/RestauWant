import server from './server/server.js'

module.exports = async (globalConfig) => {
    server.close();
  };