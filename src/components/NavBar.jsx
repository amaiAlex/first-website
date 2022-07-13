import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      {/* If you want to add a new page, just put any new href and it will be a page in your site, just like the line below */}
      <Navbar.Brand href="/">Lesha's Website</Navbar.Brand>
    </Container>
  </Navbar>
  );
}
