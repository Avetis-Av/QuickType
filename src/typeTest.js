import React, {useState, useEffect} from 'react'; 
import Word from './word'; 
import './typeTest.css' 

export default function TypeTest() {
	const test1 = "the quick brown fox jumped over a tree and tripped over that tree";
	const test1Arr = test1.split(' ');
	const tempStyles = []; 
	for (var i = 0; i < test1Arr.length; ++i){
		var letterStyles = []; 
		for (var j = 0; j < test1Arr[i].length; ++j){
			letterStyles.push(''); 
		}
		tempStyles.push(letterStyles); 
	}
	
	const [styles, setStyles] = useState(tempStyles); 
	
	const [currWord, setWord] = useState(0); 
	const [currChar, setChar] = useState(0); 
	const [prevPos, setPrev] = useState(0); 

	useEffect(() => {
		const alterStyle = (e) => {
			var temp = styles.slice(); 
			if (e.code === 'Space'){ setWord(old => old + 1); setPrev(currChar); setChar(-1);}
			else if (e.code === 'Backspace') {setWord(old => old - 1); setChar(prevPos - 1);}
			else if (e.code === "Key" + test1Arr[currWord][currChar].toUpperCase()) temp[currWord][currChar] = 'correct'; 
			else if (e.code !== "Key" + test1Arr[currWord][currChar].toUpperCase()) temp[currWord][currChar] = 'incorrect'; 
			setStyles(temp); 
			setChar(old => old + 1); 
		}
	
		window.addEventListener("keydown", alterStyle);
	
		return () => window.removeEventListener("keydown", alterStyle);
	  }, [currChar, currWord, styles, prevPos, test1Arr]);

	return (
		<div className='outer-word-container'>
			<div className="word-container"> 	
				{test1Arr.map((monoWord, idx) => <Word key={idx} inputWord = {monoWord} letterStyles={styles[idx]}/>)} 
			</div>
		</div>
	)
}
