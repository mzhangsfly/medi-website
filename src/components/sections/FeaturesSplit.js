import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Our Mission',
    paragraph: 'Alzheimer’s disease consistently ranks in the top 10 most common causes of death, and is estimated to increase as the world ages and age-span increases. After witnessing first-hand the devastating effects of Alzheimer’s to both patients and their families, we aim to aid in the fight against dementia through early detection via computer vision. '
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Using neural networks
                  </div>
                <h3 className="mt-0 mb-12">
                  Computer vision
                  </h3>
                <p className="m-0">
                When you provide us with a medical scan such as an MRI, Medi adds it to your existing database. Medi then uses computer vision algorithms to outline changes to past MRI’s you’ve provided as well as a comparison to control MRIs which fit with your general case (i.e., a control MRI of someone of the same age and gender). We currently employ convolutional neural networks. Note that Medi does not aim to replace medical specialists: instead, Medi aims to provide additional information that can aid in diagnosing Alzheimer’s earlier.  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/computer-vision.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Web 3.0
                  </div>
                <h3 className="mt-0 mb-12">
                  Decentralized database
                  </h3>
                <p className="m-0">
                We view the privacy and security of data as key priorities. We hope that patients feel secure in providing us with sensitive medical data, and to achieve such trust, we employ a decentralized database. And if you’re wondering, the “decentralized database” we refer to is the same one that blockchains are known for employing :-). 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/decentralized.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  being human
                  </div>
                <h3 className="mt-0 mb-12">
                  Support
                  </h3>
                <p className="m-0">
                In tandem with developing algorithms, we have been working on creating a network between students and patients to instigate greater connection within our community and provide emotional support for patients. We believe that supporting patients in a multitude of ways is key to recovery, and hope to preserve this more "human" aspect of medicine alive despite our virtual setting.                   </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/support.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;