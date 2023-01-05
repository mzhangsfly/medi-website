import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplitAbout from '../components/sections/FeaturesSplitAbout';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';

const About = () => {

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
     
      <FeaturesSplitAbout invertMobile imageFill />
    </>
  );
}

export default About;