import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../assets/css/styleku.css";

function All() {
  const [movie, setMovie] = useState();
  const [refetch, setRefetch] = useState(true);
  const navigate = useNavigate();

  const movieData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US&page=1"
      );
      setMovie(response.data.results);
      setRefetch(false);
    } catch (error) {
      console.log("datas =>".error);
    }
  };

  useEffect(() => {
    if (refetch) movieData();
  }, [refetch]);

  return (
    <>
      <div id="movie-all">
        <Container>
          <br />
          <div className="mt-5 margin-control">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-end btnMovie"></div>
              </div>
            </div>
            <div className="d-flex justify-content-end"></div>
          </div>
          <br />
          <Row>
            {movie &&
              movie.map((item, index) => {
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
      </div>
    </>
  );
}

export default All;
