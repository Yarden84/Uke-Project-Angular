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
		let string1 = [['A', 0], ['Bb', 123], ['B', 123], ['C', 123], ['C#', 123], ['D', 125], ['D#', 125], ['E', 127], ['F', 127], ['F#', 128], ['G', 128], ['G#', 129]];
		let string2 = [['E', 0], ['F', 93], ['F#', 93], ['G', 93], ['G#', 93], ['A', 93], ['Bb', 93], ['B', 93], ['C', 93], ['C#', 93], ['D', 93], ['D#', 93]];
		let string3 = [['C', 0], ['C#', 63], ['D', 63], ['D#', 63], ['E', 63], ['F', 63], ['F#', 63], ['G', 63], ['G#', 63], ['A', 63], ['Bb', 63], ['B', 63]];
		let string4 = [['G', 0], ['G#', 31], ['A', 31], ['Bb', 31], ['B', 31], ['C', 29], ['C#', 29], ['D', 27], ['D#', 27], ['E', 26], ['F', 26], ['F#', 25]];

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
		//The intervals variable contains the horizontal position (in px) of each note along the string 
		let intervals = [0, 331, 387, 439, 489, 536, 580, 621, 661, 698, 734, 768];

		for (let i = 0; i < p; i++) {
			while (s[j][0] != cp[0] && s[j][0] != cp[1] && s[j][0] != cp[2] && s[j][0] != cp[3]) {
				j++;
			}
			if (j != 0) {

				d.style.display = 'block';
				d.style.left = intervals[j] + 'px';
				d.style.bottom = s[j][1] + 'px';
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

		let string1 = [['A', 0], ['Bb', 331], ['B', 387], ['C2', 439], ['C#2', 489], ['D2', 536], ['D#2', 580], ['E2', 621], ['F2', 661], ['F#2', 698], ['G2', 734], ['G#2', 768]];
		let string2 = [['E', 0], ['F', 331], ['F#', 387], ['G', 439], ['G#', 489], ['A', 536], ['Bb', 580], ['B', 621], ['C2', 661], ['C#2', 698], ['D2', 734], ['D#2', 768]];
		let string3 = [['C', 0], ['C#', 331], ['D', 387], ['D#', 439], ['E', 489], ['F', 536], ['F#', 580], ['G', 621], ['G#', 661], ['A', 698], ['Bb', 734], ['B', 768]];
		let string4 = [['G', 0], ['G#', 331], ['A', 387], ['Bb', 439], ['B', 489], ['C2', 536], ['C#2', 580], ['D2', 621], ['D#2', 661], ['E2', 698], ['F2', 734], ['F#2', 768]];
		let stringArr = [string1, string2, string3, string4];

		let dot1Position = document.getElementById('greenDot1').style.left;
		let dot2Position = document.getElementById('greenDot2').style.left;
		let dot3Position = document.getElementById('greenDot3').style.left;
		let dot4Position = document.getElementById('greenDot4').style.left;

		let dotArr = [Number(dot1Position.slice(0, 3)), Number(dot2Position.slice(0, 3)), Number(dot3Position.slice(0, 3)), Number(dot4Position.slice(0, 3))];

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
