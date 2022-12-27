const { useState, useEffect } = React
const { useParams } = ReactRouterDOM

import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js';

export function ShowReview({ reviews }) {
    const { bookId } = useParams()
    const [allReviews, setReviews] = useState([])

    useEffect(() => {
        setReviews(reviews)
    }, [])

    function onRemoveReview(reviewId) {
        // console.log(':', reviewId)
        bookService.removeReview(bookId, reviewId).then(() => {

            const updatedReview = reviews.filter(review => review.id !== reviewId)
            setReviews(updatedReview)
            showSuccessMsg('Review removed')
        })
            .catch((err) => {
                console.log('Had issues removing', err)
                showErrorMsg('Could not remove car, try again please!')
            })

    }

    if (!reviews) return <section className="reviews-section">
        <h1>Reviews</h1>
        <p>No Reviews yet</p>
    </section>
    return <section className="reviews-section">
        <h1>Reviews</h1>
        {reviews.map((review) => <div className="review" key={review.id}>
            <p>name: {review.fullName}</p>
            <p>Rate: {review.rate}</p>
            <p>Date of read: {review.dateRead}</p>
            <button className="btn-remove-review" onClick={() => onRemoveReview(review.id)}>Remove Review</button>
        </div>)}
    </section>
}