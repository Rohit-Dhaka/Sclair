import React from 'react'
import { Container, Nav} from 'react-bootstrap'
import { Ellipse2231 } from '../common/icon'
const FooterSection = () => {
    return (
        <footer className='bg-bla ck footer-background  position-relative overflow-hidden common-margin'>
             <div className=" position-absolute ellipse2231">
                <Ellipse2231/>
            </div>
            <Container>
                <div className="d-flex pb-26 flex-column align-items-center pt-lg-120  pt-sm-80 pt-60">
                    <h2 className=' font-manrope fs-60 lh-71 color-yellow  fw-semibold mb-0 pb-20'>$CLAIR</h2>
                    <h6 className=' font-manrope fw-normal fs-16 lh-24 gray-100 mb-0  text-center max-w-626'>In this meme-driven world, laughter is not just a reaction; it's a powerful tool for chang
                        and Baby Sinclair is wielding it with style. The bad players better watch out;
                        the crypto defender is here, armed with memes and ready to act.</h6>
                    <div className="d-flex   footer-link  pt-50 pb-40  flex-wrap justify-content-center     ">
                        <Nav.Link href='#about' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>About</Nav.Link>
                        <Nav.Link href='#tokenomics' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Tokenomics</Nav.Link>
                        <Nav.Link href='#audit' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Audit</Nav.Link>
                        <Nav.Link href='#roadmap' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Roadmap</Nav.Link>
                        <Nav.Link href='#whitepaper' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>White Paper</Nav.Link>
                        <Nav.Link href='#privacy' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Privacy   </Nav.Link>
                        <Nav.Link href='#' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Cookies</Nav.Link>
                        <Nav.Link href='#' className=' font-manrope fw-medium fs-16 lh-24 gray-200 underline position-relative '>Disclaimer</Nav.Link>
                    </div>
                    <div className="yellow-line w-100 "></div>
                </div>
            </Container>
        </footer>
    )
}
export default FooterSection