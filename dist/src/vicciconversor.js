"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.conversorToKg = conversorToKg;
exports.conversorToLb = conversorToLb;
var lb = 0.453592;
var kg = 2.20462;

function conversorToKg(num) {

	var kilos = lb * num;
	return kilos;
}

function conversorToLb(num) {

	var libras = kg * num;
	return libras;
}