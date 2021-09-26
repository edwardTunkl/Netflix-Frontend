import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Card,
} from "react-bootstrap";
import NetflixLogo from "../assets/homepage-netflix_logo.png";
import Avatar from "../assets/homepage-avatar.png";
import { Link, withRouter } from 'react-router-dom'


class MyNavbar extends React.Component {
  state = {
    searchQuery: "",
    movies: [],
  };

  // componentDidMount=async()=>{
  //     try {
  //         let response=await fetch('http://www.omdbapi.com/?apikey=178624d7&s=harry%20potter');

  //         console.log(response)

  //         if(response.ok){
  //             let movies=await response.json()
  //             this.setState({
  //                 movies:movies.Search,

  //             })
  //             console.log(this.state.movies)
  //         }else{

  //             this.setState({

  //             })
  //         }

  //     } catch (error) {
  //         console.log(error)

  //     }
  // }

  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" className="fixed-top">
        <Link to="/">
          <Navbar.Brand>
            <img src={NetflixLogo} style={{ width: 140 }} />{" "}
          </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto text-white">
              <Nav.Link className="text-white">Home</Nav.Link>
              <Nav.Link className="text-white">TV Shows</Nav.Link>
              <Nav.Link className="text-white">Movies</Nav.Link>
              <Nav.Link className="text-white">Recently Added</Nav.Link>
              <Link to="/MyList">
              <div className="text-white">My List</div>
              </Link>
            </Nav>
            <Nav className="ml-auto text-white">
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="select a title"
                  className="mr-sm-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      this.props.onChange(e.target.value);
                    }
                  }}
                />
              </Form>
              <Nav.Link className="text-white my-auto ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-search mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Nav.Link>
              <Nav.Link className="text-white my-auto ml-2">KIDS</Nav.Link>
              <Nav.Link className="text-white my-auto ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  class="bi bi-bell-fill mt-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                </svg>
              </Nav.Link>
              <NavDropdown
                className=" ml-2"
                title={<img src={Avatar} style={{ width: 38 }}></img>}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {this.state.movies
          .filter((movie) =>
            movie.Title.toLowerCase().includes(
              this.state.searchQuery.toLowerCase()
            )
          )
          .map((movie) => (
            <Card
              className={"d-flex d-block mx-3 w-100 h-100 bg-danger mt-3 mb-3"}
            >
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body className="text-dark d-flex flex-column flex-end">
                <Card.Title>{movie.Title}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </>
    );
  }
}

export default withRouter(MyNavbar);
