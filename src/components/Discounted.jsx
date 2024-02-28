import React from 'react'
import { books } from '../data'
import Bookk from './ui/Bookk'

const Discounted = () => {
  return (
    <section id='recent'>
        <div className="container">
            <div className='row'>
                <div className='section__title'>
                    <h2>
                    Discount <span className="purple">Books</span>
                    </h2>
                </div>
                <div className='books'>
                {books
              .slice()
              .filter(book => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <Bookk book={book} key={book.id} />
              ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discounted
