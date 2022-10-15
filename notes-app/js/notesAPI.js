//* static methods are not saved in the prototype of the class but it acts like a method attached to a class hence it can't be inherited when instantiated
export default class notesAPI {
  static getAllNotes() {
    //* Retrieve notes data from browser local storage in the application tab and convert from string to an array of objects or retrieve an empty array if there are no data in the local storage
    const notes = JSON.parse(localStorage.getItem('notes-data') || '[]');

    return notes.sort((a, b) => {
      //* The new Date() returns a date object although in string format but because we are subtracting,  it is automatically converted to a timeline which is of the number datatype and it is in descending order since we want the most recent to be displayed first
      return new Date(a.updated) < new Date(b.updated) ? 1 : -1;
    });
  }

  //* Save and update note
  static saveNote(note) {
    //* get all the notes from the method above
    const notes = this.getAllNotes();

    //* Check if a notes data id exist in the database
    const exist = notes.find((n) => n.id === note.id);

    //* logic to update if a data with id exist
    if (exist) {
      (exist.title = note.title),
        (exist.body = note.body),
        (exist.updated = new Date().toISOString());
    } else {
      //* Generate random id for each data object
      note.id = Math.floor(Math.random() * 1000000);

      //* Generate time stamp for when the data was saved
      note.updated = new Date().toISOString();

      //* Add the new note data to the existing note data
      notes.push(note);
    }
    //* Update the local storage with the new data
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }

  static deleteNote(id) {
    //* Get all the notes from the database using the method above
    const notes = this.getAllNotes();

    //* filter out note data in the database whose id is not equal to the passed id to this method scope NB- filter method returns a new array
    const newNotes = notes.filter((n) => n.id != id);

    localStorage.setItem('notes-data', JSON.stringify(newNotes));
  }
}
