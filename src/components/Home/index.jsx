import React from "react";
import "../../assets/css/styleku.css";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import ImgMorbius from "../../assets/img/morbius.jpg";
import ImgJoker from "../../assets/img/joker.jpg";
import ImgEvery from "../../assets/img/everything.jpg";

function Index() {
  // state
  // const [movie, setMovie] = useState();
  // const [refetch, setRefetch] = useState(true);

  // const movieData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=dfda61e62b2db392ce66bedf62adc71c&language=en-US&page=1"
  //     );
  //     console.log(response.data);
  //     setRefetch(false);
  //   } catch (error) {
  //     console("datas => ", error);
  //   }
  // };

  // useEffect(() => {
  //   if (refetch) movieData();
  // }, [refetch]);
  return (
    <>
      <div className="owl-carousel owl-theme">
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
      </div>
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
                <button>
                  See All Movie <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end"></div>
          <br />
          <Row>
            <Col md={3} className="movieList">
              <Card className="text-white movieImages">
                <Image src={ImgMorbius} className="ImgTrending" />
                <div className="bg">
                  <div className="p-2 m-1 text-white cardTrending">
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <button className="btnTrending">Detail</button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="movieList">
              <Card className="text-white movieImages">
                <Image src={ImgEvery} className="ImgTrending" />
                <div className="bg">
                  <div className="p-2 m-1 text-white cardTrending">
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <button className="btnTrending">Detail</button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="movieList">
              <Card className="text-white movieImages">
                <Image src={ImgJoker} className="ImgTrending" />
                <div className="bg">
                  <div className="p-2 m-1 text-white cardTrending">
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <button className="btnTrending">Detail</button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={3} className="movieList">
              <Card className="text-white movieImages">
                <Image src={ImgMorbius} className="ImgTrending" />
                <div className="bg">
                  <div className="p-2 m-1 text-white cardTrending">
                    <Card.Title className="text-center">Card Title</Card.Title>
                    <button className="btnTrending">Detail</button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Index;
