import { BsFillBagHeartFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

const Card = () => {
  return (
    <section className="card">
      <img
        src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        alt="Shoe"
        className="card-img"
      />
      <div className="card-details">
        <h3 className="card-title">
          <section className="card-reviews">
            <AiFillStar className="ratings-stars" />
            <AiFillStar className="ratings-stars" />
            <AiFillStar className="ratings-stars" />
            <AiFillStar className="ratings-stars" />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </h3>
      </div>
    </section>
  );
};

export default Card;
