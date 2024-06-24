import React from 'react'
import { Container } from 'react-bootstrap'
import Commonbtn from './Commonbtn'
import Topunion from '../assets/images/webp/Union-top.webp'
import Bottomunion from '../assets/images/webp/Union-bottom.webp'
import { Ellipse2235 } from '../common/icon'
const Smart = () => {
    return (
        <section className='smart-background position-relative'>  
            <div className=" position-absolute ellipse2235 z-2">
                <Ellipse2235/>
            </div>              
            <img src={Bottomunion} alt="bottomunion" className='w-100 z-1 position-relative' />
            <Container>
                <div className="d-flex flex-column  align-items-center pt-lg-86 pt-sm-80 pt-60 pb-lg-85 pb-sm-80 pb-60 z-1 position-relative" data-aos="fade-up" >
                    <h2 className='font-manrope fw-bold fs-48 lh-57 text-center mb-0  color-yellow pb-24 '>$CLAIR <span className="white-light">Smart Contract Address</span></h2>
                    <div className="copy-box d-flex  w-100 position-relative">
                        <input type="text" placeholder='' className='w-100 bg-transparent  border-0 outline-none text-white p-12' />
                        <Commonbtn  name="Copy"/>                        
                    </div>
                    <h6 className='text-center font-manrope fw-normal fs-16 lh-24 mb-0  gray-100 max-w-805 pt-32'>Built on the Ethereum blockchain and powered by the most advanced AI technology, Baby Sinclair has the potential to make millions in both early stages and long-term investment. Our strategic burn system, which will burn millions of $CLAIR quarterly, aims to increase its value significantly. Don't miss out! Get in early and secure your chance to become the next millionaire.</h6>
                </div>
            </Container>
            <img src={Topunion} alt="topunion" className='w-100 z-1 position-relative' />

        </section>
    )
}
export default Smart
