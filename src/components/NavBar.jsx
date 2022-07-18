import { Navbar, Container } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* If you want to add a new page, just put any new href and it will be a page in your site, just like the line below */}
        <Navbar.Brand href="/">
          <img src="/favicon.ico" alt="favicon" className="inline-image" />
          Lesha's Website
        </Navbar.Brand>
        <Navbar.Brand href="/1">Tools</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
