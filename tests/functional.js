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

            request('http://example.com/test.json').then(dfd.callback(function (data) {
                assert.strictEqual(data, 'Hello world!');
            }), dfd.reject.bind(dfd));
        }
    });
});
