import React from 'react'
import './word.css'

export default function Word(props) {
	const letters = props.inputWord.split('');
	const styles = props.letterStyles; 
	// console.log(styles); 
	return (
		<div className="word">
			{letters.map((char, idx)=> <letter key={idx} className={styles[idx]}>{char}</letter>)}
		</div>
	)
}
