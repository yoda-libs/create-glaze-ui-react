import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useEffect } from 'react';

export default function Root(props) {
  const { glaze, name } = props;
  useEffect(() => {
    // subscribe to messages from glaze framework
    var sub = glaze.subscribe(msg => {
      console.log(`[${name} recv]`, msg);
    });
    console.log(`[${name}] subscribed to glaze`);

    return function unsubscribe() {
        // unsubscribe when not needed anymore
        sub.unsubscribe();
        console.log(`[${name}] unsubscribed from glaze`);
    }

  });
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
