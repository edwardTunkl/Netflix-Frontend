import { Component } from "react";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import AddComment from "./AddComment";


class ShowDetail extends Component {
 
  state = {
    comments: [],
    movie: [],
    rightMovie:{}
  }
 
  componentDidMount(){
    this.fetchComments()
    this.fetchMovie()
   
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.fetchComments()
     
    }
    if(prevProps.match.params.id !== this.props.match.params.id){
     
      this.fetchMovie()
    }
    
  }

  fetchComments = async () => {


      try {
          let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.props.match.params.id, {
          headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MzA1MDMzNTAsImV4cCI6MTYzMTcxMjk1MH0.CRCRucnPUU3LCW-rRUNq0tac8cytoqSJNXQQr4xWc2Q" 
          }
        })
        let comments = await response.json()
        // let ratings = comments.map(ratings => ratings.rate)
        // let ourComments = comments.map(comms => comms.comments)

        this.setState({comments:comments})
  
        console.log("THIS IS FETCH COMMENTS", comments)
      } catch (err) {
        console.log(err)
      }
    }

    fetchMovie = async () => {
      try {
        let response = await fetch(
          "http://www.omdbapi.com/?apikey=178624d7&i="+ this.props.match.params.id
         
          );
        console.log(response);
  
        if (response.ok) {
          // let movie = await response.json();
          let rightMovie = await response.json()
          // this.setState({
          //   movie: movie.Search,
          // });
          // let rightMovie = this.state.movie.find(movie => movie.imdbID.toString() === this.props.elementId.toString())
          this.setState({
            rightMovie: rightMovie
          })
          console.log("THIS IS RIGHT MOVIE", rightMovie)
          // console.log("THIS IS THE MOVIE I WANT TO SEE", movie);
          // console.log("THIS IS ELEMENTID", this.props.elementId)
        } else {
          this.setState({});
        }
      } catch (error) {
        console.log(error);
      }
    };



  render() {
    return (
      <div className="d-flex mt-4">
        <Container className="justify-content-center mb-5">
          <Row>
            <Col>
          <Card style={{width:"290px"}} className="border-0">
            <Card.Img variant="top" src={this.state.rightMovie.Poster} style={{height:"320px"}, {width:"290px"}}/>
            <Card.Body style={{backgroundColor:"darkSlateGray"}}>
              <Card.Title className="text-white">{this.state.rightMovie.Title}</Card.Title>
              <Card.Text>
                <p className="mb-1 text-white">
                  Year: {this.state.rightMovie.Year}
                </p>
                <p className="mb-1 text-white">
                  Genre: {this.state.rightMovie.Genre}
                </p>
                <p className="mb-1 text-white">
                  Actor: {this.state.rightMovie.Actors}
                </p>
                <p className="mb-1 text-white">
                  Language: {this.state.rightMovie.Language}
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
            <Col>
            <h2 className="text-white">Comments</h2>
            <ListGroup className="mt-3 mb-3">
                  {
                  this.state.comments.map(comments => ( 
                  <ListGroup.Item className="my-1 py-1">
                   "{comments.comment}", rating: {comments.rate}
                  </ListGroup.Item>                  
                ))
            }
        
          </ListGroup>
          <h2 className="text-white">Add Comment</h2>
          <AddComment elementId={this.props.match.params.id}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default ShowDetail;
