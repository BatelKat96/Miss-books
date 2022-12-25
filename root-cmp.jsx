const { useState } = React

import { About } from "./views/about.jsx";
import { BooksIndex } from "./views/book-index.jsx";
import { Home } from "./views/home.jsx";

export function App() {
    const [page, setPage] = useState('books')
    console.log('page is', page);

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <h1>Miss Book </h1>
            <nav className="app-nav">
                <a href="#" onClick={() => setPage('home')}>Home</a> |
                <a href="#" onClick={() => setPage('about')}>About</a> |
                <a href="#" onClick={() => setPage('books')}>Books</a>
            </nav>
        </header>

        <main>
            {page === 'home' && <Home />}
            {page === 'about' && <About />}
            {page === 'books' && <BooksIndex />}
        </main>
    </section>
}