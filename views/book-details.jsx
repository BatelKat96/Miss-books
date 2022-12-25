

export function BookDetails({ book, onGoBack }) {

    console.log('book:', book)
    function bookPage() {
        if (book.pageCount > 500) return '- Serious Reading'
        else if (book.pageCount > 200) return '- Descent Reading'
        else if (book.pageCount < 100) return '- Light Reading'
        else return ''
    }
    function bookYear() {
        var year = new Date().getFullYear()
        // var year = time.getFullYear()
        if (year - book.publishedDate > 10) return '- Vintage'
        else if (year - book.publishedDate < 1) return '- New'
        else return ''
    }




    return <section className="car-details">
        <h1>Title : {book.title}</h1>
        <h2>Auther : {book.authors}</h2>
        <img src={book.thumbnail} />
        {book.listPrice.isOnSale && <h3 className="on-sale">On Sale!</h3>}
        <h3 className={`${(book.listPrice.amount) > 150 && "red"} || ${(book.listPrice.amount) < 20 && "green"}`} >Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>
        <h4>Description:</h4>
        <p>{book.description}</p>
        <p> Page Count: {book.pageCount} page {bookPage()}</p>
        <p>Published Date: {book.publishedDate} {bookYear()}</p>
        <button onClick={onGoBack}>Go Back</button>
    </section>
}