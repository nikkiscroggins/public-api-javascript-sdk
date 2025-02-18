/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.32
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.9
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/InsightsLabelPerformance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InsightsLabelPerformance'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.Insights = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.InsightsLabelPerformance);
  }
}(this, function(ApiClient, InsightsLabelPerformance) {
  'use strict';




  /**
   * The Insights model module.
   * @module model/Insights
   * @version 1.1.32
   */

  /**
   * Constructs a new <code>Insights</code>.
   * AI-powered insights about an asset, based on the specified audience and objective
   * @alias module:model/Insights
   * @class
   * @param label_performance {Array.<module:model/InsightsLabelPerformance>} How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images
   */
  var exports = function(label_performance) {
    var _this = this;

    _this['label_performance'] = label_performance;
  };

  /**
   * Constructs a <code>Insights</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Insights} obj Optional instance to populate.
   * @return {module:model/Insights} The populated <code>Insights</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('label_performance')) {
        obj['label_performance'] = ApiClient.convertToType(data['label_performance'], [InsightsLabelPerformance]);
      }
    }
    return obj;
  }

  /**
   * How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images
   * @member {Array.<module:model/InsightsLabelPerformance>} label_performance
   */
  exports.prototype['label_performance'] = undefined;



  return exports;
}));


