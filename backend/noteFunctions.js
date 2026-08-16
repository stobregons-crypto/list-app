import { MyModal } from "./modalFunctions.js";

const NoteContent = document.getElementById('Data-input');
const SubmitButton = document.getElementById('button-addon2');
const containerNotes = document.getElementById('list-group');
const myModalContainer = document.getElementById('DeleteElementModal');
let noteToDelete = null;

const focusInput = () => {
    if (!NoteContent) return;
    NoteContent.focus();
    NoteContent.select();
};

function createNoteElement(text) {
    const newNote = document.createElement('li');
    newNote.className = 'list-group-item d-flex justify-content-between align-items-center';

    const noteWrapper = document.createElement('div');
    noteWrapper.className = 'd-flex align-items-center';

    const checkWrapper = document.createElement('div');
    checkWrapper.className = 'form-check mx-2';

    const noteCheckbox = document.createElement('input');
    noteCheckbox.type = 'checkbox';
    noteCheckbox.className = 'form-check-input note-checkbox';

    const noteText = document.createElement('span');
    noteText.textContent = text;
    noteText.className = 'ms-1';

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger delete-btn';
    deleteButton.setAttribute('data-bs-toggle', 'modal');
    deleteButton.setAttribute('data-bs-target', '#DeleteElementModal');

    checkWrapper.appendChild(noteCheckbox);
    noteWrapper.append(checkWrapper, noteText);
    newNote.append(noteWrapper, deleteButton);

    return newNote;
}

function insertNoteAtEnd(text) {
    if (!containerNotes) return;

    const newNote = createNoteElement(text);
    const addNoteRow = containerNotes.querySelector('.add-note-row');

    if (addNoteRow) {
        containerNotes.insertBefore(newNote, addNoteRow);
    } else {
        containerNotes.appendChild(newNote);
    }
}

export function CreateNewElement() {
    if (!SubmitButton || !NoteContent || !containerNotes) return;

    const addNewNote = () => {
        const text = NoteContent.value.trim();
        if (!text) {
            focusInput();
            return;
        }

        insertNoteAtEnd(text);
        NoteContent.value = '';
        focusInput();
    };

    SubmitButton.addEventListener('click', addNewNote);
    NoteContent.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addNewNote();
        }
    });

    const addNoteTrigger = document.querySelector('.add-note-trigger');
    if (addNoteTrigger) {
        addNoteTrigger.addEventListener('click', focusInput);
    }
}

export function DeleteElement() {
    if (!containerNotes || !myModalContainer) return;

    containerNotes.addEventListener('click', (event) => {
        const deleteButton = event.target.closest('.delete-btn');
        if (!deleteButton) return;

        noteToDelete = deleteButton.closest('li');
        MyModal();
    });

    const confirmDeleteButton = myModalContainer.querySelector('.btn-confirm');
    if (!confirmDeleteButton) return;

    confirmDeleteButton.addEventListener('click', () => {
        if (!noteToDelete) return;

        noteToDelete.remove();
        noteToDelete = null;

        const modalInstance = window.bootstrap?.Modal?.getInstance(myModalContainer);
        modalInstance?.hide();
    });
}

export function checkElement() {
    if (!containerNotes) return;

    containerNotes.addEventListener('change', (event) => {
        const clickedCheckbox = event.target.closest('.note-checkbox');
        if (!clickedCheckbox) return;

        const liContainer = clickedCheckbox.closest('li');
        if (!liContainer) return;

        const textElement = liContainer.querySelector('.ms-1');
        if (!textElement) return;

        const isChecked = clickedCheckbox.checked;

        textElement.style.textDecoration = isChecked ? 'line-through' : 'none';
        textElement.style.opacity = isChecked ? '0.5' : '1';
        textElement.style.transition = 'all 0.2s ease';

        const noteContentWrapper = liContainer.querySelector('.d-flex.align-items-center');
        if (noteContentWrapper) {
            noteContentWrapper.style.opacity = isChecked ? '0.5' : '1';
        }
    });
}

window.NoteContentModified = NoteContent ? NoteContent.value.trim() : '';
window.button = SubmitButton;
window.containerNotesList = containerNotes;