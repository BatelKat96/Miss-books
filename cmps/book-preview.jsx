import { LongTxt } from "../cmps/long-txt.jsx";


export function BookPreview({ book }) {

    return <article className="book-preview">
        {book.listPrice.isOnSale && <h3 className="on-sale">On Sale!</h3>}
        <h2>{book.title}</h2>
        <h3>{book.authors}</h3>
        <h3>Price: {book.listPrice.amount} {book.listPrice.currencyCode}</h3>

        <img src={book.thumbnail} />
        <LongTxt book={book.description} length={book.description.length} />
    </article>
}