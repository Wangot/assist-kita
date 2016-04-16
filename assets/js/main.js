/**
 *
 */

'use strict';

require('lodash');
require('angular-simple-logger');

var angular = require('angular');
var uiBootstrap = require('angular-ui-bootstrap');
var ngRoute = require('angular-route');
// var angularAnimate = require('angular-animate');
var angularSanitize = require('angular-sanitize');

require('angular-resource');
require('angular-google-maps');
require('angularjs-geolocation');
// require('ng-file-upload');
require('ui-select');
require('angular-loading-bar');
require('angular-ui-notification');
require('angular-local-storage');
// require('./external_lib/ng-i18next/ng-i18next.min.js');

var app = angular.module('app.core',
    [
        uiBootstrap,
        ngRoute,
        // angularAnimate,
        angularSanitize,
        'uiGmapgoogle-maps',
        'geolocation',
        'app.user',
        'app.privatespace',
        'app.template',
        'ngResource',
        'ngFileUpload',
        'ui.select',
        'angular-loading-bar',
        'ui-notification',
        'LocalStorageModule',
    ]);

require('./modules/core');
require('./modules/privatespace/');