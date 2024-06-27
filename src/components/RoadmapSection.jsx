import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Phase1 from '../assets/images/webp/phase1.webp'
import Phase2 from '../assets/images/webp/phase2.webp'
import Phase3 from '../assets/images/webp/phase3.webp'
import Tradingimg from '../assets/images/webp/trading-chart.webp'
import { Ellipse2232, Ellipse2233, Ellipse2234 } from '../common/icon'
const RoadmapSection = () => {
    return (
        <section className='bg-black roadmap-bg position-relative overflow-hidden' id='roadmap'>
            <div className=" position-absolute ellipse2233">
                <Ellipse2233 />
            </div>
            <div className=" position-absolute ellipse2234">
                <Ellipse2234 />
            </div>
            <div className=" position-absolute ellipse2232">
                <Ellipse2232 />
            </div>
            <Container className=' position-relat ive'>
                <h2 className=' font-manrope fw-bold fs-48 lh-57 white-light mb-0 text-center pt-64 pb-100 '>Roadmap</h2>
                <Row className='pb-lg-366 pb-sm-80 pb-60' data-aos="fade-up">
                    <Col lg={4} sm={6} className='d-flex justify-content-center pt-lg-184 z-1'>
                        <div className="roadmap-card w-100 position-relative ">
                            <div className="position-absolute phase1 phase d-lg-block d-none"><img src={Phase1} alt="phase" /></div>
                            <h5 className=' font-manrope fw-medium fs-32 lh-48  text-white mb-0'>Phase 1</h5>
                            <div className="d-flex gap-2 flex-column pt-3">
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Team Recruitment</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Social Media</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Audit Smart Contract</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Whitepaper</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Presale Launch</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Community Growth</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>AI Avatars Release</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-center pt-4 pt-sm-0  pt-lg-78  z-1' data-aos="fade-up">
                        <div className="roadmap-card w-100 position-relative">
                            <div className="position-absolute phase2 phase d-lg-block d-none"><img src={Phase2} alt="phase" /></div>

                            <h5 className=' font-manrope fw-medium fs-32 lh-48  text-white mb-0'>Phase 2</h5>
                            <div className="d-flex gap-2 flex-column pt-3">
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Official Launch</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Burns 5%</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Major DEX & CEX Listings</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Coinmarketcap</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>CoinGecko</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Influencers Marketing</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>More AI Avatars Release</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} sm={6} className='d-flex justify-content-center mx-auto pt-lg-0 pt-4 z-1' data-aos="fade-up">
                        <div className="roadmap-card w-100 position-relative">
                            <div className="position-absolute phase3 phase d-lg-block d-none"><img src={Phase3} alt="phase" /></div>

                            <h5 className=' font-manrope fw-medium fs-32 lh-48  text-white mb-0'>Phase 3</h5>
                            <div className="d-flex gap-2 flex-column pt-3">
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Burns (5% quarterly)</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Rewards Program</h6>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Multiple Partnerships</h6>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>Create your own AI Avatar Voiceover.</h6>
                                </div>
                                <div className="d-flex align-items-start">
                                    <div className="dotted"></div>
                                    <h6 className=' font-manrope  fw-medium fs-16 lh-24 white-smoke mb-0'>AI Metaverse Avatar  Play-to-Earn</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="trading-img position-absolute z-0 ">
                    <img src={Tradingimg} alt="trading" className='w-100' />
                </div>
            </Container>
            

        </section>
    )
}
export default RoadmapSection