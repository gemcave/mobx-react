import React, { useState } from 'react';
import { useNotesStore } from './NotesContext';

const AddNoteForm = () => {
	const [noteText, setNoteText] = useState("")
	const notesStore = useNotesStore()

	return (
		<>
			<input type="text" onChange={(e) => setNoteText(e.target.value)}/>
			<button onClick={() => notesStore.addNote(noteText)}>Add note</button>	
		</>
	);
};

export default AddNoteForm;