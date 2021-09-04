import { Button, Col, Image, Row } from 'antd';

import React from 'react';

// import images
const hero = require('../../images/hero.jpg');
const tile1 = require('../../images/washington-600.jpg');
const tile1z = require('../../images/washington-z-600.jpg');
const tile2 = require('../../images/adams-600.jpg');
const tile2z = require('../../images/adams-z-600.jpg');
const tile3 = require('../../images/jefferson-600.jpg');
const tile3z = require('../../images/jefferson-z-600.jpg');
const undead = require('../../images/hero-undead.jpg');

export const Hero = () => {
  return (
    <>
      <div className="dpc-hero">
        <div className="inner">
          <div className="message text-center">
            <h2>Welcome Free People</h2>
            <p>
              DPC is an art project celebrating freedom of expression by
              immortalizing our forefathers on the blockchain.
            </p>
            <Button type="primary">Shop Now</Button>
          </div>
        </div>
        <img className="hero" src={hero.default.src} />
        <img className="undead" src={undead.default.src} />
      </div>
      <Row className="container-width tiles">
        <Col span={8}>
          <div className="zombie-overlay">
            <img className="" src={tile1.default.src} />
            <img className="" src={tile1z.default.src} />
            <span>Washington</span>
          </div>
        </Col>
        <Col span={8}>
          <div className="zombie-overlay">
            <img className="" src={tile2.default.src} />
            <img className="" src={tile2z.default.src} />
            <span>Adams</span>
          </div>
        </Col>
        <Col span={8}>
          <div className="zombie-overlay">
            <img className="" src={tile3.default.src} />
            <img className="" src={tile3z.default.src} /> <span>Jefferson</span>
          </div>
        </Col>
      </Row>
    </>
  );
};
