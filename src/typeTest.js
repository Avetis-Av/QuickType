import React from 'react'; 
import Word from './word'; 
import './typeTest.css'

export default function TypeTest() {
	const test1 = "the quick brown fox jumped over a tree and tripped over that tree the quick brown fox jumped over a tree and tripped over that tree the quick brown fox jumped over a tree and tripped over that tree the quick brown fox jumped over a tree and tripped over that tree"; 
	const test1Arr = test1.split(' '); 
	return (
		<div className='outer-word-container'>
			<div className="word-container"> 	
				{test1Arr.map(monoWord => <Word inputWord={monoWord}/> )}
				<Word inputWord="Scoll"/>
			</div>
		</div>
	)
}
