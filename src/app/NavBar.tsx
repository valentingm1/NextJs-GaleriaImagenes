"use client";

import Link from "next/link";
import {Navbar, Nav, Container} from "react-bootstrap"
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
                        <Nav.Link as={Link} href="/hello" active={pathname === "/hello"}>Hello</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}