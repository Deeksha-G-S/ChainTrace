
import React from 'react';
import Typewriter from 'typewriter-effect';
import ParticleComponent from './ParticleComponent';
import BlockImg from '../../Images/img.png';
import styled from 'styled-components';




 const AboutContainer = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
 // max-width:1100;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 2;
`;

 const ParticleStyle=styled.div`

position: absolute;
display: flex;
justify-content: end;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
//max-width: 1360px;
overflow: hidden;
padding: 0 30px;
top: 50%;
left: 50%;
position: absolute;
display: flex;
justify-content: end;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
//max-width: 1360px;
overflow: hidden;
padding: 0 30px;
top: 50%;
left: 50%;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media (max-width: 960px) {
  justify-content: center;
  padding: 0 0px;
}

@media (max-width: 960px) {
  justify-content: center;
  padding: 0 0px;
}
`;





 const AboutInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
 const AboutLeftContainer = styled.div`
  width: 100%;
  height:100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

 const AboutRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

 const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  animation-name:float;
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function:ease-in-out;

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

 const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

 const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

 const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

 const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

const About = () => {
  return (
    <div id="about">
<AboutContainer>
    <ParticleStyle>
<ParticleComponent/>
    </ParticleStyle>
    
    <AboutInnerContainer >
        <AboutLeftContainer id="Left">
            <Title>Supply Chain Management In FMCG Products Using<br /> </Title>
            <TextLoop>
               
                <Span>
                    <Typewriter
                        options={{
                            strings: "BLOCKCHAIN TECHNOLOGY",
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </Span>
            </TextLoop>
            <SubTitle>In the fast-moving consumer goods (FMCG) industry, effective supply chain management is crucial for ensuring product quality, minimizing costs, and meeting consumer demand. Traditional supply chain systems face challenges such as lack of transparency, inefficient tracking, and susceptibility to fraud. Blockchain technology offers a promising solution to address these challenges by providing a decentralized, immutable, and transparent ledger for recording transactions.</SubTitle>
           
           
        </AboutLeftContainer>

        <AboutRightContainer id="Right">

            <Img src={BlockImg} alt="image" />
        </AboutRightContainer>
    </AboutInnerContainer>

</AboutContainer>

</div>
  )
}

export default About;







