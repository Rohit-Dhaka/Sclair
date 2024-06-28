import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Logo from '../assets/images/svg/logo.svg'
import Languageicon from '../assets/images/svg/Language.svg'
import Buyicon from '../assets/images/svg/buy.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import Nextsection from '../assets/images/svg/nextsection.svg'
import Heroimg from '../assets/images/webp/Hero.webp'
const HeroSection = () => {
  const [show, setShow] = useState(false)
  if (show === true) {
    document.body.classList.add("navhide")
  }
  else {
    document.body.classList.remove("navhide")
  }
  return (
    <section className='hero-background position-relative  '>

      <div className="navbar py-26 Navbar  " data-aos="fade-down">
        <Container>
          <div className="d-flex gap-12 cursor-pointer">
            <img src={Logo} alt="logo" />
            <h3 className='color-yellow font-manrope fs-32 lh-48 mb-0 fw-semibold '>$CLAIR</h3>
          </div>
          <div className={`${show ? "navshow" : ""} menu d-flex gap-60  duration-300 `} >
            <ul className='d-flex gap-32 p-0 m-0'>
              <li><a onClick={() => setShow(!show)} href="#about" className='font-manrope fw-medium fs-16 lh-24 white-silver Navlink underline position-relative'>About</a></li>
              <li><a onClick={() => setShow(!show)} href="#tokenomics" className='font-manrope fw-medium fs-16 lh-24 white-silver Navlink underline position-relative'>Tokenomics</a></li>
              <li><a onClick={() => setShow(!show)} href="#audit" className='font-manrope fw-medium fs-16 lh-24 white-silver Navlink underline position-relative'>Audit</a></li>
              <li><a onClick={() => setShow(!show)} href="#roadmap" className='font-manrope fw-medium fs-16 lh-24 white-silver Navlink underline position-relative'>Roadmap</a></li>
              <li><a onClick={() => setShow(!show)} href="#whitepaper" className='font-manrope fw-medium fs-16 lh-24 white-silver Navlink underline position-relative'>White Paper</a></li>
            </ul>
            <Dropdown className='pt-lg-0 pt-4'>
              <Dropdown.Toggle variant="success" id="dropdown-basic" className=''>
                <img src={Languageicon} alt="Languageicon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Hindi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={`${show ? "cross" : " "} menuicon  d-lg-none d-block`} onClick={() => setShow(!show)}>
            <span className='bar duration-300'></span>
            <span className='bar my-2 duration-300'></span>
            <span className='bar duration-300'></span>
          </div>
        </Container>
      </div>

      <div className="next-section position-absolute">
        <Nav.Link href='#about' className='cursor-pointer z-1 position-relative' >
          <img src={Nextsection} alt="Nextsection" />
        </Nav.Link>
      </div>

      <Container data-aos="zoom-in" className='pt-50 d-flex flex-column flex-grow-1  justify-content-center  align-items-center '>
        <div className="d-flex flex-column align-items-center z-n1 ">
          <h1 className=' font-manrope fw-bold fs-60 lh-72 white-smoke mb-0 text-center'>Presale is <span className="color-yellow">Live</span></h1>
          <h6 className='font-manrope  fw-normal fs-16 lh-24 white-smoke pt-sm-3 pt-1 mb-0 max-w-720 text-center pb-32'>Led by the most advanced AI technology, with a unique burn system to potentially increase its value significantly. Secure your chance to become the next millionaire!</h6>
          <button className='buy-btn font-manrope fw-bold fs-16 lh-24 d-flex align-items-center gap-10 hero-btn'>Buy $Clair
            <img src={Buyicon} alt="buyicon"  />
          </button>
          <div className="hero-img"><img src={Heroimg} alt="heroimg" className='w-100 h-100 ' /></div>
        </div>
      </Container>

    </section>
  )
}
export default HeroSection