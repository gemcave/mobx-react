import React from 'react';
import AddNoteForm from './AddNoteForm';
import { useNotesStore } from './NotesContext';
import { useObserver } from 'mobx-react';

import './App.css';

function App() {
	const notesStore = useNotesStore()

  return useObserver(() => (
		<>
			<ul>
				{notesStore.notes.map(note => (
						<li key={note.id} onClick={() => notesStore.removeNote(note.id)}>
									{note.text}
						</li>))}
			</ul>
			<AddNoteForm />
		</>
  ));
}

export default App;
