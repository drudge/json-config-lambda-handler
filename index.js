'use strict';
const decryptEnvVars = require('aws-kms-decrypt-env');
const isJSON = require('is-json');
const debug = require('debug')('json-config-lambda-handler');

const decrypted = {};

function encryptedEnvConfigHandler(envVar, handler) {
  if (typeof envVar === 'function' && typeof handle === 'undefined') {
    handler = envVar;
    envVar = 'CONFIG';
    debug(`defaulting to ${envVar} environment variable`);
  } else {
    debug(`reading from ${envVar} environment variable`);
  }
  return function handle(event, context, callback) {
    if (typeof handler !== 'function') {
      throw new Error('Invalid handler function specified!');
    }
    const run = config => {
      debug('invoking handler');
      return handler({ event, context, config }, callback);
    };

    if (isJSON(process.env[envVar])) {
      debug('detected plain json config');
      return run(JSON.parse(process.env[envVar]));
    }

    if (decrypted.ok) {
      debug('detected existing decrypted config');
      return run(decrypted[envVar]);
    }

    debug('detected encrypted config');
    return decryptEnvVars([envVar], decrypted, (err) => {
      if (err) return callback(err);
      try {
        decrypted[envVar] = JSON.parse(decrypted[envVar]);
      } catch (error) {
        return callback(error);
      }
      return run(decrypted[envVar]);
    });
  };
}

module.exports = encryptedEnvConfigHandler;