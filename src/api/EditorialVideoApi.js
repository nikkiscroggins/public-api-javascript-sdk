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
    define(['../ApiClient', '../model/DownloadHistoryDataList', '../model/EditorialVideoCategoryResults', '../model/EditorialVideoContent', '../model/EditorialVideoSearchResults', '../model/LicenseEditorialContentResults', '../model/LicenseEditorialVideoContentRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DownloadHistoryDataList'), require('../model/EditorialVideoCategoryResults'), require('../model/EditorialVideoContent'), require('../model/EditorialVideoSearchResults'), require('../model/LicenseEditorialContentResults'), require('../model/LicenseEditorialVideoContentRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.ShutterstockApiReference) {
      root.ShutterstockApiReference = {};
    }
    root.ShutterstockApiReference.EditorialVideoApi = factory(root.ShutterstockApiReference.ApiClient, root.ShutterstockApiReference.DownloadHistoryDataList, root.ShutterstockApiReference.EditorialVideoCategoryResults, root.ShutterstockApiReference.EditorialVideoContent, root.ShutterstockApiReference.EditorialVideoSearchResults, root.ShutterstockApiReference.LicenseEditorialContentResults, root.ShutterstockApiReference.LicenseEditorialVideoContentRequest);
  }
}(this, function(ApiClient, DownloadHistoryDataList, EditorialVideoCategoryResults, EditorialVideoContent, EditorialVideoSearchResults, LicenseEditorialContentResults, LicenseEditorialVideoContentRequest) {
  'use strict';

  /**
   * EditorialVideo service.
   * @module api/EditorialVideoApi
   * @version 1.1.32
   */

  /**
   * Constructs a new EditorialVideoApi. 
   * @alias module:api/EditorialVideoApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    this.setAppName = function (value) {
      this.apiClient.defaultHeaders = Object.assign({}, this.apiClient.defaultHeaders, {
        'x-shutterstock-application': value + ',shutterstock-sdk/v1.1.32',
      });
    };




    /**
     * Get editorial video content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoContent} and HTTP response
     */
    this.getEditorialVideoWithHttpInfo = function(id, country, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getEditorialVideo");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling getEditorialVideo");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'country': country,
        'search_id': opts['search_id'],
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
      var returnType = EditorialVideoContent;

      return this.apiClient.callApi(
        '/v2/editorial/videos/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get editorial video content details
     * This endpoint shows information about an editorial image, including a URL to a preview image and the sizes that it is available in.
     * @param {String} id Editorial ID
     * @param {String} country Returns only if the content is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.search_id The ID of the search that is related to this request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoContent}
     */
    this.getEditorialVideo = function(id, country, opts) {
      return this.getEditorialVideoWithHttpInfo(id, country, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List editorial video licenses
     * This endpoint lists existing editorial video licenses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.video_id Show licenses for the specified editorial video ID
     * @param {String} opts.license Show editorial videos that are available with the specified license name
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order (default to newest)
     * @param {String} opts.username Filter licenses by username of licensee
     * @param {Date} opts.start_date Show licenses created on or after the specified date
     * @param {Date} opts.end_date Show licenses created before the specified date
     * @param {module:model/String} opts.download_availability Filter licenses by download availability (default to all)
     * @param {Boolean} opts.team_history Set to true to see license history for all members of your team. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DownloadHistoryDataList} and HTTP response
     */
    this.getEditorialVideoLicenseListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'video_id': opts['video_id'],
        'license': opts['license'],
        'page': opts['page'],
        'per_page': opts['per_page'],
        'sort': opts['sort'],
        'username': opts['username'],
        'start_date': opts['start_date'],
        'end_date': opts['end_date'],
        'download_availability': opts['download_availability'],
        'team_history': opts['team_history'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['customer_accessCode'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DownloadHistoryDataList;

      return this.apiClient.callApi(
        '/v2/editorial/videos/licenses', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List editorial video licenses
     * This endpoint lists existing editorial video licenses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.video_id Show licenses for the specified editorial video ID
     * @param {String} opts.license Show editorial videos that are available with the specified license name
     * @param {Number} opts.page Page number (default to 1)
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {module:model/String} opts.sort Sort order (default to newest)
     * @param {String} opts.username Filter licenses by username of licensee
     * @param {Date} opts.start_date Show licenses created on or after the specified date
     * @param {Date} opts.end_date Show licenses created before the specified date
     * @param {module:model/String} opts.download_availability Filter licenses by download availability (default to all)
     * @param {Boolean} opts.team_history Set to true to see license history for all members of your team. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DownloadHistoryDataList}
     */
    this.getEditorialVideoLicenseList = function(opts) {
      return this.getEditorialVideoLicenseListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * License editorial video content
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @param {module:model/LicenseEditorialVideoContentRequest} body License editorial video content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LicenseEditorialContentResults} and HTTP response
     */
    this.licenseEditorialVideoWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling licenseEditorialVideo");
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
      var returnType = LicenseEditorialContentResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/licenses', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * License editorial video content
     * This endpoint gets licenses for one or more editorial videos. You must specify the country and one or more editorial videos to license. The download links in the response are valid for 8 hours.
     * @param {module:model/LicenseEditorialVideoContentRequest} body License editorial video content
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LicenseEditorialContentResults}
     */
    this.licenseEditorialVideo = function(body) {
      return this.licenseEditorialVideoWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List editorial video categories
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoCategoryResults} and HTTP response
     */
    this.listEditorialVideoCategoriesWithHttpInfo = function() {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = EditorialVideoCategoryResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/categories', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List editorial video categories
     * This endpoint lists the categories that editorial videos can belong to, which are separate from the categories that other types of assets can belong to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoCategoryResults}
     */
    this.listEditorialVideoCategories = function() {
      return this.listEditorialVideoCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search editorial video content
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial video content that is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
     * @param {Array.<String>} opts.supplier_code Show only editorial video content from certain suppliers
     * @param {Date} opts.date_start Show only editorial video content generated on or after a specific date
     * @param {Date} opts.date_end Show only editorial video content generated on or before a specific date
     * @param {module:model/String} opts.resolution Show only editorial video content with specific resolution
     * @param {Number} opts.fps Show only editorial video content generated with specific frames per second
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/EditorialVideoSearchResults} and HTTP response
     */
    this.searchEditorialVideosWithHttpInfo = function(country, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling searchEditorialVideos");
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
        'resolution': opts['resolution'],
        'fps': opts['fps'],
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
      var returnType = EditorialVideoSearchResults;

      return this.apiClient.callApi(
        '/v2/editorial/videos/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search editorial video content
     * This endpoint searches for editorial videos. If you specify more than one search parameter, the API uses an AND condition. For example, if you set the `category` parameter to \"Alone,Performing\" and also specify a `query` parameter, the results include only videos that match the query and are in both the Alone and Performing categories.  You can also filter search terms out in the `query` parameter by prefixing the term with NOT.
     * @param {String} country Show only editorial video content that is available for distribution in a certain country
     * @param {Object} opts Optional parameters
     * @param {String} opts.query One or more search terms separated by spaces
     * @param {module:model/String} opts.sort Sort by (default to relevant)
     * @param {String} opts.category Show editorial content with each of the specified editorial categories; specify category names in a comma-separated list
     * @param {Array.<String>} opts.supplier_code Show only editorial video content from certain suppliers
     * @param {Date} opts.date_start Show only editorial video content generated on or after a specific date
     * @param {Date} opts.date_end Show only editorial video content generated on or before a specific date
     * @param {module:model/String} opts.resolution Show only editorial video content with specific resolution
     * @param {Number} opts.fps Show only editorial video content generated with specific frames per second
     * @param {Number} opts.per_page Number of results per page (default to 20)
     * @param {String} opts.cursor The cursor of the page with which to start fetching results; this cursor is returned from previous requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/EditorialVideoSearchResults}
     */
    this.searchEditorialVideos = function(country, opts) {
      return this.searchEditorialVideosWithHttpInfo(country, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
