'use strict';

/**
 * content-manager service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::content-manager.content-manager');
