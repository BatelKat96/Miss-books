import { BookPreview } from "./book-preview.jsx";

export function BooksList({ books }) {
    return <ul className="books-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onRemoveBook(book.id)}>Remove book!</button>
                    <button onClick={() => onSelectBook(book.id)}>Select book!</button>
                </div>
            </li>)
        }
    </ul>
}