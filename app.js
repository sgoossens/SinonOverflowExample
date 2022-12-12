const sinon = require('sinon');
const { Chance } = require('chance');

const chance = new Chance();

class TestSinon{
	foo
	constructor() {
		for (let i = 0; i < 10000; i++) {
			this.foo += chance.paragraph()
		}

	}

	baz(input) {
		return input;
	}
}


function main() {
	const testSinon = new TestSinon();
	const spy = sinon.stub(testSinon, 'baz').callThrough();
	testSinon.baz(testSinon.foo)
	testSinon.baz(testSinon.foo)
	testSinon.baz(testSinon.foo)
	testSinon.baz('test1')
	sinon.assert.calledWith(spy, 'baz', 'test2');
}

if (require.main === module) {
	main();
  }