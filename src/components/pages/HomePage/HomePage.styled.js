import styled from 'styled-components';

import banner from '../../img/rent-a-car.jpg';

export const ArticleHomePage = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${banner});
  /* background: #588588; */
  background-repeat: no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -20;
  position: absolute;
`;


// h1{
//     margin: 0;
//     border: 0;
//     margin: 0 auto;
//     text-align: center;
//     font-family: inherit;
//     color: var(--pr-background-color);
//     text-shadow: 0 0 25px var(--pr-background-color);
    
// }

 export const DivTitle = styled.div`
    font-size: 50px;
    color: var(--pr-background-color);
    text-align: center;
    position: absolute;
    top: -50%;
    bottom: 0;
    left: 0;
    right: 0;
    height: fit-content;
    margin: auto;
    text-shadow: 4px 3px 0 var(--pr-button-background-color);
`;