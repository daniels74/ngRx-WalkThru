import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId) // Update the state with all vals that arnt "bookId"
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state; // If ID is in the state array

    return [...state, bookId];  // Update the state with the new ID
  })
);