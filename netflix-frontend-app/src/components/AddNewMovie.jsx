import { Component } from "react";

// Add AddMovie to MyList in a Modal 

class AddNewMovie extends Component {
  state = {};

  componentDidMount = () => {
    this.fetchNewMovie();
  };

  fetchNewMovie = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

/*    
  "Title": "The Lord of the Rings: The Fellowship of the Ring",
  "Year": "2001",
  "imdbID": "tt0120737",  //UNIQUE
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
*/

  render() {
    return (<>
    
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>New Movie</Form.Label>
                  <Form.Control type="text" placeholder="Movie Name"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Year</Form.Label>
                  <Form.Control type="text" placeholder="Year"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Example select</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
          </Form>
    
    
    </>
    )}
}
export default AddNewMovie;
