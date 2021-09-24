import { Component } from 'react'
import {ListGroup} from 'react-bootstrap'

class CommentSection extends Component {

  state = {
        comments : [] 
  }

  componentDidMount(){
    this.fetchComments()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.elementId !== this.props.elementId){
      this.fetchComments()
    }
  }

  fetchComments = async () => {
        try {
          let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+ this.props.elementId, {
          headers: {
          Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjViYjJkNTI2MjAwMTViNmRjOTMiLCJpYXQiOjE2MzA1MDMzNTAsImV4cCI6MTYzMTcxMjk1MH0.CRCRucnPUU3LCW-rRUNq0tac8cytoqSJNXQQr4xWc2Q" 
          }
        })
        let comments = await response.json()

        this.setState({comments:comments})
        console.log("THIS IS COMMENTS",comments)
        
      } catch (err) {
        console.log(err)
      }
}
  render() {
    return (
            <ListGroup className="mt-3">
                  {
                this.state.comments.map(comment => ( 
                  <ListGroup.Item>
                   {comment.comment}
                  </ListGroup.Item>                  
                ))
            }
        
          </ListGroup>
    )
  }
 }
export default CommentSection