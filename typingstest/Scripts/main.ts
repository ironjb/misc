declare namespace IMain {
	interface myType {
		foo: string;
		bar: number;
	}

	interface myModalScope extends ng.ui.bootstrap.IModalServiceInstance {
		blah: string;
	}
}

namespace MyMod {
	$('#demo').html('test2');
	var x: IMain.myType = { foo: 'foofoo', bar: 4 };
	window.console && console.log('demo set', x);

	var widgetX: IWidget.INameValue = { Name: 'test', Value: 'val test' };
	//var mdlScp: IMain.myModalScope = { blah: 'test' };

	var hlpr = new MyWidget.helpers();
	var lowerText = hlpr.lowerify('LOWer');

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