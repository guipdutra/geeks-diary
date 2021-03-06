import { ActionReducerMap } from '@ngrx/store';
import { noteCollectionReducer } from './note-collection';
import { noteEditorReducer } from './note-editor';
import { NoteState } from './note.state';


export const noteReducerMap: ActionReducerMap<NoteState> = {
    collection: noteCollectionReducer,
    editor: noteEditorReducer,
};
