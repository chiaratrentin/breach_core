/*
 * Breach: [modules] modules_s.js
 *
 * Copyright (c) 2014, Stanislas Polu. All rights reserved.
 *
 * @author: spolu
 *
 * @log:
 * - 2014-05-29 spolu  Support for modules output
 * - 2014-05-27 spolu  Enhance semantics to cover add/install/run
 * - 2014-04-17 spolu  Creation
 */
'use strict'

//
// ## Module list & commands
//
angular.module('breach.services').
  factory('_modules', function(_req, _bind) {
    var _modules = {
      list: function() {
        return _req.get('/modules/list');
      },
      add: function(path) {
        return _req.post('/modules/add', { path: path });
      },
      install: function(path) {
        return _req.post('/modules/install', { path: path });
      },
      remove: function(path) {
        return _req.post('/modules/remove', { path: path });
      },
      update: function(path) {
        return _req.post('/modules/update', { path: path });
      },
      output: function(path) {
        return _req.post('/modules/output', { path: path });
      },
      run: function(path) {
        return _req.post('/modules/run', { path: path });
      },
      kill: function(path) {
        return _req.post('/modules/kill', { path: path });
      }
    };

    return _modules;
});
