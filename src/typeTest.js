import React, {useState, useEffect} from 'react'; 
import Word from './word'; 
import './typeTest.css' 

function isCharacterKeyPress(evt) {
    if (typeof evt.which == "undefined") {
        // This is IE, which only fires keypress events for printable keys
        return true;
    } else if (typeof evt.which == "number" && evt.which > 0) {
        // In other browsers except old versions of WebKit, evt.which is
        // only greater than zero if the keypress is a printable key.
        // We need to filter out backspace and ctrl/alt/meta key combinations
        return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which !== 8;
    }
    return false;
}


export default function TypeTest({setStlLst}) {
	const test1 = "the quick brown fox jumped over a tree and tripped over that tree";
	const [test1Arr, setTest] = useState(test1.split(' ')); 
	const tempStyles = []; 
	for (var i = 0; i < test1Arr.length; ++i){
		var letterStyles = []; 
		for (var j = 0; j < test1Arr[i].length; ++j){
			if (!i && !j) letterStyles.push('current'); 
			letterStyles.push(''); 
		}
		tempStyles.push(letterStyles); 
	}
	const [styles, setStyles] = useState(tempStyles); 
	
	const [currWord, setWord] = useState(0); 
	const [currChar, setChar] = useState(0); 
	const [prevPos, setPrev] = useState(0); 

	useEffect(() => {
		
		setStlLst(styles);
		const alterStyle = (e) => {
			if (e.key !== 'Backspace' && (!isCharacterKeyPress(e) || e.key === 'Shift')) return; 
			var advance = 1; 
			var temp = styles.slice(); 
			if (e.code === 'Space'){
				setWord(old => old + 1);
				setPrev(currChar);
				advance = -currChar;
			}
			else if (e.code === 'Backspace') {
				if (!currWord && !currChar) return; 
				if (!currChar) {
					temp[currWord][currChar] = ''; 
					setWord(old => old - 1);
					advance = -currChar + prevPos; 
				}
				else{
					advance = -1; 
					if (temp[currWord][currChar-1] === 'extra'){
						var testTemp = test1Arr.slice(); 
						testTemp[currWord] = testTemp[currWord].substring(0, testTemp[currWord].length-1); 
						setTest(testTemp);
						temp[currWord].pop();
					}
					else temp[currWord][currChar-1] = ''; 
					setStyles(temp); 
				}
				console.log(temp[currWord][currChar])
			}
			else if (currChar >= test1Arr[currWord].length){
				var testTemp = test1Arr.slice(); 
				testTemp[currWord] += e.key; 
				setTest(testTemp); 
				temp[currWord][currChar] = 'extra'; 
			}
			else if (e.key === test1Arr[currWord][currChar]) temp[currWord][currChar] = 'correct'; 
			else if (e.key !== test1Arr[currWord][currChar]) temp[currWord][currChar] = 'incorrect'; 
			setStyles(temp); 
			setChar(old => old + advance); 
			console.log(e.key); 
		}
	
		window.addEventListener("keydown", alterStyle);
	
		return () => window.removeEventListener("keydown", alterStyle);
	  }, [currChar, currWord, styles, prevPos, test1Arr, setStlLst]);

	return (
		<div className='outer-word-container'>
			<div className="word-container"> 	
				{test1Arr.map((monoWord, idx) => <Word key={idx} inputWord = {monoWord} letterStyles={styles[idx]}/>)} 
			</div>
		</div>
	)
}
