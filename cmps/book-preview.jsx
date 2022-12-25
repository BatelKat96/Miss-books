
export function BookPreview({ book }) {

    return <article className="book-preview">
        <h2>book title: {book.title}</h2>
        <h3>Price: {book.price}</h3>
        {/* <p>Description: {book.description}</p> */}

    </article>
}