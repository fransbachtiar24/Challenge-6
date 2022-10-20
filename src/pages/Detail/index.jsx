import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../../assets/css/styleku.css";

function Index() {
  const [movie, setMovie] = useState();
  const params = useParams();
  console.log(params);

  useEffect(() => {
    if (params.id) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US`
        )
        .then((response) => {
          setMovie(response.data);
          console.log(response.data);
        });
    }
  }, [params.id, movie]);

  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            className="d-block w-100 imgC"
            alt=""
          />
          <div class="carousel-caption d-none d-md-block">
            <div className="row">
              <Col md={4} className="movieWrapper " id="trending">
                <Card className="movieImage glo">
                  <Image
                    src={`${process.env.REACT_APP_IMG_URL}/${movie?.poster_path}`}
                    alt="Dune Movies"
                    className="images"
                  />
                  {/* <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">
                        {movie?.status}
                      </Card.Title>
                      {movie.genres.map((item, k) => {
                        return (
                          <Card.Text className="text-bg-danger" key={item.id}>
                            {k > 0 && ""}
                            {item.name}
                          </Card.Text>
                        );
                      })}
                    </div>
                  </div> */}
                </Card>
              </Col>
              <div className="col-lg-3">
                <div className="mb-3 text-center bg-detail">
                  <h1>{movie?.original_title}</h1>
                  <p></p>
                  <p>{movie?.overview}</p>
                  <p>release date : {movie?.release_date}</p>
                  <p>
                    <i className="fa fa-star text-warning"></i>{" "}
                    {movie?.vote_average}/{movie?.vote_count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
