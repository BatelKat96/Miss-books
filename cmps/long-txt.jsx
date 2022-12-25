
const { useState } = React;

export function LongTxt({ book, length }) {
    const [isShowAll, setIsShowAll] = useState(false);
    var shortTxt = book.substring(0, 100)

    return <section >
        {isShowAll &&
            <div>
                <p>{book}
                    <button className="btn-show" onClick={() => { setIsShowAll(false) }}> Show less</button>
                </p>
            </div>
        }
        {!isShowAll &&
            <div>
                <p>{shortTxt}

                    {length > 100 && <button className="btn-show" onClick={() => { setIsShowAll(true) }}> Show more</button>}
                </p>
            </div>
        }

    </section>
}


