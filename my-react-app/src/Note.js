import React from "react";

interface NoteProps {}
interface NoteState {}

export default class Note extends React.componet<NoteProps, NoteState> {
	render() {
		return <p> Componet! Component </p>;
	}
} 