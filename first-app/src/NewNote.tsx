import {useEffect, useState} from 'react';

interface NoteProps {
	word: string;
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


export default function Note(props: NoteProps) {
	const [counter, setCounter] = useState<number>(1);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		simulateLoading().then(() => {
			setIsLoaded(true);
		});
	}, []);

	const onClickHandler = () => {
		setCounter(counter + 1);
	};

	return isLoaded ? (
		<>
			<button onClick={onClickHandler}>Click me!!</button>
			<p>{repeatWord(counter, props.word)}</p>
		</>
		) : (
		<p>Loading.....</p>
		);
}