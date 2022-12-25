const { useState, useEffect } = React


import { BooksList } from '../cmps/books-list.jsx';
import { BooksFilter } from '../cmps/books-filter.jsx';

import { booksService } from '../services/books.service.js'


export function BooksIndex() {

    const [filterBy, setFilterBy] = useState(booksService.getDefaultFilter())
    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function loadBooks() {
        booksService.query(filterBy).then(booksToUpdate => {
            setBooks(booksToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
    }

    function onRemoveBook(carId) {
        booksService.remove(carId).then(() => {
            const updatedCars = cars.filter(car => car.id !== carId)
            setCars(updatedCars)
            flashMsg('Car removed!')
        })
    }

    return <section className="books-index ">

        <h1>Hello from books app!</h1>
        <BooksFilter onSetFilter={onSetFilter} />
        <BooksList books={books} />



    </section>
}