import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/productActions';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
import Product from '../product/Product';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const UpcomingProducts = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [range, setRange] = useState(1, 1000);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const [status, setstatus] = useState('upcoming');

  const categories = ['Mobiles', 'Laptops', 'Smartwaches'];

  const alert = useAlert();
  const dispatch = useDispatch();

  const {
    loading,
    products,
    error,
    productsCount,
    resPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    // console.log(price);

    dispatch(
      getProducts(keyword, currentPage, price, category, rating, status)
    );
  }, [
    dispatch,
    alert,
    error,
    keyword,
    currentPage,
    range,
    category,
    rating,
    status,
  ]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = filteredProductsCount;
  if (keyword) {
    count = filteredProductsCount;
  }
  function filterHandler() {
    setRange(price);
  }
  return (
    <div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={'UpcomingProducts.'} />

            <section id="products" className="container my-5">
              <h1 id="products_heading" className="text-center mb-4">
                Upcoming Products
              </h1>

              <div className="row">
                {keyword ? (
                  <Fragment>
                    <div className="col-6 col-md-3 px-3">
                      <div>
                        <div className="pr-5">
                          <Range
                            marks={{
                              1: `$1`,
                              1000: `$1000`,
                            }}
                            min={1}
                            max={1000}
                            defaultValue={[1, 1000]}
                            tipFormatter={(value) => `$${value}`}
                            tipProps={{
                              placement: 'top',
                              visible: true,
                            }}
                            value={price}
                            onChange={(price) => setPrice(price)}
                          />
                        </div>
                        <button
                          className="Filter order-button px-5 mt-5"
                          onClick={filterHandler}
                        >
                          Filter
                        </button>

                        <hr className="my-5" />

                        <div className="my-5">
                          <h4 className="mb-3">Brand</h4>

                          <ul className="pl-0">
                            {categories &&
                              categories.map((category) => (
                                <li
                                  style={{
                                    cursor: 'pointer',
                                    listStyleType: 'none',
                                  }}
                                  key={category}
                                  onClick={() => setCategory(category)}
                                >
                                  {category}
                                </li>
                              ))}
                          </ul>
                        </div>

                        <hr className="my-3" />
                        <div className="mt-5">
                          <h4 className="mb-3">Ratings</h4>

                          <ul className="pl-0">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <li
                                style={{
                                  cursor: 'pointer',
                                  listStyleType: 'none',
                                }}
                                key={star}
                                onClick={() => setRating(star)}
                              >
                                <div className="rating-outer">
                                  <div
                                    className="rating-inner"
                                    style={{
                                      width: `${star * 20}%`,
                                    }}
                                  ></div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 col-md-9">
                      <div className="row">
                        {products.map((product) => (
                          <Product
                            key={product._id}
                            product={product}
                            col={4}
                          />
                        ))}
                      </div>
                    </div>
                  </Fragment>
                ) : (
                  products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))
                )}
              </div>
            </section>

            {resPerPage <= count && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
    </div>
  );
};

export default UpcomingProducts;
