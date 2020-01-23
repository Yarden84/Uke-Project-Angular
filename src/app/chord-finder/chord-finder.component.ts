import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-chord-finder',
	templateUrl: './chord-finder.component.html',
	styleUrls: ['./chord-finder.component.css']
})


export class ChordFinderComponent implements OnInit {

	constructor(private titleService: Title) { }

	ngOnInit() {
		this.setTitle('Jewkulele - מנוע חיפוש אקורדים');
	}

	setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	showChordSelect2() {
		if ((<HTMLInputElement>document.getElementById('chordSelect1')).value != "-") {
			document.getElementById('Major').style.display = 'inline';
			document.getElementById('Minor').style.display = 'inline';
			document.getElementById('Seven').style.display = 'inline';
			document.getElementById('m7').style.display = 'inline';
			document.getElementById('maj7').style.display = 'inline';
		}
		else {
			document.getElementById('Major').style.display = 'none';
			document.getElementById('Minor').style.display = 'none';
			document.getElementById('Seven').style.display = 'none';
			document.getElementById('m7').style.display = 'none';
			document.getElementById('maj7').style.display = 'none';
		}
	}

	resetChord2() {
		document.getElementById('chordSelect2')[0].selected = 'selected';
		document.getElementById('greenDot1').style.display = 'none';
		document.getElementById('greenDot2').style.display = 'none';
		document.getElementById('greenDot3').style.display = 'none';
		document.getElementById('greenDot4').style.display = 'none';
	}



	changeStartHere() {
		if (document.getElementById('chordSelect1')[0].innerHTML != "-") {
			document.getElementById('chordSelect1')[0].innerHTML = "-";
		}
	}


	/*---------------------------------------------------------------------------------------------------------------------*/

	//chordSelect1 + chordSelect2 method:


	resetPosition() {
		document.getElementById('position')[0].selected = 'selected';
	}


	/*---------------------------------------------------------------------------------------------------------------------*/

	//chordSelect2 method:


	resetDots() {
		if ((<HTMLInputElement>document.getElementById('chordSelect2')).value == "-") {
			document.getElementById('greenDot1').style.display = 'none';
			document.getElementById('greenDot2').style.display = 'none';
			document.getElementById('greenDot3').style.display = 'none';
			document.getElementById('greenDot4').style.display = 'none';
		}
	}


	/*---------------------------------------------------------------------------------------------------------------------*/

	//chordSelect2 + chordSelect3 method:

	//This method displays 0-4 green dots (which denotes where to place the players' fingers) on the ukulele neck. 
	//The dots are placed according to the chosen chord on the form
	displayImg() {

		let notes = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

		//Letters denotes the notes on each string. number denotes the the height in pixels a green dot should be in order to be placed on its string.
		//* '0' means an 'open string', in this case the green dot doesn't show.
		//** The height slightly changes along strings1+string4 because they have a small angel.   
		let string1 = [['A', 0], ['Bb', 67.6], ['B', 67.6], ['C', 67.6], ['C#', 69], ['D', 69], ['D#', 69], ['E', 71], ['F', 71], ['F#', 71], ['G', 71], ['G#', 71]];
		let string2 = [['E', 0], ['F', 49.6], ['F#', 49.6], ['G', 49.6], ['G#', 49.6], ['A', 49.6], ['Bb', 49.6], ['B', 49.6], ['C', 49.6], ['C#', 49.6], ['D', 49.6], ['D#', 49.6]];
		let string3 = [['C', 0], ['C#', 33.6], ['D', 33.6], ['D#', 33.6], ['E', 33.6], ['F', 33.6], ['F#', 33.6], ['G', 33.6], ['G#', 33.6], ['A', 33.6], ['Bb', 33.6], ['B', 33.6]];
		let string4 = [['G', 0], ['G#', 17], ['A', 17], ['Bb', 17], ['B', 14.7], ['C', 14.7], ['C#', 14.7], ['D', 13.5], ['D#', 13.5], ['E', 13.5], ['F', 12.5], ['F#', 12.5]];

		let chord1 = (<HTMLInputElement>document.getElementById('chordSelect1')).value;
		let chord2 = (<HTMLInputElement>document.getElementById('chordSelect2')).value;


		let dot1 = document.getElementById('greenDot1');
		let dot2 = document.getElementById('greenDot2');
		let dot3 = document.getElementById('greenDot3');
		let dot4 = document.getElementById('greenDot4');

		//When a chord is chosen the method findChord return an array with the notes of the chord
		//The method placeDot use the findChord array to place the dots
		if (chord1 != "-" && chord2 != "-") {
			let chordparts = this.findChord(notes, chord1, chord2);

			let p = Number((<HTMLInputElement>document.getElementById('position')).value);

			this.placeDot(string1, chordparts, dot1, p);
			this.placeDot(string2, chordparts, dot2, p);
			this.placeDot(string3, chordparts, dot3, p);
			this.placeDot(string4, chordparts, dot4, p);
		}

	}


	//methods used by displayImg:

	// 1.

	findChord(n, c1, c2) {

		let i = 0;
		let j = 0;
		let chordParts = ['first', 'third', 'fifth', 'seventh'];

		/*finding the notes of the chord:*/
		while (n[i] !== c1) {
			i++;
		}
		chordParts[0] = n[i];
		j = i;

		if (c2 === 'Major' || c2 === '7' || c2 === 'maj7') {
			if (i + 4 > 11) {
				i = (i + 4) % 11 - 1;
			} else {
				i = i + 4;
			}
			chordParts[1] = n[i];

			if (i + 3 > 11) {
				i = (i + 3) % 11 - 1;
			} else {
				i = i + 3;
			}
			chordParts[2] = n[i];


		} else {
			if (i + 3 > 11) {
				i = (i + 3) % 11 - 1;
			} else {
				i = i + 3;
			}
			chordParts[1] = n[i];

			if (i + 4 > 11) {
				i = (i + 4) % 11 - 1;
			} else {
				i = i + 4;
			}
			chordParts[2] = n[i];

		}

		if (c2 === '7' || c2 === 'm7') {
			if (j + 10 > 11) {
				j = (j + 10) % 11 - 1;
			} else {
				j = j + 10;
			}
			chordParts[3] = n[j];
		}

		if (c2 == 'maj7') {
			if (j + 11 > 11) {
				j = (j + 11) % 11 - 1;
			} else {
				j = j + 11;
			}
			chordParts[3] = n[j];
		}

		return chordParts;

	}


	// 2.

	placeDot(s, cp, d, p) {

		let j = 0;
		//The intervals variable contains the horizontal position (in percentage) of each note along the string 
		let intervals = [0, 33, 38.5, 43.6, 48.5, 53.15, 57.6, 61.65, 65.6, 69.3, 72.85, 76.2];

		for (let i = 0; i < p; i++) {
			while (s[j][0] != cp[0] && s[j][0] != cp[1] && s[j][0] != cp[2] && s[j][0] != cp[3]) {
				j++;
			}
			if (j != 0) {

				d.style.display = 'block';
				d.style.left = intervals[j] + '%';
				d.style.bottom = s[j][1] + '%';
				d.style.opacity = 1.0;

			} else {
				d.style.display = 'block';
				d.style.opacity = 0.0;
			}
			j++;
		}

	}



	/*---------------------------------------------------------------------------------------------------------------------*/


	//playBtn method:


	playChord() {

		let string1 = [['A', 0], ['Bb', 33], ['B', 38.5], ['C2', 43.6], ['C#2', 48.5], ['D2', 53.15], ['D#2', 57.6], ['E2', 61.65], ['F2', 65.6], ['F#2', 69.3], ['G2', 72.85], ['G#2', 76.2]];
		let string2 = [['E', 0], ['F', 33], ['F#', 38.5], ['G', 43.6], ['G#', 48.5], ['A', 53.15], ['Bb', 57.6], ['B', 61.65], ['C2', 65.6], ['C#2', 69.3], ['D2', 72.85], ['D#2', 76.2]];
		let string3 = [['C', 0], ['C#', 33], ['D', 38.5], ['D#', 43.6], ['E', 48.5], ['F', 53.15], ['F#', 57.6], ['G', 61.65], ['G#', 65.6], ['A', 69.3], ['Bb', 72.85], ['B', 76.2]];
		let string4 = [['G', 0], ['G#', 33], ['A', 38.5], ['Bb', 43.6], ['B', 48.5], ['C2', 53.15], ['C#2', 57.6], ['D2', 61.65], ['D#2', 65.6], ['E2', 69.3], ['F2', 72.85], ['F#2', 76.2]];
		let stringArr = [string1, string2, string3, string4];

		let dot1Position = document.getElementById('greenDot1').style.left;
		let dot2Position = document.getElementById('greenDot2').style.left;
		let dot3Position = document.getElementById('greenDot3').style.left;
		let dot4Position = document.getElementById('greenDot4').style.left;

		let dotArr = [Number(dot1Position.slice(0, (dot1Position.length - 1))), Number(dot2Position.slice(0, (dot2Position.length - 1))), Number(dot3Position.slice(0, (dot3Position.length - 1))), Number(dot4Position.slice(0, (dot4Position.length - 1)))];


		for (let i = 0; i < 4; i++) {
			if (Number(document.getElementById('greenDot' + (i + 1)).style.opacity) == 0.0) {
				dotArr[i] = 0;
			}
		}


		let stringAudio = [];

		for (let i = 0; i < 3; i++) {

			let j = 0;

			//Finding the note position on dotArr in order to get the note name.
			//For example, if string3 = 360 then we use stringArr to get the note name, in this case it is the note 'C#'
			while (stringArr[i][j][1] != dotArr[i] && j < stringArr[i].length) {
				j++;
			}

			//stringAudio get the id of the relevant audio in Chord-Finder.html
			//For the example above stringAudio will get the id 'ukeC#'
			stringAudio[i] = document.getElementById('uke' + stringArr[i][j][0]);

		}



		return stringAudio[0].play(), stringAudio[1].play(), stringAudio[2].play(), stringAudio[3].play();

	}


}
