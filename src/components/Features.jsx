import React from 'react';
import styled from 'styled-components';
import { useState } from 'react'
import FeatureCard from './Cards/FeatureCards'
import images from "../../Images/index";

 const Container = styled.div`
   background-color: ${({ theme }) => theme.card_light};
  // background-color:#1A001A;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
   
`;

 const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1100px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

 const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

 const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;



const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    
`;


const features = [
  {
    id: 1,
    title: "Get Shipment",

    description:
      "This functionality allows users to retrieve detailed information about a specific shipment in the Fast-Moving Consumer Goods (FMCG) supply chain using blockchain technology. Users can access real-time data, tracking the movement and status of their products.",
    image:images.getShipment,
  },
  {
    id: 2,
    title: "Complete Shipment",

    description:
      "This functionality enables users to mark a shipment as completed within the FMCG supply chain blockchain system. It signifies that the goods have reached their destination or a specific milestone, providing transparency and accountability in the supply chain process.",
    image:images.completeShipment,
  },
  {
    id: 3,
    title: "Start Shipment",

    description:
      "This functionality initiates the shipment process within the FMCG supply chain. Users can input essential details, and the blockchain technology records and verifies each step, ensuring a reliable and unforgeable history of the shipment's origin and commencement.",
    image:images.startShipment,
  },
  {
    id: 4,
    title: "User Profile",

    description:
      "The user profile functionality allows individuals or entities involved in the FMCG supply chain to maintain personalized information within the blockchain system. It ensures secure and efficient management of user data, enhancing the overall accountability and transparency of the supply chain.",
    image:images.userProfile,
  },
 
];


const Features = () => {
  return (
    <div>
       <Container>
      <Wrapper>
        <Title>Features</Title>
        <Desc>
        These features have been implemented to achieve traceability and transparency within the supply chain management system. </Desc>

        <CardContainer>
          {features
            .map((feature) => (
              <FeatureCard feature={feature}/>
            ))}

        </CardContainer>
      </Wrapper>
    </Container>
    </div>
  )
}

export default Features;
