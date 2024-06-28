import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Sadowline from '../assets/images/svg/a.svg'
import Crypto1 from '../assets/images/svg/Crypto1.svg'
import Crypto2 from '../assets/images/svg/Crypto2.svg'
import Crypto3 from '../assets/images/svg/Crypto3.svg'
import Crypto4 from '../assets/images/svg/Crypto4.svg'
import Clock from '../assets/images/svg/clock.svg'
import Dotted from '../assets/images/svg/dotted.svg'
import Commonbtn from './Commonbtn'
import Dino from '../assets/images/webp/dino.webp'
import Yellowline from '../assets/images/webp/yellow-line.webp'
import Whiteline from '../assets/images/webp/white-line.webp'
import { Ellipse2236 } from '../common/icon'
const { useState, useEffect } = React;
const AboutSection = () => {
  const [countdownDate, setCountdownDate] = useState(new Date('8 /25/2024').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);
  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <section id='about' className='bg-black about-background position-relative common-margin' >

      <div className=" position-absolute ellipse2236">
        <Ellipse2236 />
      </div>
      <Container className='pt-50 position-relative'>
        <div className=" position-absolute dino-1 ">
          <img src={Dino} alt="dino" />
        </div>
        <div className="timeing-box  position-relative  mx-auto " >
          <Row className=' flex-wrap-reverse'>
            <Col lg={5} className='z-1 pt-lg-0 pt-4'>
              <div className="">
                <div className="d-flex  flex-lg-column  flex-wrap  justify-content-between">
                  <div className="d-flex  flex-lg-row  gap-lg-28 gap-4 ">
                    <div className="d-flex flex-column">
                      <h6 className='mb-0 font-manrope fw-normal fs-16 lh-24  text-white'>1 $Clair</h6>
                      <h5 className='font-manrope fw-bold fs-16 lh-24 color-yellow pt-1 mb-0 text-nowrap'>0.00387 $</h5>
                    </div>
                    <img src={Sadowline} alt="sadowline" />
                    <div className="d-flex flex-column">
                      <h6 className='mb-0 font-manrope fw-normal fs-16 lh-24  text-white text-nowrap'>Raised Amount</h6>
                      <h5 className='font-manrope fw-bold fs-16 lh-24 color-yellow pt-1 mb-0'>332,123$</h5>
                    </div>
                  </div>
                  <div className="pt-3 d-flex gap-14 pb-32  justify-content-md-start justify-content-between cryptocurrency-box ">
                    <div className="cryptocurrency d-flex justify-content-center align-items-center">
                      <img src={Crypto1} alt="crypto" />
                    </div>
                    <div className="cryptocurrency d-flex justify-content-center align-items-center">
                      <img src={Crypto2} alt="crypto" />
                    </div>
                    <div className="cryptocurrency d-flex justify-content-center align-items-center">
                      <img src={Crypto3} alt="crypto" />
                    </div>
                    <div className="cryptocurrency d-flex justify-content-center align-items-center">
                      <img src={Crypto4} alt="crypto" />
                    </div>
                  </div>
                </div>
                <button className='buy-btn font-manrope fw-bold fs-16 lh-24 max-w-lg-254  w-100'>Buy Now
                </button>
              </div>
            </Col>
            <Col lg={7} className='z-1 '>
              <div className="">
                <div className="d-flex  justify-content-between">
                  <div className="d-flex flex-column">
                    <h6 className=' font-manrope fw-normal fs-16  lh-24 white-silver mb-0'>Tokens are Sold</h6>
                    <h5 className=' font-manrope fw-bold fs-16 lh-24 color-yellow mb-0'>98,212,738</h5>
                  </div>
                  <div className="d-flex flex-column pr-24">
                    <h6 className=' font-manrope fw-normal fs-16  lh-24 white-silver mb-0'>Tokens Remaining</h6>
                    <h5 className=' font-manrope fw-bold fs-16 lh-24  white-smoke mb-0'>80,212,738</h5>
                  </div>
                </div>
                <div className="pt-sm-3 pt-1  position-relative">
                  <div className=" position-absolute line-yellow">
                    <img src={Yellowline} alt="yellowline" />

                  </div>
                  <div className=" position-absolute line-white">
                    <img src={Whiteline} alt="whiteline" />
                  </div>                  
                  <div class="range">
                    <input type="range" class="range-input" />
                  </div>
                </div>
                <h6 className='mb-0  font-manrope fw-normal fs-14 lh-21  gray-100 pt-6'>Purchase $Clair fast until the price increase.</h6>
                <div className="d-flex align-items-center justify-content-between pt-17 flex-wrap">
                  <div className="d-flex gap-10">
                    <img src={Clock} alt="clock" />
                    <h6 className=' font-manrope fw-normal fs-16 lh-20 white-smoke mb-0 w-sm-80'>Price
                      increase in</h6>
                  </div>
                  <div className="d-flex gap-2 align-items-end  pt-sm-0 pt-2">
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font-manrope fw-normal fs-14 lh-21 mb-0 gray-100'>Days</h6>
                      <div className="timing-box d-flex justify-content-center  align-items-center font-manrope fw-normal fs-24 lh-36  white-smoke">{state.days || '0'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb-12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font-manrope fw-normal fs-14 lh-21 mb-0 gray-100'>Hours</h6>
                      <div className="timing-box d-flex justify-content-center  align-items-center font-manrope fw-normal fs-24 lh-36  white-smoke">{state.hours || '00'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb-12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font-manrope fw-normal fs-14 lh-21 mb-0 gray-100'>Mins</h6>
                      <div className="timing-box d-flex justify-content-center  align-items-center font-manrope fw-normal fs-24 lh-36  white-smoke">{state.minutes || '00'}</div>
                    </div>
                    <img src={Dotted} alt="dotted" className='pb-12' />
                    <div className="d-flex flex-column align-items-center">
                      <h6 className=' font-manrope fw-normal fs-14 lh-21 mb-0 gray-100'>Secs</h6>
                      <div className="timing-box d-flex justify-content-center  align-items-center font-manrope fw-normal fs-24 lh-36  white-smoke">{state.seconds || '00'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <h2 className='font-manrope fw-bold fs-48 lh-57 text-center mb-0 white-smoke pt-lg-100 pt-sm-80 pt-60'>About <span className="color-yellow">$CLAIR</span></h2>
        <div className="d-flex flex-column  align-items-center pb-62">
          <h6 className='text-center font-manrope fw-normal fs-16 lh-24 mb-0 pt-3 max-w-776 gray-100'>As you navigate through the avatars, you'll find each one has a unique voice, bringing laughter and a touch of sarcasm to the otherwise serious discussions in the crypto space.</h6>
          <h6 className='text-center font-manrope fw-normal fs-16 lh-24 mb-0 pt-12 max-w-776 gray-100'>
            In a landscape where tensions can run high, Baby Sinclair’s memes serve as a reminder that, sometimes, the best way to confront challenges is with a good laugh.
          </h6>
          <h6 className='text-center font-manrope fw-normal fs-16 lh-24 mb-0 pt-12 max-w-856 pb-32 gray-100'>
            In this meme-driven world, laughter is not just a reaction; it's a powerful tool for change, and Baby Sinclair is wielding it with style. The bad players better watch out; the crypto defender is here, armed with memes and ready to act.
          </h6>
          <div className=" position-relative z-1">
            <Commonbtn name="Learn More" />
          </div>
        </div>
      </Container>
    </section>
  )
}
export default AboutSection