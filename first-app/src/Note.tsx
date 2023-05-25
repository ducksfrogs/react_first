import React from "react";

interface NoteProps {
	counter: number;
	word: string;
}
interface NoteState {}

const repeatWord = (counter: number, word: string) => {
	const seq = [...Array(counter)].map((_, i) => i);
	return seq.map((i) => word + "!".repeat(i + 1)).join(" ");
}
export default class Note extends React.Component<NoteProps, NoteState> {
	render () {
		return <p>{repeatWord(this.props.counter, this.props.word)}</p>
	}
}