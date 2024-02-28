import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Bookk = ({ book }) => {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating}/>
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice}/>
    </div>
  );
};

export default Bookk;

{/* <div className="book__ratings">
        
{
new Array(Math.floor(book.rating)).fill(0).map((_, index) => <FontAwesomeIcon icon="star" key={index} />)
}
{
  !Number.isInteger(book.rating) && <FontAwesomeIcon icon="star-half-alt" />
  // if it not an integer print the half star
}
</div> */}