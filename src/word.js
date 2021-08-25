import React from 'react'
import './word.css'

export default function Word(props) {
	const letters = props.inputWord.split('');
	return (
		<div className="word">
			{letters.map(char => <letter>{char}</letter>)}
		</div>
	)
}
