import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const selectBooks = createFeatureSelector<ReadonlyArray<Book>>('books');

export const selectCollectionState = createFeatureSelector<
ReadonlyArray<string>
>('collection');

export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books, collection) => {
        // Get books from bookList based on IDs from collection
        return collection.map((id) => books.find((book) => book.id === id)!);
    }
);

