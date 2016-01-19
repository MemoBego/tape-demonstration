var test = require('tape');
var point = require('../es6/compiledPoint');

test('basic', function(t){
	t.plan(1);
	t.comment("Executing test 1");
	var result = point.point(1,2);
	t.equal(result, "(1,2)");
});
