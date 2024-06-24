import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Commonbtn from './Commonbtn'
import Slider1 from '../assets/images/webp/slider1.webp'
import Slider2 from '../assets/images/webp/slider2.webp'
import Slider3 from '../assets/images/webp/slider3.webp'
import Slider4 from '../assets/images/webp/slider4.webp'
import Slider5 from '../assets/images/webp/slider5.webp'
import Slider6 from '../assets/images/webp/slider6.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Frame from '../assets/images/webp/Glyph.webp'
import Topunion from '../assets/images/webp/Union-top.webp'
import Bottomunion from '../assets/images/webp/Union-bottom.webp'
import Backgroundlayer from '../assets/images/webp/bg-layer.webp'
const Fully = () => {
    var settings = {
        dots: true,
        infinite: true,
        variableWidth: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section className='bg-black  overflow-hidden  position-relative' id='audit' >
            <div className="bg-light-yellow-layer w-100  position-absolute  z-0"></div>
            <img src={Bottomunion} alt="Bottomunion" className='w-100 z-1 position-relative' />
            <Container>
                <Row className='pt-sm-77 pt-60 pb-sm-83 pb-60'>
                    <Col lg={6} className='d-flex justify-content-center z-1 position-relative' data-aos="fade-up">                        
                            <img src={Frame} alt="frame" />
                            <div className=" position-absolute bg-layer">
                                <img src={Backgroundlayer} alt="" className='w-100' />
                            </div>                        
                    </Col>
                    <Col lg={6} className='z-1 pt-lg-0 pt-4' data-aos="fade-up">
                        <div className="d-flex flex-column align-items-start">
                            <h6 className=' font-manrope fw-normal fs-20 lh-48 mb-0 white-light'>Rest easy knowing that $CLAIR is </h6>
                            <h5 className='font-manrope fw-bold fs-32 lh-48 color-yellow mb-0 py-10'>Fully Audited and 100% Secure.</h5>
                            <h6 className=' font-manrope fw-normal fs-20 lh-48 mb-0 white-light pb-32'>Zero Room for Rug Pulls: Invest with Confidence.</h6>
                            <Commonbtn name="Audit" />
                        </div>
                    </Col>
                </Row>
                <Row className='pt-49 pb-sm-77 pb-60  top-border flex-wrap-reverse z-1 position-relative'>
                    <Col lg={7} className='z-1 pt-lg-0 pt-4 d-flex  justify-content-center' data-aos="fade-up">
                        <div className="d-flex flex-column">
                            <h4 className=' font-manrope fw-bold fs-32 lh-48 white-light mb-0 '>Listing on <span className="color-yellow">Major Exchanges</span></h4>
                            <h6 className=' font-manrope fw-normal fs-20 lh-30 white-light pt-3 mb-0 max-w-475'>Baby Sinclair’s Team is in action to secure the <span className="color-yellow">$CLAIR</span> listing on major exchanges. Exciting milestones ahead.</h6>
                        </div>
                    </Col>
                    <Col lg={5} className='z-1' data-aos="fade-up">
                        <div className="major-box position-relative ">
                            <Slider {...settings}>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider1} alt="slider" /></div>
                                </div>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider2} alt="slider" /></div>
                                </div>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider3} alt="slider" /></div>
                                </div>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider4} alt="slider" /></div>
                                </div>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider5} alt="slider" /></div>
                                </div>
                                <div>
                                    <div className="slider-box bg-white"><img src={Slider6} alt="slider" /></div>
                                </div>
                            </Slider>

                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={Topunion} alt="Topunion" className='w-100 z-1 position-relative' />
        </section>
    )
}
export default Fully