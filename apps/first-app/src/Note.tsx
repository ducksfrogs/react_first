import React from "react";

interface NoteProps {
	word: string;
}
interface NoteState {
	counter: number;
	isLoaded: boolean;
}


const repeatWord = (counter: number, word: string) => {
	const seq = [...Array(counter)].map((_, i) => i);
	return seq.map((i) => word + "!".repeat(i + 1)).join("! ");
}

const simulateLoading = () => {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});
};
 
export default class Note extends React.Component<NoteProps, NoteState> {
	state = {
		counter: 1,
		isLoaded: false,
	};

	componentDidMount = () => {
		simulateLoading().then(() => {
			this.setState({
				isLoaded: true,
			});
		});
	};

	onClickHandler = () => {
		this.setState({
			counter: this.state.counter + 1,
		});
	};

	render () {
		return this.state.isLoaded ? (
			<>
				<button onClick={this.onClickHandler} >Click me!!</button>
				<p>{repeatWord(this.state.counter, this.props.word)}</p>
			</>

			) : (
			<p>Loading</p>
			);
	}
}