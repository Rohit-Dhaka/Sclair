import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/images/svg/logo.svg'
import Languageicon from '../assets/images/svg/Language.svg'
import Buyicon from '../assets/images/svg/buy.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import Nextsection from '../assets/images/svg/nextsection.svg'
import Commonbtn from './Commonbtn';
import Heroimg from '../assets/images/webp/Hero.png'
const Hero = () => {
  return (
    <section className=' min-vh-100 hero-background position-relative  d-flex  flex-column '>
      <Navbar expand="lg" className=" py-26 Navbar  position-absolute w-100 z-1" data-aos="fade-down">
        <Container>
          <div className="d-flex gap-12">
            <img src={Logo} alt="logo" />
            <h3 className='color-yellow font-manrope fs-32 lh-48 mb-0 fw-semibold '>$CLAIR</h3>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='pt-lg-0 pt-4'>
            <Nav className="me-auto">
              <div className="d-flex flex-lg-row flex-column gap-lg-32 gap-4 pr-60 align-items-lg-center">
                <Nav.Link href="#about" className=' font-manrope fw-medium fs-16 lh-24 white-smoke Navlink underline position-relative '>About</Nav.Link>
                <Nav.Link href="#tokenomics" className=' font-manrope fw-medium fs-16 lh-24 white-smoke Navlink underline position-relative '>Tokenomics</Nav.Link>
                <Nav.Link href="#audit" className=' font-manrope fw-medium fs-16 lh-24 white-smoke Navlink underline position-relative '>Audit</Nav.Link>
                <Nav.Link href="#roadmap" className=' font-manrope fw-medium fs-16 lh-24 white-smoke Navlink underline position-relative '>Roadmap</Nav.Link>
                <Nav.Link href="#whitepaper" className=' font-manrope fw-medium fs-16 lh-24 white-smoke Navlink  underline position-relative'>White Paper</Nav.Link>
              </div>

              <Dropdown className='pt-lg-0 pt-4'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className=''>
                  <img src={Languageicon} alt="Languageicon" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">German</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="next-section position-absolute">
        <Nav.Link href='#about' className='cursor-pointer z-1 position-relative' >
          <img src={Nextsection} alt="Nextsection" />
        </Nav.Link>
      </div>
      <Container data-aos="zoom-in" className='pt-150 d-flex flex-column flex-grow-1  justify-content-center  align-items-center '>
        <div className="d-flex flex-column align-items-center  ">
          <h1 className=' font-manrope fw-bold fs-60 lh-72 white-light mb-0 text-center'>Presale is <span className="color-yellow">Live</span></h1>
          <h6 className='font-manrope  fw-normal fs-16 lh-24 white-light pt-3 mb-0 max-w-720 text-center pb-32'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</h6>
          <button className='buy-btn font-manrope fw-bold fs-16 lh-24 d-flex align-items-center gap-10 hero-btn'>Buy $Clair
            <img src={Buyicon} alt="buyicon" />
          </button>
          <div className="hero-img"><img src={Heroimg} alt="heroimg" className='w-100  ' /></div>
        </div>
      </Container>

    </section>
  )
}
export default Hero