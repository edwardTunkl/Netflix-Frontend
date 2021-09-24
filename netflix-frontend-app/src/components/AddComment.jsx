import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
      comment: {
        comment: "",
        rate: 1,
        elementId: this.props.elementId
      }
  };
  componentDidUpdate(prevProps) {
    if (prevProps.elementId !== this.props.elementId) {
      this.setState({
        comment: {
          ...this.state.comment,
          elementId: this.props.elementId,
        },
      });
    }
  }

  sendComment = async (e) => {
   e.preventDefault()
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MzA1MDMzNTAsImV4cCI6MTYzMTcxMjk1MH0.CRCRucnPUU3LCW-rRUNq0tac8cytoqSJNXQQr4xWc2Q"
          },
        }
      );
      if (response.ok) {
        alert("Comment was sent!");
      } else {
        console.log("error");
        alert("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      
        <Form onSubmit={this.sendComment} className="mt-3">
          <Form.Group>          
            <Form.Control 
            type="text" 
            placeholder="Comment here..."
            value={this.state.comment.comment}
            onChange={e => this.setState({
                  comment:{
                         ...this.state.comment,
                      comment: e.target.value
                   } 
            })}
            />
          </Form.Group >
          <Form.Group >
            <Form.Label className="my-0 text-white">Rating</Form.Label>
            <Form.Control as="select"
            value={this.state.comment.rate}
            onChange={(e) => this.setState({
              comment:{
                  ...this.state.comment,
                  rate: e.target.value
                } 
            })}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit" className="mb-2">
            Submit
          </Button>
        </Form>
      
    );
  }
}
export default AddComment;
