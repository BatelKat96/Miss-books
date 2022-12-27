


export function ReviewPreview({ review, onRemoveReview }) {
    return <div className="reviews-section">
        <div className="review">
            <h1>Reviews</h1>
            <p>Full name: <span>{review.fullName}</span></p>
            <p>Rating: <span>{'⭐'.repeat(review.rating)}</span></p>
            <p>Read at: <span>{review.readAt}</span></p>
            <button className="btn-remove-review" onClick={() => onRemoveReview(review.id)}>Remove review</button>
        </div>
    </div>

}