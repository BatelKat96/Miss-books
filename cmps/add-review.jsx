const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { utilService } from '../services/util.service.js'



export function AddReview() {
    const { bookId } = useParams()

    function onAddReview(ev) {
        ev.preventDefault()
        const fullName = ev.target.fullname.value
        const rate = ev.target.rate.value
        const dateRead = ev.target.dateRead.value

        const review = {
            fullName,
            rate,
            dateRead,
            id: utilService.makeId()
        }
        bookService.addReview(bookId, review)
    }

    return <section className="add-review">
        <h2>Add review...</h2>
        <form onSubmit={onAddReview} className="review-form">
            <div>
                <label htmlFor="fullname">Full name: </label>
                <input type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Enter your name..."

                />
            </div>
            <div>
                <label htmlFor="rate">Rate: </label>
                <input type="number"
                    name="rate"
                    id="rate"
                    min="1" max="5"
                    placeholder="Enter book rate (1-5)"
                />
            </div>

            <div>
                <label htmlFor="dateRead">Read at: </label>
                <input type="date"
                    name="dateRead"
                    id="dateRead"
                />
            </div>
            <button className="btn-add-review">Add review!</button>
        </form>


    </section>

}
