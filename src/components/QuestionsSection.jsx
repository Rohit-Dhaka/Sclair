import React from 'react'
import { Container } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import Topunion from '../assets/images/webp/Union-top.webp'
import Bottomunion from '../assets/images/webp/Union-bottom.webp'
import Questions1 from '../assets/images/webp/questions1.webp'
import Questions2 from '../assets/images/webp/questions2.webp'
import { Ellipse2230 } from '../common/icon';
const QuestionsSection = () => {
    return (
        <section className='bg-black position-relative common-margin' id='whitepaper'>
            <div className=" position-absolute ellipse2230 z-2 d-sm-block d-none">
                <Ellipse2230/>
            </div>
            <div className="bg-light-yellow-layer w-100  position-absolute  z-0"></div>
            <div className=" position-absolute questions1"><img src={Questions1} alt="question" /></div>
            <div className=" position-absolute questions2 d-sm-block d-none"><img src={Questions2} alt="question" /></div>
            
            <img src={Bottomunion} alt="bottomunion" className='w-100 z-1 position-relative  common-img-margin' />                
            <Container>
                <h2 className='font-manrope fw-bold fs-48 lh-57 text-center mb-0 white-smoke pt-lg-97 pt-sm-80 pt-60 text-center z-1 position-relative'>Frequently Asked <span className="color-yellow">Questions</span></h2>

                <div className="pt-60 max-w-800 mx-auto pb-lg-97 pb-sm-80 pb-60 z-1 position-relative">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0" data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>WHAT IS $CLAIR?</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Arcu in pellentesque sit odio.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Lorem gravida feugiat aliquet arcu porttitor sodales tellus habitant sed.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Metus augue dictumst sit amet.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Elementum viverra tellus tincidunt nunc odio at id ipsum.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Sagittis morbi aliquam facilisis ornare lacus tempus massa.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className='mt-24' data-aos="fade-up">
                            <Accordion.Header >
                                <h6 className=' font-manrope fs-16 lh-24 mb-0 white-smoke duration-300'>Elementum at dui varius consequat fringilla.</h6>
                            </Accordion.Header>
                            <Accordion.Body>
                                <h6 className="font-manrope  fw-normal fs-16 lh-24 mb-0 gray-100 max-w-510">
                                    Built on the Ethereum blockchain and powered by the most advanced
                                    AI technology, Baby Sinclair has the potential to make millions.
                                </h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            <img src={Topunion} alt="topunion" className='w-100  z-1 position-relative' />
        </section>
    )
}
export default QuestionsSection