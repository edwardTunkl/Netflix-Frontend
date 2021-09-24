import "./App.css";
import React from "react";
import MyNavbar from "./components/MyNavbar";
import MyGallery from "./components/MyGallery";
import { Container, Row, Col } from "react-bootstrap";
import MyHeader from "./components/MyHeader";
import CommentSection from "./components/CommentSection";
import AddComment from "./components/AddComment";
import ShowDetail from "./components/ShowDetail";
import {BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  state = {
    query: "joker",
    elementId: "tt7286456",
  };

  onChange = (query) => {
    this.setState({ query });
  };
  showComments = (ID) => {
    this.setState({ elementId: ID });
  };

  render() {
    return (
      <div style={{backgroundColor:"darkSlateGray"}} >
      <Router>
          <MyNavbar onChange={this.onChange} />
          <Container style={{ marginTop: 80 }}>
          <Row>
          <MyHeader/>
          </Row>
          {/* <Route path="/" exact render={(routerProps) => <AddComment {...routerProps} elementId={this.state.elementId} />} />
          <Route path="/" exact render={(routerProps) => <CommentSection {...routerProps} elementId={this.state.elementId} />} /> */}
              {/* <Col sm={4}><AddComment elementId={this.state.elementId}/></Col> */}
              {/* <Col sm={4}><CommentSection elementId={this.state.elementId} /></Col> */}
          <Route path="/" exact render={(routerProps) => <MyGallery {...routerProps} search={this.state.query} showComments={this.showComments} />} />
          <Route path="/" exact render={(routerProps) => <MyGallery {...routerProps} search="Alien" showComments={this.showComments} />} />
          <Route path="/" exact render={(routerProps) => <MyGallery {...routerProps} search="Terminator" showComments={this.showComments} />} />
          {/* <MyGallery search={this.state.query} showComments={this.showComments} />
          <MyGallery search="Alien" showComments={this.showComments} />
          <MyGallery search="Terminator" showComments={this.showComments} /> */}
          {/* <Route component={ShowDetail} path="/ShowDetail/" /> */}
          {/* <ShowDetail elementId={this.state.elementId} /> */}
          <Route path="/ShowDetail/:id" render= {(routerProps) => <ShowDetail {...routerProps} elementId={this.state.elementId} search={this.state.query} />} />
        </Container>
      </Router> 
      </div>
    );
  }
}
export default App;
