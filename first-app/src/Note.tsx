import React from "react";

interface NoteProps {
	word: string;
}
interface NoteState {
	counter: number;
}

const repeatWord = (counter: number, word: string) => {
	const seq = [...Array(counter)].map((_, i) => i);
	return seq.map((i) => word + "!".repeat(i + 1)).join("! ");
}
export default class Note extends React.Component<NoteProps, NoteState> {
	state = {
		counter: 1,
	};

	onClickHandler = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	render () {
		return (
			<>
				<button onClick={this.onClickHandler} >Click me!!</button>
				<p>{repeatWord(this.state.counter, this.props.word)}</p>
			</>

			);
	}
}