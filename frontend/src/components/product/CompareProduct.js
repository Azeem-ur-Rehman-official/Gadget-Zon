import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getProductDetails } from '../../actions/productActions';
import { NEW_REVIEW_RESET } from '../../constants/productConstants';
import { getData } from '../../routes/FetchData';
import Loader from '../layout/Loader';
import MetaData from '../layout/MetaData';
const CompareProduct = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');

  console.log('products', productId);
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { error: reviewError, success } = useSelector(
    (state) => state.newReview
  );
  useEffect(() => {
    getData(`/api/v1/compare/products`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success('Reivew posted successfully');
      dispatch({ type: NEW_REVIEW_RESET });
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [dispatch, alert, error, reviewError, match.params.id, success]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product.name} />
          <div className="compare">
            <select
              className="form-control "
              id="category_field"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            >
              <option value="default" className="text-danger firstOption">
                Compare With
              </option>
              {products.map((value, id) => (
                <>
                  {product.category === value.category ? (
                    <option key={id} value={value._id}>
                      {value.name}
                    </option>
                  ) : null}
                </>
              ))}
            </select>
          </div>
          <div className="row d-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              <Carousel pause="hover">
                {product.images &&
                  product.images.map((image) => (
                    <Carousel.Item key={image.public_id}>
                      <img
                        className="d-block w-20 my-4"
                        src={image.url}
                        alt={product.title}
                        className="compareImg"
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
              <div className="col-12 ">
                <h3>{product.name}</h3>
                <p id="product_id">Product # {product._id}</p>

                <hr />

                <div className="rating-outer">
                  <div
                    className="rating-inner"
                    style={{ width: `${(product.ratings / 5) * 100}%` }}
                  ></div>
                </div>
                <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

                <hr />

                <p id="product_price">${product.price}</p>

                <hr />

                <p>
                  Status:{' '}
                  <span
                    id="stock_status"
                    className={product.stock > 0 ? 'greenColor' : 'redColor'}
                  >
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </p>

                <hr />

                <p>
                  Quantity:{' '}
                  <span
                    id="quantity_status"
                    className={product.stock > 0 ? 'greenColor' : 'redColor'}
                  >
                    {product.stock}
                  </span>
                </p>

                <hr />

                <h4 className="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr />
                <p id="product_seller mb-3">
                  Sold by: <strong>{product.seller}</strong>
                </p>
              </div>
            </div>
            {/* second product */}

            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              {products.map((value, id) => (
                <>
                  {productId === value._id ? (
                    <>
                      <Carousel pause="hover">
                        {value.images &&
                          value.images.map((image) => (
                            <Carousel.Item key={image.public_id}>
                              <img
                                className="d-block w-20 my-4"
                                className="compareImg"
                                src={image.url}
                                alt={value.title}
                              />
                            </Carousel.Item>
                          ))}
                      </Carousel>
                      <div className="col-12 ">
                        <h3>{value.name}</h3>
                        <p id="product_id">Product # {value._id}</p>

                        <hr />

                        <div className="rating-outer">
                          <div
                            className="rating-inner"
                            style={{ width: `${(value.ratings / 5) * 100}%` }}
                          ></div>
                        </div>
                        <span id="no_of_reviews">
                          ({value.numOfReviews} Reviews)
                        </span>

                        <hr />

                        <p id="product_price">${value.price}</p>

                        <hr />

                        <p>
                          Status:{' '}
                          <span
                            id="stock_status"
                            className={
                              value.stock > 0 ? 'greenColor' : 'redColor'
                            }
                          >
                            {value.stock > 0 ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </p>

                        <hr />

                        <p>
                          Quantity:{' '}
                          <span
                            id="quantity_status"
                            className={
                              value.stock > 0 ? 'greenColor' : 'redColor'
                            }
                          >
                            {value.stock}
                          </span>
                        </p>

                        <hr />

                        <h4 className="mt-2">Description:</h4>
                        <p>{value.description}</p>
                        <hr />
                        <p id="product_seller mb-3">
                          Sold by: <strong>{value.seller}</strong>
                        </p>
                      </div>
                    </>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default CompareProduct;
