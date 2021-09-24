import { Component } from "react";

import { Link } from 'react-router-dom'

class MyGallery extends Component {
  state = {
    movies: [],
  };

  componentDidMount = () => {
    this.fetchMovie();
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.search !== prevProps.search) {
      this.fetchMovie();
    }
  };

  fetchMovie = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?apikey=178624d7&s=" + this.props.search
      );
      console.log(response);

      if (response.ok) {
        let movies = await response.json();

        this.setState({
          movies: movies.Search,
        });
        console.log(movies);
      } else {
        this.setState({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <h4 style={{ color: "black" }}>{this.state.movies.Title} </h4>

        <div className="container-fluid margins mt-4">
          <div className="row">
            {this.state.movies.slice(0, 6).map((movie) => {
              return (
                <div
                  className="col-2 mb-3 mx-0 px-1"
                  key={movie.imdbID}                 
                >
                 <Link to={"/ShowDetail/" + movie.imdbID}>
                  <img
                    className="w-100 img-fluid mb-2 mb-lg-0 rounded"
                    src={movie.Poster}
                    alt=""
                    onClick={() => {this.props.showComments(movie.imdbID)}}
                    style={{height:"320px"}}
                  />
                </Link>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default MyGallery;
