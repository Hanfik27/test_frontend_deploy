import React from 'react';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function NavbarApp() {
  const navigate = useNavigate();
  const username = localStorage.getItem('user'); 

  const handleLogout = () => {
    Swal.fire({
      title: 'Keluar dari aplikasi?',
      text: 'Apakah Anda yakin ingin logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya, Logout',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Swal.fire('Berhasil Logout', '', 'success');
        navigate('/login');
      }
    });
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Hanfik King</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <Button variant="outline-light" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
