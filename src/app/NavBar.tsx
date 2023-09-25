"use client";

import Link from "next/link";
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import { usePathname } from "next/navigation"; 

export default function Navegacion(){

    const pathname = usePathname();


    return(
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">NextJS Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathname === "/static"}>Estático</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathname === "/dynamic"}>Dinámico</Nav.Link>
                        <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>ISR</Nav.Link>
                        <NavDropdown title="Topics" id="topics-dropdown">
                            <NavDropdown.Item as={Link} href="/topics/cats">Cats</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/food">Food</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/sports">Sports</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/search" active={pathname === "/search"}>Búsqueda</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}