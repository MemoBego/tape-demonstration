'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.point = point;
exports.add = add;
exports.isTrue = isTrue;
function point(x, y) {
	return '(' + x + ',' + y + ')';
}

function add(x, y) {
	return x + y;
}

function isTrue(x) {
	if (x) return true;else return false;
	console.log("Aqui no debería de llegar y no cubrirla");
}
