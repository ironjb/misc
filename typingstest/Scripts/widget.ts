declare namespace IWidget {
	interface INameValue {
		Name: string;
		Value: string;
	}
}

namespace MyWidget {
	export class helpers {

		constructor() {
			// code...
		}

		lowerify(val: string): string {
			return val.toLowerCase();
		}
	}
}