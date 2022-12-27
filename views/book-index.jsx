const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BookList } from '../cmps/book-list.jsx';
import { BookFilter } from '../cmps/book-filter.jsx';
import { AddBook } from '../cmps/add-book.jsx';

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';
import { bookService } from '../services/book.service.js'



export function BookIndex() {

    const [isLoading, setIsLoading] = useState(false)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())
    const [books, setBooks] = useState([])



    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        bookService.query(filterBy).
            then(booksToUpdate => setBooks(booksToUpdate))
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updatedBooks = books.filter(book => book.id !== bookId)
            setBooks(updatedBooks)
            showSuccessMsg('Car removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove car, try again please!')
            })
    }


    console.log('books:', books)

    return <section className="book-index full main-layout">

        <div className="full main-layout">
            <BookFilter onSetFilter={onSetFilter} />
            <AddBook />
            <Link className="btn-add-book" to="/book/edit">Add Book!</Link>

            {!isLoading && <BookList books={books} onRemoveBook={onRemoveBook} />}
            {isLoading && <div>Loading..</div>}
            {!books.length && <div>No items to show..</div>}
        </div>

    </section>
}