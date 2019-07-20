import React from 'react'
import makeCarousel from 'react-reveal/makeCarousel'
import styled, { css } from 'styled-components';

const width = '100%';
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
//   padding:4vw;
  width: ${width};
  height: 25vw;
  @media and all (min-width:600px){
      height:20vw;
  }
  margin-top:3vw;
  box-sizing:border-box;
`;
const Arrow = styled.div`
  z-index: 100;
  line-height: 100;
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
  position:absolute;
  right:50;
  left:50;
  bottom:0
`;
const CarouselUI = ({ total,position, handleClick, children }) => (
  <Container>
      {children}
      <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
      <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
      <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
  </Container>
);
const Carousel = makeCarousel(CarouselUI);

export default Carousel