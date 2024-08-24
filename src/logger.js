const pino = require('pino');
const { logger } = require('../_config/appConfig.json');

pino.config(logger)
