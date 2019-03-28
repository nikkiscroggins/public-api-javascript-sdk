/**
 * Shutterstock API Reference
 * The Shutterstock API provides access to Shutterstock's library of media, as well as information about customers' accounts and the contributors that provide the media.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/EditorialContent', 'model/EditorialContentDataList', 'model/EditorialLivefeed', 'model/EditorialLivefeedList', 'model/EditorialSearchResults', 'model/LicenseEditorialContentRequest', 'model/LicenseEditorialContentResultDataList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EditorialContent'), require('../model/EditorialContentDataList'), require('../model/EditorialLivefeed'), require('../model/EditorialLivefeedList'), require('../model/EditorialSearchResults'), require('../model/LicenseEditorialContentRequest'), require('../model/LicenseEditorialContentResultDataList'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.EditorialContent, root.ShutterstockApiReference.EditorialContentDataList, root.ShutterstockApiReference.EditorialLivefeed, root.ShutterstockApiReference.EditorialLivefeedList, root.ShutterstockApiReference.EditorialSearchResults, root.ShutterstockApiReference.LicenseEditorialContentRequest, root.ShutterstockApiReference.LicenseEditorialContentResultDataList);
  }
}(this, function(ApiClient, EditorialContent, EditorialContentDataList, EditorialLivefeed, EditorialLivefeedList, EditorialSearchResults, LicenseEditorialContentRequest, LicenseEditorialContentResultDataList) {
  'use strict';

  /**
   * Editorial service.
   * @module api/EditorialApi
   * @version 1.0.0
   */

  /**
   * Constructs a new EditorialApi. 
   * @alias module:api/EditorialApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get editorial content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialContent} and HTTP response
     */
    this.getEditorialImageWithHttpInfo = function(id, country) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEditorialImage");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getEditorialImage");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'country': country,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialContent;

      return this.apiClient.callApi(
        '/v2/editorial/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialContent}
     */
    this.getEditorialImage = function(id, country) {
      return this.getEditorialImageWithHttpInfo(id, country)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get editorial livefeed
     * @param {String} id Editorial livefeed ID; must be an URI encoded string
     * @param {String} country Returns only if the livefeed is available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialLivefeed} and HTTP response
     */
    this.getEditorialLivefeedWithHttpInfo = function(id, country) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEditorialLivefeed");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getEditorialLivefeed");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'country': country,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialLivefeed;

      return this.apiClient.callApi(
        '/v2/editorial/livefeeds/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial livefeed
     * @param {String} id Editorial livefeed ID; must be an URI encoded string
     * @param {String} country Returns only if the livefeed is available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialLivefeed}
     */
    this.getEditorialLivefeed = function(id, country) {
      return this.getEditorialLivefeedWithHttpInfo(id, country)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get editorial livefeed items
     * @param {String} id Editorial livefeed ID; must be an URI encoded string
     * @param {String} country Returns only if the livefeed items are available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialContentDataList} and HTTP response
     */
    this.getEditorialLivefeedItemsWithHttpInfo = function(id, country) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEditorialLivefeedItems");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getEditorialLivefeedItems");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'country': country,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialContentDataList;

      return this.apiClient.callApi(
        '/v2/editorial/livefeeds/{id}/items', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial livefeed items
     * @param {String} id Editorial livefeed ID; must be an URI encoded string
     * @param {String} country Returns only if the livefeed items are available for distribution in a certain country; specify with 3-letter country code
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialContentDataList}
     */
    this.getEditorialLivefeedItems = function(id, country) {
      return this.getEditorialLivefeedItemsWithHttpInfo(id, country)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get editorial livefeed list
     * @param {String} country Returns only livefeeds that are available for distribution in a certain country; specify with 3-letter country code
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page, defaults to 20 (default to 20)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialLivefeedList} and HTTP response
     */
    this.getEditorialLivefeedListWithHttpInfo = function(country, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getEditorialLivefeedList");
      }


      var pathParams = {
      };
      var queryParams = {
        'country': country,
        'page': opts['page'],
        'per_page': opts['per_page'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basic', 'customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialLivefeedList;

      return this.apiClient.callApi(
        '/v2/editorial/livefeeds', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial livefeed list
     * @param {String} country Returns only livefeeds that are available for distribution in a certain country; specify with 3-letter country code
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page, defaults to 20 (default to 20)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialLivefeedList}
     */
    this.getEditorialLivefeedList = function(country, opts) {
      return this.getEditorialLivefeedListWithHttpInfo(country, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * License editorial content
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
     * @param {module:model/LicenseEditorialContentRequest} body License editorial content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseEditorialContentResultDataList} and HTTP response
     */
    this.licenseEditorialImageWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling licenseEditorialImage");
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

      var authNames = ['customer_accessCode'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = LicenseEditorialContentResultDataList;

      return this.apiClient.callApi(
        '/v2/editorial/licenses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * License editorial content
     * This endpoint gets licenses for one or more editorial images. You must specify the country and one or more editorial images to license.
     * @param {module:model/LicenseEditorialContentRequest} body License editorial content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseEditorialContentResultDataList}
     */
    this.licenseEditorialImage = function(body) {
      return this.licenseEditorialImageWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search editorial content
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the &#x60;query&#x60; parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial content that is available for distribution in a certain country; specify with 3-letter country code
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial content within a certain editorial category; specify by category name
     * @param {Array.<String>} opts.supplier_code Show only editorial content from certain suppliers
     * @param {Date} opts.date_start Show only editorial content generated on or after a specific date, in the format of YYYY-MM-DD
     * @param {Date} opts.date_end Show only editorial content generated on or before a specific date, in the format of YYYY-MM-DD
     * @param {Number} opts.per_page Number of results per page, defaults to 20 (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialSearchResults} and HTTP response
     */
    this.searchEditorialWithHttpInfo = function(country, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling searchEditorial");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': opts['query'],
        'sort': opts['sort'],
        'category': opts['category'],
        'country': country,
        'date_start': opts['date_start'],
        'date_end': opts['date_end'],
        'per_page': opts['per_page'],
        'cursor': opts['cursor'],
      };
      var collectionQueryParams = {
        'supplier_code': {
          value: opts['supplier_code'],
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
      var returnType = EditorialSearchResults;

      return this.apiClient.callApi(
        '/v2/editorial/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search editorial content
     * This endpoint searches for editorial images. If you specify more than one search parameter, the API uses an AND condition. Array parameters can be specified multiple times; in this case, the API uses an AND or an OR condition with those values, depending on the parameter. You can also filter search terms out in the &#x60;query&#x60; parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial content that is available for distribution in a certain country; specify with 3-letter country code
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial content within a certain editorial category; specify by category name
     * @param {Array.<String>} opts.supplier_code Show only editorial content from certain suppliers
     * @param {Date} opts.date_start Show only editorial content generated on or after a specific date, in the format of YYYY-MM-DD
     * @param {Date} opts.date_end Show only editorial content generated on or before a specific date, in the format of YYYY-MM-DD
     * @param {Number} opts.per_page Number of results per page, defaults to 20 (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialSearchResults}
     */
    this.searchEditorial = function(country, opts) {
      return this.searchEditorialWithHttpInfo(country, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
