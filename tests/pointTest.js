var test = require('tape');
var point = require('../es6/compiledPoint');

test('basic', function(t){
	t.plan(1);
	t.comment("Executing test 1");
	var result = point.point(1,2);
	t.equal(result, "(1,2)", "Should be (1,2)");
});

test('Test add function', function(t){
	var result = point.add(3,7);
	t.equal(result, 10, 'Should be 10');
	t.end();
});

test('Test boolean function', function(t){
	var result = point.isTrue(false);
	t.equal(result, false, "Should be false");
	result = point.isTrue(true);
	t.equal(result, true, "Should be true");
	t.end();
});
