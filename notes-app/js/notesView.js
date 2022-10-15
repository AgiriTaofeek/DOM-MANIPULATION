export default class notesView {
  constructor(
    root,
    { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}
  ) {
    this.root = root;
    this.onNoteSelect = onNoteSelect;
    this.onNoteAdd = onNoteAdd;
    this.onNoteEdit = onNoteEdit;
    this.onNoteDelete = onNoteDelete;
    //* Since the constructor function runs automatically, it displays this immediately the sits loads.
    this.root.innerHTML = `
    <aside class="notes__sidebar">
      <button type="button" class="btn btn--add-note">Add note</button>
      <ul class="notes__list"></ul>
    </aside>
    <article class="notes__preview">
      <input
        type="text"
        class="notes__title"
        aria-label="notes-title"
        placeholder="New note..."
      />
      <textarea class="notes__body">Take note...
      </textarea>
    </article>
      `;

    const btnAddNote = this.root.querySelector('.btn--add-note');
    const inputTitle = this.root.querySelector('.notes__title');
    const inputBody = this.root.querySelector('.notes__body');

    //* Add click event to the button
    btnAddNote.addEventListener('click', () => {
      this.onNoteAdd();
    });

    //* Add blur event to the input fields i.e title and body NB:- blur event is fired when an element has lost focus
    [inputTitle, inputBody].forEach((inputFields) =>
      inputFields.addEventListener('blur', () => {
        //* trim() gets rid of the white spaces in the string values for both title and body
        const updatedTitle = inputTitle.value.trim();
        const updatedBody = inputBody.value.trim();
        this.onNoteEdit(updatedTitle, updatedBody);
      })
    );

    //*Hide the note preview by default
    this.updatePreviewVisibility(false);

    // console.log(
    //   this.#createListItemHTML(300, 'hey', 'beautiful mate', new Date())
    // );
  }

  //* Private method to create list item innerHTML
  #createListItemHTML(id, title, body, updated) {
    const MAX_BODY_LENGTH = 60;

    return `
    <li class="notes__list-item" data-note-id='${id}'>
      <h2 class="notes__small-title">
        ${title}
      </h2>
      <p class="notes__small-body">
        ${body.substring(0, MAX_BODY_LENGTH)} ${
      body.length > MAX_BODY_LENGTH ? '...' : ''
    }
      </p>
      <time class="notes__small-updated">
        ${updated.toLocaleString(undefined, {
          dateStyle: 'full',
          timeStyle: 'short',
        })}
      </time>
    </li>

      `;
  }

  //* Update note list

  updateNoteList(notes) {
    const notesListContainer = this.root.querySelector('.notes__list');

    //* First make sure the list is empty
    notesListContainer.innerHTML = '';

    //* Display the children elements of the nodeListContainer
    for (const note of notes) {
      const html = this.#createListItemHTML(
        note.id,
        note.title,
        note.body,
        new Date(note.updated) //* note.updated is a time stamp i.e numeric format hence it needs to be passed in to the new Date() constructor again
      );

      notesListContainer.insertAdjacentHTML('beforeend', html);
    }

    //* Add select/delete events for each list item

    notesListContainer.querySelectorAll('.notes__list-item').forEach((n) => {
      n.addEventListener('click', () => {
        this.onNoteSelect(n.dataset.noteId);
      });

      n.addEventListener('dblclick', () => {
        const doDelete = confirm('Are you sure you want to delete?🤷‍♂️🤷‍♀️');

        if (doDelete) this.onNoteDelete(n.dataset.noteId);
      });
    });
  }

  //* Active list item indicator
  updateActiveNote(note) {
    this.root.querySelector('.notes__title').value = note.title;
    this.root.querySelector('.notes__body').value = note.body;

    this.root
      .querySelectorAll('.notes__list-item')
      .forEach((n) => n.classList.remove('notes__list-item--selected'));

    this.root
      .querySelector(`.notes__list-item[data-note-id='${note.id}']`)
      .classList.add('notes__list-item--selected');
  }

  updatePreviewVisibility(visible) {
    this.root.querySelector('.notes__preview').style.visibility = visible
      ? 'visible'
      : 'hidden';
  }
}
