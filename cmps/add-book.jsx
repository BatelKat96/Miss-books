const { useState, useEffect, useRef } = React

import { googleBookService } from "../services/google-book.service.js"
// import { googleBookOptionService } from "../services/bookService.addGoogleBook"
import { bookService } from "../services/book.service.js"
import { GoogleBookPreview } from './google-book-preview.jsx'

export function AddBook() {
    const [books, setBooks] = useState(null)
    const [search, setSearch] = useState('')
    const debounceBookFromGoogle = useRef(googleBookService.debounce(bookFromGoogle, 3000))


    function bookFromGoogle(txt) {
        googleBookService.query(txt).then((books) => {
            setBooks(books)
        })
    }



    function handleChange(ev) {
        // console.log('target:', target.value)
        const { value } = ev.target
        console.log('value:', value)

        setSearch(value)
        debounceBookFromGoogle.current(value)
    }

    function onSearchBook(ev) {
        ev.preventDefault()

    }

    function onAddNewBook(bookId) {
        // console.log('bookId:', bookId)
        const bookToAdd = books.find(book => book.id === bookId)
        // console.log('bookToAdd:', bookToAdd)

        bookService.addNewBook(bookToAdd)
    }


    return <section className="add-book-from-google">
        <h2>Search book</h2>
        <form onSubmit={onSearchBook} className="review-form">
            <label htmlFor="book-name">Enter book name:</label>
            <input type="text"
                id="book-name"
                name="bookName"
                placeholder="Enter book name..."
                value={search}
                onChange={handleChange} />

            <button className="btn-search-book-from-google">Search book</button>


            {/* if (!books) return <h1>Loading...</h1> */}
            {books && <GoogleBookPreview books={books} onAddNewBook={onAddNewBook} />}

        </form>
    </section>

}