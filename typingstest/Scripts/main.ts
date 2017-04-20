// import * as $ from "jquery";

declare namespace ITypeTest {
	interface myType {
		foo: string;
		bar: number;
	}
}

namespace MyMod {
	$('#demo').html('test2');
	var x: ITypeTest.myType = { foo: 'foofoo', bar: 4 };
	window.console && console.log('demo set', x);

	export class helper {
		message: string;
		constructor() {
			this.message = 'init message';
		}

		changeMessage() {
			this.message = 'new message';
		}
	}

	var inMod = new helper();
	window.console && console.log('msg', inMod.message);
	inMod.changeMessage();
	window.console && console.log('msg chng', inMod.message);
}

// var nMod = new MyMod.helper();
// window.console && console.log(nMod.message);