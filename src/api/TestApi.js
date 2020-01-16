/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.17
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
    define(['ApiClient', 'model/TestEcho', 'model/TestValidate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TestEcho'), require('../model/TestValidate'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.TestApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.TestEcho, root.ShutterstockApiReference.TestValidate);
  }
}(this, function(ApiClient, TestEcho, TestValidate) {
  'use strict';

  /**
   * Test service.
   * @module api/TestApi
   * @version 1.0.17
   */

  /**
   * Constructs a new TestApi. 
   * @alias module:api/TestApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Echo text
     * @param {Object} opts Optional parameters
     * @param {String} opts.text Text to echo (default to ok)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestEcho} and HTTP response
     */
    this.echoWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'text': opts['text'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestEcho;

      return this.apiClient.callApi(
        '/v2/test', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Echo text
     * @param {Object} opts Optional parameters
     * @param {String} opts.text Text to echo (default to ok)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestEcho}
     */
    this.echo = function(opts) {
      return this.echoWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate input
     * @param {Number} id Integer ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tag List of tags
     * @param {String} opts.user_agent User agent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TestValidate} and HTTP response
     */
    this.validateWithHttpInfo = function(id, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling validate");
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
      };
      var collectionQueryParams = {
        'tag': {
          value: opts['tag'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
        'user-agent': opts['user_agent']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TestValidate;

      return this.apiClient.callApi(
        '/v2/test/validate', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validate input
     * @param {Number} id Integer ID
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.tag List of tags
     * @param {String} opts.user_agent User agent
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TestValidate}
     */
    this.validate = function(id, opts) {
      return this.validateWithHttpInfo(id, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
