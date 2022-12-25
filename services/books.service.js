import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOKS_KEY = 'booksDB'
_createBooks()



export const booksService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOKS_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.minPrice) {
                books = books.filter(book => book.price >= filterBy.minPrice)
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOKS_KEY, bookId)
    // return axios.get(CAR_KEY, carId)
}

function remove(bookId) {
    return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOKS_KEY, book)
    } else {
        return storageService.post(BOOKS_KEY, book)
    }
}

function getEmptyBook(title = '', price = '') {
    return { id: '', description: '', title, price }
}

function getDefaultFilter() {
    return { txt: '', minPrice: '' }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('The Last Song', 300))
        books.push(_createBook('Percy Jackson', 120))
        books.push(_createBook('Me Before You', 50))
        books.push(_createBook('Harry Potter', 150))
        utilService.saveToStorage(BOOKS_KEY, books)
    }

    console.log('books:', books)

}

function _createBook(title, price) {
    const book = getEmptyBook(title, price)
    book.id = utilService.makeId()
    book.description = utilService.makeLorem()
    return book
}