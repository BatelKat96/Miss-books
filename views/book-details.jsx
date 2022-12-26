import { LongTxt } from "../cmps/long-txt.jsx";


export function BookDetails({ book, onGoBack }) {

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

    }


    return <section className="book-details">
        <h1>{book.title}</h1>
        <h2>{book.authors}</h2>
        <img src={book.thumbnail} />
        <h3 className={checkBookPrice()} >Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>
        <h4>Description:</h4>
        <LongTxt txt={book.description} length={100} />
        <p> Page Count: {book.pageCount} page {bookPage()}</p>
        <p>Published Date: {book.publishedDate} {bookYear()}</p>
        <p>Language: {bookLanguage()}</p>
        <button onClick={onGoBack}>Go Back</button>
    </section>
}