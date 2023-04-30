"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exactData = exports.exactResponse = void 0;
var _ = require("lodash");
//
var exactResponse = function (req, arr, identifyer) {
    var query;
    if (req.headers[identifyer] !== undefined) {
        query = req.headers[identifyer].split(',');
    }
    else if (req.query[identifyer] !== undefined) {
        query = req.query[identifyer].split(',');
    }
    else if (req.body[identifyer] !== undefined) {
        query = req.body[identifyer].split(',');
    }
    else {
        query = null;
    }
    if (_.isArray(arr)) {
        return arr.map(function (e) { return _.pick(e, query); });
    }
    else {
        return _.pick(arr, query);
    }
};
exports.exactResponse = exactResponse;
var exactData = function (query, arr) {
    var qr = query.split(',');
    if (_.isArray(arr)) {
        return arr.map(function (e) { return _.pick(e, qr); });
    }
    else {
        return _.pick(arr, qr);
    }
};
exports.exactData = exactData;
