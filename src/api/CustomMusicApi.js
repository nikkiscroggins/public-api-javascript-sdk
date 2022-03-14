/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.1.16
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
    define(['../ApiClient', '../model/AudioRendersListResults', '../model/CreateAudioRendersRequest', '../model/DescriptorsListResult', '../model/InstrumentsListResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AudioRendersListResults'), require('../model/CreateAudioRendersRequest'), require('../model/DescriptorsListResult'), require('../model/InstrumentsListResult'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.CustomMusicApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.AudioRendersListResults, root.ShutterstockApiReference.CreateAudioRendersRequest, root.ShutterstockApiReference.DescriptorsListResult, root.ShutterstockApiReference.InstrumentsListResult);
  }
}(this, function(ApiClient, AudioRendersListResults, CreateAudioRendersRequest, DescriptorsListResult, InstrumentsListResult) {
  'use strict';

  /**
   * CustomMusic service.
   * @module api/CustomMusicApi
   * @version 1.1.16
   */

  /**
   * Constructs a new CustomMusicApi. 
   * @alias module:api/CustomMusicApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create rendered audio
     * This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
     * @param {module:model/CreateAudioRendersRequest} body Parameters for the audio, including the timeline and information about the output file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AudioRendersListResults} and HTTP response
     */
    this.createAudioRendersWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createAudioRenders");
      }


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

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AudioRendersListResults;

      return this.apiClient.callApi(
        '/v2/ai/audio/renders', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create rendered audio
     * This endpoint creates rendered audio from timeline data. It returns a render ID that you can use to download the finished audio when it is ready. The render ID is valid for up to 48 hours.
     * @param {module:model/CreateAudioRendersRequest} body Parameters for the audio, including the timeline and information about the output file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AudioRendersListResults}
     */
    this.createAudioRenders = function(body) {
      return this.createAudioRendersWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get details about audio renders
     * This endpoint shows the status of one or more audio renders, including download links for completed audio.
     * @param {Array.<String>} id One or more render IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AudioRendersListResults} and HTTP response
     */
    this.fetchRendersWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling fetchRenders");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
        'id': {
          value: id,
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = AudioRendersListResults;

      return this.apiClient.callApi(
        '/v2/ai/audio/renders', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get details about audio renders
     * This endpoint shows the status of one or more audio renders, including download links for completed audio.
     * @param {Array.<String>} id One or more render IDs
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AudioRendersListResults}
     */
    this.fetchRenders = function(id) {
      return this.fetchRendersWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List computer audio descriptors
     * This endpoint lists the descriptors that you can use in the audio regions in an audio render.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.render_speed_over Show descriptors with an average render speed that is greater than or equal to the specified value
     * @param {String} opts.band_id Show descriptors that contain the specified band (case-sentsitive)
     * @param {String} opts.band_name Show descriptors with the specified band name (case-sensitive)
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {Array.<String>} opts.id Show descriptors with the specified IDs (case-sensitive)
     * @param {String} opts.instrument_name Show descriptors with the specified instrument name (case-sensitive)
     * @param {String} opts.instrument_id Show descriptors with the specified instrument ID (case-sensitive)
     * @param {Number} opts.tempo Show descriptors whose tempo range includes the specified tempo in beats per minute
     * @param {Number} opts.tempo_to Show descriptors with a tempo that is less than or equal to the specified number
     * @param {Number} opts.tempo_from Show descriptors that have a tempo range that includes the specified tempo in beats per minute
     * @param {String} opts.name Show descriptors with the specified name (case-sensitive)
     * @param {String} opts.tag Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DescriptorsListResult} and HTTP response
     */
    this.listCustomDescriptorsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'render_speed_over': opts['render_speed_over'],
        'band_id': opts['band_id'],
        'band_name': opts['band_name'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'instrument_name': opts['instrument_name'],
        'instrument_id': opts['instrument_id'],
        'tempo': opts['tempo'],
        'tempo_to': opts['tempo_to'],
        'tempo_from': opts['tempo_from'],
        'name': opts['name'],
        'tag': opts['tag'],
      };
      var collectionQueryParams = {
        'id': {
          value: opts['id'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DescriptorsListResult;

      return this.apiClient.callApi(
        '/v2/ai/audio/descriptors', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List computer audio descriptors
     * This endpoint lists the descriptors that you can use in the audio regions in an audio render.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.render_speed_over Show descriptors with an average render speed that is greater than or equal to the specified value
     * @param {String} opts.band_id Show descriptors that contain the specified band (case-sentsitive)
     * @param {String} opts.band_name Show descriptors with the specified band name (case-sensitive)
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {Array.<String>} opts.id Show descriptors with the specified IDs (case-sensitive)
     * @param {String} opts.instrument_name Show descriptors with the specified instrument name (case-sensitive)
     * @param {String} opts.instrument_id Show descriptors with the specified instrument ID (case-sensitive)
     * @param {Number} opts.tempo Show descriptors whose tempo range includes the specified tempo in beats per minute
     * @param {Number} opts.tempo_to Show descriptors with a tempo that is less than or equal to the specified number
     * @param {Number} opts.tempo_from Show descriptors that have a tempo range that includes the specified tempo in beats per minute
     * @param {String} opts.name Show descriptors with the specified name (case-sensitive)
     * @param {String} opts.tag Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DescriptorsListResult}
     */
    this.listCustomDescriptors = function(opts) {
      return this.listCustomDescriptorsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List computer audio instruments
     * This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id Show instruments with the specified ID
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {Number} opts.page Page number (default to 1)
     * @param {String} opts.name Show instruments with the specified name (case-sensitive)
     * @param {String} opts.tag Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InstrumentsListResult} and HTTP response
     */
    this.listCustomInstrumentsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'per_page': opts['per_page'],
        'page': opts['page'],
        'name': opts['name'],
        'tag': opts['tag'],
      };
      var collectionQueryParams = {
        'id': {
          value: opts['id'],
          collectionFormat: 'multi'
        },
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InstrumentsListResult;

      return this.apiClient.callApi(
        '/v2/ai/audio/instruments', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List computer audio instruments
     * This endpoint lists the instruments that you can include in computer audio. If you specify more than one search parameter, the API uses an AND condition.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.id Show instruments with the specified ID
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {Number} opts.page Page number (default to 1)
     * @param {String} opts.name Show instruments with the specified name (case-sensitive)
     * @param {String} opts.tag Show instruments with the specified tag, such as Percussion or Strings (case-sensitive)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InstrumentsListResult}
     */
    this.listCustomInstruments = function(opts) {
      return this.listCustomInstrumentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
