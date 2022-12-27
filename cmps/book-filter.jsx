const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"


export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="book-filter full main-layout">
        <h2>Filter our books</h2>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="title">Title:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By title"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />

            <label htmlFor="minPrice">Min price:</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                placeholder="By min price"
                value={filterByToEdit.minPrice}
                onChange={handleChange}
            />

            <label htmlFor="authors">Authors:</label>
            <input type="text"
                id="authors"
                name="authors"
                placeholder="By authors"
                value={filterByToEdit.authors}
                onChange={handleChange}
            />

            <label htmlFor="language">Choose a language:</label>
            <select name="language" id="language"
                onChange={handleChange}>
                <option value="en">English</option>
                <option value="sp">Spanish</option>
                <option value="he">Hebrew</option>
            </select>

            <label htmlFor="currency">Choose a currency code:</label>
            <select name="currency" id="currency"
                onChange={handleChange}>
                <option value="EUR">EUR</option>
                <option value="ILS">ILS</option>
                <option value="USD">USD</option>
            </select>


            <button className="btn-filter-book" >Filter books!</button>
        </form>

    </section>
}