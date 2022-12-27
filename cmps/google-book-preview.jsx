
export function GoogleBookPreview({ books, onAddNewBook }) {
    console.log('books:', books)

    return <ul>
        {books.map(book => <li key={book.id}>{book.volumeInfo.title} <button onClick={() => { onAddNewBook(book.id) }}> + </button></li>)}
    </ul>
}