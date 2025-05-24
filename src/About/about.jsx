import './about.css'
import Brad from '../Brad/Brad'
import React, { useEffect, useState } from 'react';
const About = () => {
  function Counter({ initialValue, targetValue, duration }) {
    const [currentValue, setCurrentValue] = useState(initialValue);

    useEffect(() => {
      let startTime;
      let animationFrameId;

      const animateCounter = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }

        const progress = (timestamp - startTime) / duration;
        const newValue = Math.floor(initialValue + (progress * (targetValue - initialValue)));

        if (newValue < targetValue) {
          setCurrentValue(newValue);
          animationFrameId = requestAnimationFrame(animateCounter);
        } else {
          setCurrentValue(targetValue);
        }
      };

      animationFrameId = requestAnimationFrame(animateCounter);

      return () => cancelAnimationFrame(animationFrameId);
    }, [initialValue, targetValue, duration]);

    return <span>{currentValue}</span>;
  }
  return (
    <>
<Brad head={"About Us"}/>
      {/* <!-- pet_care_area_start  --> */}
      <div class="pet_care_area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-5 col-md-6">
              <div class="pet_thumb">
                <img src="img/about/people.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 offset-lg-1 col-md-6">
              <div class="pet_info">
                <div class="section_title">
                  <h3><span> </span> <br />
                    WHO ARE WE</h3>
                  <p>Rooted in the rich culture and royal legacy of Rajasthan,
                    we are a vibrant student community committed to fostering growth,
                    creativity, and confidence. Our platform provides students with
                    diverse opportunities to develop essential life skills,
                    showcase their talents, and connect meaningfully with peers.
                    Through regular events and interactive initiatives,
                    we aim to create an inclusive space where students are encouraged
                    to explore their potential and thrive in all aspects of life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- pet_care_area_end  --> */}

      {/* <!-- adapt_area_start  --> */}
      <div class="adapt_area">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6 ">
              <div class="adapt_help">
                <div class="section_title">
                  <h3><span></span>ORIGIN</h3>
                  <p>The foundation stone of our journey was laid with the vision of fostering brotherhood and unity in diversity. What began as an initiative to encourage students to engage in extracurricular activities beyond academics has now evolved into a prestigious organization—RCA. Backed by a passionate and dedicated team, we continue to strive for new milestones each year, staying true to our roots while shaping a brighter future.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="adapt_help">
                <div class="section_title" align="center">
                  <img src="/" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="adapt_area">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-5">
              <div class="adapt_help">
                <div class="section_title">
                  <h3> VISION</h3>
                  <p>Our vision is to celebrate and share the rich cultural heritage of Rajasthan within the SVNIT community, bringing a sense of home to students far from their roots. Through the celebration of festivals and vibrant cultural activities, we aim to bridge the distance and create a welcoming space for all. We are continually working towards reaching more SVNITians, encouraging active participation, and fostering a strong, inclusive cultural bond across the campus.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="adapt_about">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="single_adapt text-center">
                      <div className="adapt_content">
                        <h3>
                          <Counter initialValue={0} targetValue={3000} duration={10000} />
                        </h3>
                        <p>Students, Professors and Staff</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="single_adapt text-center">
                      <div className="adapt_content">
                        <h3><span>1+</span></h3>
                        <p>Glorious Years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- adapt_area_end  --> */}
    </>
  )
}

export default About;