'use strict';

define([
    'intern!object',
    'intern/chai!assert',
    'intern/dojo/request'
], function (registerSuite, assert, request) {
    registerSuite({
        name: 'async demo',

        'async test': function () {
            var dfd = this.async(1000);

            request('http://example.com/').then(dfd.callback(function (data) {
                assert.match(data, /Example Domain/, 'example.com contains the text "Example Domain"');
            }), dfd.reject.bind(dfd));
        }
    });
});
