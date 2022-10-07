import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../../assets/css/styleku.css";

function Search() {
  const [movie, setMovie] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const searching = searchParams.get(`p`);
  const navigate = useNavigate();
  console.log(movie);

  const movieData = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=dfda61e62b2db392ce66bedf62adc71c&query=${searching}`
      );
      setMovie(response.data.results);
    } catch (error) {
      console.log("datas =>".error);
    }
  };

  useEffect(() => {
    movieData();
  }, [searching]);

  return (
    <div id="search-id">
      <br />
      <br />
      <Container className="mt-5">
        <br />
        <br />
        <div className="text-white text-center mt-2">
          <h1>Search results "{searching}"</h1>
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
                          <Card.Title className="text-center control-title-search">
                            {item.original_title}
                          </Card.Title>
                          <Card.Text className="text-center">
                            {item.overview}
                            <p>
                              <i className="fa fa-star text-warning"></i>{" "}
                              {item.vote_average}/{item.vote_count}
                            </p>
                            <p className="bg-danger">
                              realease : {item.release_date}
                            </p>
                          </Card.Text>
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
  );
}

export default Search;
