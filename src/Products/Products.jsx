import { AiFillStar } from "react-icons/ai";
import "./Products.css";
import { BsFillBagHeartFill } from "react-icons/bs";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
          />
          <div className="card-details">
            <h3 className="card-title">
              <section className="card-reviews">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <span className="total-reviews">4</span>
              </section>
              <section className="card-price">
                <div className="price">
                  <del>$300</del> 200
                </div>
                <div className="bag">
                  <BsFillBagHeartFill />
                </div>
              </section>
            </h3>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
