import { Menu } from "lucide-react";
import { useState } from "react";
import { Navbar, Nav, Sidebar, Sidenav } from "rsuite";
import { Link } from "react-router-dom";
function AppBar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleSideBar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar>
        <Navbar.Brand>Company</Navbar.Brand>
        <Nav pullRight className="hidden sm:flex">
          <NavItems />
        </Nav>
        {/* button nav */}
        <Nav pullRight className="sm:hidden">
          <Nav.Item onClick={handleSideBar}>
            <button>
              <Menu />
            </button>
          </Nav.Item>
        </Nav>
      </Navbar>
      {isOpen && <SideBar />}
    </>
  );
}
function NavItems() {
  return (
    <>
      <Nav.Item>
        <Link to="/">Home</Link>
      </Nav.Item>
      <Nav.Item href="/about">
        <Link to="">About</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/contact">Contact</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/blogs">Blogs</Link>
      </Nav.Item>
    </>
  );
}

function SideBar() {
  return (
    <Sidebar className="fixed right-0 z-10">
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <NavItems />
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  );
}

export default AppBar;
