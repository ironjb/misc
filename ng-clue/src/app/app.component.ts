import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface IClueGroup {
	groupName: string;
	groupItems: string[];
}

type clueVersionType = '' | 'hp' | 'hm' | 'fx';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styles: []
})
export class AppComponent implements OnInit {
	clueGroups: IClueGroup[];
	clueVersion: clueVersionType = '';

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.clueGroups = this.resetClueGroups();
	}

	changeGameVersion(ver: clueVersionType) {
		this.clueVersion = ver;

		this.clueGroups = this.resetClueGroups(ver);
	}

	resetClueGroups(gameType?: clueVersionType): IClueGroup[] {
		if (gameType === 'hp') {
			return [
				{
					groupName: 'Suspect',
					groupItems: [
						'Draco Malfoy',
						'Crabbe & Goyle',
						'Lucius Malfoy',
						'Dolores Umbridge',
						'Peter Pettigrew',
						'Bellatrix Lestrange'
					]
				}, {
					groupName: 'Item',
					groupItems: [
						'Sleeping Draught',
						'Vanishing Cabinet',
						'Portkey',
						'Impedimenta',
						'Petrificus Totalus',
						'Mandrake'
					]
				}, {
					groupName: 'Location',
					groupItems: [
						'Great Hall',
						'Hospital Wing',
						'Room of Requirement',
						'Potions Classroom',
						'Trophy Room',
						'Divination Classroom',
						'Owlery',
						'Library',
						'Defence Against Dark Arts'
					]
				}
			]
		}

		return [
			{
				groupName: 'Suspects',
				groupItems: [
					'Colonel Mustard',
					'Professor Plum',
					'Mr. Green',
					'Mrs. Peacock',
					'Mrs. Scarlet',
					'Mrs. White'
				]
			}, {
				groupName: 'Weapons',
				groupItems: [
					'Knife',
					'Candlestick',
					'Revolver',
					'Rope',
					'Lead Pipe',
					'Wrench'
				]
			}, {
				groupName: 'Rooms',
				groupItems: [
					'Hall',
					'Lounge',
					'Dining Room',
					'Kitchen',
					'Ballroom',
					'Conservatory',
					'Billiard Room',
					'Library',
					'Study'
				]
			}
		];
	}
}
