const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook }) {
    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>

                    <button onClick={() => onRemoveBook(book.id)}>Remove book!</button>
                    <Link className="btn-select-book" to={`/book/${book.id}`}>Select book!</Link>                </div>
            </li>)
        }
    </ul >
}