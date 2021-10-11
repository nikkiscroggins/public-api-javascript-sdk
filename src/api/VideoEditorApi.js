/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.8
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
    define(['../ApiClient', '../model/RegisterVideoEditorRequest', '../model/UpdateVideoEditorRequest', '../model/VideoEditorTokenRequest', '../model/VideoEditorTokenResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RegisterVideoEditorRequest'), require('../model/UpdateVideoEditorRequest'), require('../model/VideoEditorTokenRequest'), require('../model/VideoEditorTokenResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.VideoEditorApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.RegisterVideoEditorRequest, root.ShutterstockApiReference.UpdateVideoEditorRequest, root.ShutterstockApiReference.VideoEditorTokenRequest, root.ShutterstockApiReference.VideoEditorTokenResponse);
  }
}(this, function(ApiClient, RegisterVideoEditorRequest, UpdateVideoEditorRequest, VideoEditorTokenRequest, VideoEditorTokenResponse) {
  'use strict';

  /**
   * VideoEditor service.
   * @module api/VideoEditorApi
   * @version 1.1.8
   */

  /**
   * Constructs a new VideoEditorApi. 
   * @alias module:api/VideoEditorApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get video editor access tokens
     * @param {Object} opts Optional parameters
     * @param {module:model/VideoEditorTokenRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/VideoEditorTokenResponse} and HTTP response
     */
    this.authVideoEditorWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VideoEditorTokenResponse;

      return this.apiClient.callApi(
        '/v2/editor/auth', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get video editor access tokens
     * @param {Object} opts Optional parameters
     * @param {module:model/VideoEditorTokenRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/VideoEditorTokenResponse}
     */
    this.authVideoEditor = function(opts) {
      return this.authVideoEditorWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Register instances of the video editor
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterVideoEditorRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.registerEditorInstanceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/editor/customers', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Register instances of the video editor
     * @param {Object} opts Optional parameters
     * @param {module:model/RegisterVideoEditorRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.registerEditorInstance = function(opts) {
      return this.registerEditorInstanceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update instances of the video editor
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateVideoEditorRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateEditorInstanceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = opts['body'];


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/v2/editor/customers', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update instances of the video editor
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateVideoEditorRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateEditorInstance = function(opts) {
      return this.updateEditorInstanceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
