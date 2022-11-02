import Nav from 'react-bootstrap/Nav';

function NavMenu() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/"><img src="./images/Logo_vector.png" width="40px"/>    </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/" style={{color:"black"}}>Form Builder</Nav.Link>
      </Nav.Item>
 
    </Nav>
  );
}

export default NavMenu;