import React from "react";
import DeleteBtn from "../components/DeleteBtn";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
  return (
    <div>
      <h1>Saved Page</h1>
      <Container>
        <Row>
        <Col size="md-6 sm-12">
        <p>This keeps breaking...</p>
            {/* {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                  
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Saved;