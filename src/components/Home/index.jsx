import React, { useEffect, useState } from "react";
import "../../assets/css/styleku.css";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import axios from "axios";
import _ from "lodash";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router-dom";

const pageSize = 4;

function Index() {
  // state
  const [movie, setMovie] = useState();
  const [refetch, setRefetch] = useState(true);
  const [paginatedPosts, setPaginatedPots] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const movieData = async () => {
    try {
      const response = await axios.get(
        "https:api.themoviedb.org/3/movie/popular?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US&page=1"
      );
      console.log(response.data);
      setMovie(response.data.results);
      setRefetch(false);
      setPaginatedPots(
        _(response.data.results).slice(0).take(pageSize).value()
      );
    } catch (error) {
      console.log("datas => ", error);
    }
  };

  const items = movie?.map((item) => (
    <div
      key={item.id}
      className="caraousel"
      style={{
        backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path})`,
      }}
    >
      <div className="control-caraousel">
        <h3>{item.title || item.name}</h3>
        <p>{item.overview}</p>
        <p></p>
        <div className="watching-btn">
          <button onClick={""}>
            {" "}
            <i className="fa fa-play"></i> Watch Trailer
          </button>
        </div>
      </div>
    </div>
  ));

  useEffect(() => {
    if (refetch) movieData();
  }, [refetch]);

  const pageCount = movie ? Math.ceil(movie.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(movie).slice(startIndex).take(pageSize).value();
    setPaginatedPots(paginatedPosts);
  };
  return (
    <>
      <AliceCarousel
        infinite
        autoPlay
        disableButtonsControls
        mouseTracking
        autoPlayInterval={2000}
        items={items}
      />
      {/* <div className="owl-carousel owl-theme">
        <div className="slide slide-1">
          <div className="slide-content">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              illum nisi dignissimos expedita ratione distinctio voluptate ad
              mollitia molestias architecto.
            </p>
            <button>
              <i className="fa fa-play"></i> Watch Trailer
            </button>
          </div>
        </div>
        <div className="slide slide-2">
          <div className="slide-content">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              illum nisi dignissimos expedita ratione distinctio voluptate ad
              mollitia molestias architecto.
            </p>
            <button>
              <i className="fa fa-play"></i> Watch Trailer
            </button>
          </div>
        </div>
        <div className="slide slide-3">
          <div className="slide-content">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              illum nisi dignissimos expedita ratione distinctio voluptate ad
              mollitia molestias architecto.
            </p>
            <button>
              <i className="fa fa-play"></i> Watch Trailer
            </button>
          </div>
        </div>
      </div> */}
      <div id="populer">
        <Container>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <div className="text-white text-Popular">
                <h1>Popular Movie</h1>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex justify-content-end btnMovie">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/movielist");
                  }}
                >
                  See All Movie <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end"></div>
          <br />
          <Row>
            {paginatedPosts &&
              paginatedPosts.map((item, index) => {
                return (
                  <>
                    <Col md={3} className="movieList" key={index}>
                      <Card className="text-white movieImages">
                        <Image
                          src={`${process.env.REACT_APP_IMG_URL}/${item.poster_path}`}
                          className="ImgTrending"
                        />
                        <div className="bg">
                          <div className="p-2 m-1 text-white cardTrending">
                            <Card.Title className="text-center">
                              {item.original_title}
                            </Card.Title>
                            <button
                              className="btnTrending"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/detail/${item.id}`);
                                console.log(item.id);
                              }}
                            >
                              Detail
                            </button>
                          </div>
                        </div>
                      </Card>
                    </Col>
                  </>
                );
              })}
          </Row>
        </Container>
        <br />
        <nav className="d-flex justify-content-center">
          <ul className="pagination">
            {pages.map((page) => (
              <li
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
              >
                <p className="page-link" onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Index;
