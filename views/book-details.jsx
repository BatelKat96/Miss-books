const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { AddReview } from '../cmps/add-review.jsx'
import { LongTxt } from "../cmps/long-txt.jsx"
import { ShowReview } from '../cmps/show-review.jsx'

import { bookService } from '../services/book.service.js'

export function BookDetails() {
    const [book, setBook] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
    }, [book])

    function loadBook() {
        bookService.get(params.bookId)
            .then((book) => setBook(book))
            .catch((err) => {
                console.log('Had issues in book details', err)
                navigate('/book')
            })
    }

    function onGoBack() {
        navigate('/book')
    }


    function bookPage() {
        if (book.pageCount > 500) return '- Serious Reading'
        else if (book.pageCount > 200) return '- Descent Reading'
        else if (book.pageCount < 100) return '- Light Reading'
        else return ''
    }
    function bookYear() {
        var year = new Date().getFullYear()
        if (year - book.publishedDate > 10) return '- Vintage'
        else if (year - book.publishedDate < 1) return '- New'
        else return ''
    }
    function bookLanguage() {
        if (book.language === 'en') return 'English'
        if (book.language === 'sp') return 'Spanish'
        if (book.language === 'he') return 'Hebrew'
    }
    function checkBookPrice() {
        if (book.listPrice.amount > 150) return 'red'
        else if (book.listPrice.amount < 20) return 'green'
        else return ''
    }




    if (!book) return <div>Loading...</div>
    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.authors}</h2>
        <img src={book.thumbnail} alt={book.title} />
        <h3 className={`price ${checkBookPrice()}`} >Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <h4>Description:</h4>
        <LongTxt txt={book.description} length={100} />

        <p> <span className="p-title">Page Count: </span>{book.pageCount} page {bookPage()}</p>
        <p><span className="p-title">Published Date: </span>{book.publishedDate} {bookYear()}</p>
        <p><span className="p-title">Language: </span>{bookLanguage()}</p>

        <Link className="btn-edit-book" to={`/book/edit/${book.id}`}>Edit book </Link>
        <AddReview />

        {/* <div>{book.reviews.map(review => <ShowReview key={review.id} review={review} />)}</div> */}
        <ShowReview reviews={book.reviews} />
        <button className="btn-go-back" onClick={onGoBack}>Go Back</button>
    </section>
}