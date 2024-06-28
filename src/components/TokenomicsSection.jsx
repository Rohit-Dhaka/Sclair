import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Arrow from '../assets/images/svg/arrow.svg'
import Pre from '../assets/images/webp/per.webp'
import Icon1 from '../assets/images/svg/icon1.svg'
import Icon2 from '../assets/images/svg/icon2.svg'
import Plus from '../assets/images/svg/Puls.svg'
import { Ellipse2238 } from '../common/icon'

const TokenomicsSection = () => {
    return (
        <section className='bg-black bg-tokenomics position-relative' id='tokenomics'>
            <div className=" position-absolute ellipse2238 z-2">
                <Ellipse2238 />
            </div>
            <Container >
                <Row className='  align-items-center pb-60 pt-lg-104 pt-sm-80 pt-60'>
                    <Col lg={6} data-aos="fade-up">
                        <h2 className=' font-manrope fw-bold fs-48 lh-57  white-smoke mb-0'>Tokenomics</h2>
                        <div className="pt-3 d-flex gap-3 align-items-center">
                            <h6 className=' font-manrope fw-bold fs-24 lh-36 white-smoke mb-0'>Baby Sinclair</h6>
                            <button className=' font-manrope fw-normal fs-24 lh-36 color-yellow  bg-transparent clair-btn'>$Clair</button>
                        </div>
                        <h5 className=' font-manrope fs-16 lh-24 fw-medium mb-0 pt-24 white-smoke'>Total Tokens</h5>
                        <h4 className=' font-manrope fw-bold fs-40 lh-48  color-yellow pt-1 mb-0 '>100,000,000,000</h4>
                        <div className="pt-32 d-flex flex-column gap-12">
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>1%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Presale</h6>
                            </div>
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>3%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Marketing</h6>
                            </div>
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>5%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Team - locked for 24 months</h6>
                            </div>
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>10%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Investors - locked for 24 months</h6>
                            </div>
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>21%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Exchange listings & liquidity</h6>
                            </div>
                            <div className="d-flex align-items-end gap-12">
                                <img src={Arrow} alt="arrow" />
                                <h5 className=' font-manrope  fw-medium fs-24 lh-36 white-smoke mb-0'>60%</h5>
                                <h6 className=' font-manrope mb-0 fw-normal fs-16 lh-24 white-smoke'>Rewards and burns</h6>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6} className=' d-flex justify-content-lg-end   justify-content-center' data-aos="fade-up">
                    <div className="tokenomics-img ">

                        <img src={Pre} alt="pre" className='w-100' />
                    </div>
                    </Col>
                </Row>
                <div className="pb-lg-96 pb-sm-80 pb-60">
                    <div className="baby-box  position-relative  px-sm-0 px-3">
                        <Row className=' align-items-center'>
                            <Col lg={5}>
                                <div className="d-flex gap-20 justify-content-center">
                                    <div className="icon" data-aos="fade-up">
                                        <img src={Icon1} alt="icon" className='w-100 ' />

                                    </div>
                                    <img src={Plus} alt="plus"/>
                                    <div className="icon" data-aos="fade-up">

                                        <img src={Icon2} alt="icon" className='w-100 ' />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={7} className='pt-lg-0 pt-4'>
                                <h4 className=' font-manrope fs-20 lh-30 mb-0  white-smoke  text-lg-start text-center'>Baby Sinclair Stands Strong with the Shiba Inu Community</h4>
                                <h6 className=' font-manrope fw-normal mb-0 fs-16 lh-24 white-silver pt-10 text-lg-start text-center'>10% of every $CLAIR token sold post-presale will be dedicated to burning SHIB.</h6>
                            </Col>
                        </Row>
                    </div>
                </div>


            </Container>
        </section>
    )
}

export default TokenomicsSection