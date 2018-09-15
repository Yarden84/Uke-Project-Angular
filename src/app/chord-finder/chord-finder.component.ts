import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chord-finder',
  templateUrl: './chord-finder.component.html',
  styleUrls: ['./chord-finder.component.css']
})


export class ChordFinderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showChordSelect2(){
		if ((<HTMLInputElement>document.getElementById('chordSelect1')).value != "-"){
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
  
  resetChord2(){
		document.getElementById('chordSelect2')[0].selected = 'selected';
		document.getElementById('greenDot1').style.display = 'none';
		document.getElementById('greenDot2').style.display = 'none';
		document.getElementById('greenDot3').style.display = 'none';
		document.getElementById('greenDot4').style.display = 'none';			
	}



	changeStartHere(){
		if(document.getElementById('chordSelect1')[0].innerHTML != "-"){
			document.getElementById('chordSelect1')[0].innerHTML = "-";
		}
	}


/*---------------------------------------------------------------------------------------------------------------------*/

//chordSelect1 + chordSelect2 method:


	resetPosition(){
		document.getElementById('position')[0].selected = 'selected';
	}


/*---------------------------------------------------------------------------------------------------------------------*/

//chordSelect2 method:


	resetDots(){
		if ((<HTMLInputElement>document.getElementById('chordSelect2')).value == "-"){
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
	displayImg(){
				
		let notes = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

		//Letters denotes the notes on each string. number denotes the the height in pixels a green dot should be in order to be placed on its string.
		//* '0' means an 'open string', in this case the green dot doesn't show.
		//** The height slightly changes along strings1+string4 because they have a small angel.   
		let string1 = [['A', 0], ['Bb', 170], ['B', 170], ['C', 170], ['C#', 170], ['D', 172], ['D#', 172], ['E', 174], ['F', 174], ['F#', 175], ['G', 175], ['G#', 176]];
		let string2 = [['E', 0], ['F', 167], ['F#', 167], ['G', 167], ['G#', 167],['A', 167], ['Bb', 167], ['B', 167], ['C', 167], ['C#', 167], ['D', 167], ['D#', 167]];
		let string3 = [['C', 0], ['C#', 165], ['D', 165], ['D#', 165], ['E', 165], ['F', 165], ['F#', 165], ['G', 165], ['G#', 165], ['A', 165], ['Bb', 165], ['B', 165]];
		let string4 = [['G', 0], ['G#', 161], ['A', 161], ['Bb', 161], ['B', 161], ['C', 159], ['C#', 159], ['D', 157], ['D#', 157], ['E', 156], ['F', 156], ['F#', 155]];

		let chord1 = (<HTMLInputElement>document.getElementById('chordSelect1')).value;
		let chord2 = (<HTMLInputElement>document.getElementById('chordSelect2')).value;


		let dot1 =  document.getElementById('greenDot1');
		let dot2 =  document.getElementById('greenDot2');
		let dot3 =  document.getElementById('greenDot3');
		let dot4 =  document.getElementById('greenDot4');

		//When a chord is chosen the method findChord return an array with the notes of the chord
		//The method placeDot use the findChord array to place the dots
		if (chord1 != "-" && chord2 != "-"){
			let chordparts = this.findChord(notes, chord1, chord2);

			let p = Number((<HTMLInputElement>document.getElementById('position')).value);

			this.placeDot (string1, chordparts, dot1, p);
			this.placeDot (string2, chordparts, dot2, p);
			this.placeDot (string3, chordparts, dot3, p);
			this.placeDot (string4, chordparts, dot4, p);
		}

	}


	//methods used by displayImg:

	// 1.
	
			findChord(n, c1, c2){
						
        let i=0; 
        let j=0;
				let chordParts = ['first', 'third', 'fifth', 'seventh'];
				
				/*finding the notes of the chord:*/
				while (n[i] !== c1){
					i++;
				}
				chordParts[0] = n[i];
				j=i;

				if (c2 === 'Major' || c2 === '7' || c2 === 'maj7'){
					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[1] = n[i];

					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[2] = n[i];


				}else{
					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[1] = n[i];

					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[2] = n[i];

				}

				if (c2 === '7' || c2 === 'm7'){
					if (j+10 > 11){
						j = (j+10)%11 - 1;
					}else{
						j=j+10;
					}
					chordParts[3] = n[j];
				}

				if (c2 == 'maj7'){
					if (j+11 > 11){
						j = (j+11)%11 - 1;
					}else{
						j=j+11;
					}
					chordParts[3] = n[j];
				}

				return chordParts;
				
			}


	// 2.

			placeDot (s, cp, d, p){

				let j=0;
				//The intervals variable contains the horizontal position (in px) of each note along the string 
				let intervals = [0, 360, 418, 470, 518, 566, 610, 652, 690, 730, 764, 798];

				for (let i=0; i<p; i++){
					while (s[j][0] != cp[0] && s[j][0] != cp[1]&& s[j][0] != cp[2] && s[j][0] != cp[3]){
							j++;
					}
						if (j != 0){

							d.style.display = 'block'; 
							d.style.left = intervals[j] + 'px';
							d.style.bottom = s[j][1] + 'px';
							d.style.opacity = 1.0;

						}else {
							d.style.display = 'block';
							d.style.opacity = 0.0;
						}
					j++;
				}

			}



/*---------------------------------------------------------------------------------------------------------------------*/		


//playBtn method:


		playChord(){

      let string1 = [['A', 0], ['Bb', 360], ['B', 418], ['C2', 470], ['C#2', 518], ['D2', 566], ['D#2', 610], ['E2', 652], ['F2', 690], ['F#2', 730], ['G2', 764], ['G#2', 798]];
      let string2 = [['E', 0], ['F', 360], ['F#', 418], ['G', 470], ['G#', 518],['A', 566], ['Bb', 610], ['B', 652], ['C2', 690], ['C#2', 730], ['D2', 764], ['D#2', 798]];
      let string3 = [['C', 0], ['C#', 360], ['D', 418], ['D#', 470], ['E', 518], ['F', 566], ['F#', 610], ['G', 652], ['G#', 690], ['A', 730], ['Bb', 764], ['B', 798]];
      let string4 = [['G', 0], ['G#', 360], ['A', 418], ['Bb', 470], ['B', 518], ['C2', 566], ['C#2', 610], ['D2', 652], ['D#2', 690], ['E2', 730], ['F2', 764], ['F#2', 798]];
			let stringArr = [string1, string2, string3, string4];

      let dot1Position = document.getElementById('greenDot1').style.left;
      let dot2Position =  document.getElementById('greenDot2').style.left;
      let dot3Position =  document.getElementById('greenDot3').style.left;
      let dot4Position =  document.getElementById('greenDot4').style.left;

      let dotArr = [Number(dot1Position.slice(0, 3)), Number(dot2Position.slice(0, 3)), Number(dot3Position.slice(0, 3)), Number(dot4Position.slice(0, 3))];

      for (let i=0; i<4; i++){
          if (Number(document.getElementById('greenDot'+(i+1)).style.opacity) == 0.0) {
              dotArr[i] = 0;
          }
			}


            let stringAudio = [];

            for (let i=0; i<3; i++){
				
				let j=0;
				
				//Finding the note position on dotArr in order to get the note name.
				//For example, if string3 = 360 then we use stringArr to get the note name, in this case it is the note 'C#'
				while (stringArr[i][j][1] != dotArr[i] && j<stringArr[i].length){
					j++;
				}

				//stringAudio get the id of the relevant audio in Chord-Finder.html
				//For the example above stringAudio will get the id 'ukeC#'
				stringAudio[i] = document.getElementById('uke'+stringArr[i][j][0]);

            }

			return stringAudio[0].play(), stringAudio[1].play(), stringAudio[2].play(), stringAudio[3].play();
		
		}


}
