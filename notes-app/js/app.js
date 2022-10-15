import notesAPI from './notesAPI.js';
import notesView from './notesView.js';

export default class App {
  constructor(root) {
    this.notes = [];
    this.activeNote = null;
    this.view = new notesView(root, this.#handlers());
    this.#refreshNotes();
  }

  #handlers() {
    //* This method returns the object which was that other argument passed into the noteView class constructor function
    return {
      onNoteAdd: () => {
        const newNote = {
          title: 'New note',
          body: 'Take note...',
        };
        notesAPI.saveNote(newNote);
        this.#refreshNotes();
      },
      onNoteEdit: (title, body) => {
        notesAPI.saveNote({
          id: this.activeNote.id,
          title,
          body,
        });
        this.#refreshNotes();
      },
      onNoteSelect: (id) => {
        //* The id argument passed into this method is a string hence why i used the weak equal to operator
        const selectedNote = this.notes.find((n) => n.id == id);
        this.#setActiveNote(selectedNote);
      },
      onNoteDelete: (id) => {
        notesAPI.deleteNote(id);
        this.#refreshNotes();
      },
    };
  }

  #refreshNotes() {
    //* Retrieve the notes from the local storage via the method in the notesAPI module
    const notes = notesAPI.getAllNotes();
    //*pass the retrieved
    this.#setNotes(notes);
    if (notes.length > 0) this.#setActiveNote(notes[0]);
  }

  #setNotes(notes) {
    this.notes = notes;
    // console.log(this.notes);
    this.view.updateNoteList(notes);
    this.view.updatePreviewVisibility(notes.length > 0);
  }

  #setActiveNote(note) {
    this.activeNote = note;
    // console.log(this.activeNote);
    this.view.updateActiveNote(note);
  }
}

// import notesAPI from './notesAPI.js';
// import notesView from './notesView.js';

// notesAPI.saveNote({
//   title: 'New note has changed just now!',
//   body: 'I am a new note yes chelsea',
// });

// notesAPI.deleteNote(452006);

// // console.dir(notesAPI);
// console.log(notesAPI.getAllNotes());

// const app = document.querySelector('#app');
// const view = new notesView(app, {
//   onNoteAdd() {
//     console.log('note added');
//   },
//   onNoteEdit(newTitle, newBody) {
//     console.log(newTitle, newBody);
//   },
//   onNoteSelect(id) {
//     console.log('note selected ', id);
//   },
//   onNoteDelete(id) {
//     console.log('note deleted', id);
//   },
// });

// const notes = notesAPI.getAllNotes();
// view.updateNoteList(notes);
// view.updateActiveNote(notes[0]);
