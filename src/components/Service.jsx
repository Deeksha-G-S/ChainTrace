import images from "../../Images/index";
import React from 'react';
import styled from 'styled-components';
const StyledSection = styled.section`
 // padding-top: 0;
 // padding-bottom: 3.5rem; /* Equivalent to pb-14 */
`;

const Container = styled.div`

background-color: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
 max-width:90rem;
// max-height:1500px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 2;
`;

const Details=styled.div`
//margin-top:3rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1); /* Equivalent to shadow-md */
  border-radius: 1rem; /* Equivalent to rounded-xl */
`;

 const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top:auto;
  gap: 30px;
  justify-content: center;
`

 const List = styled.div`
  width: 100%;
  max-width: 600px;
  background: ${({ theme }) => theme.card_light};
  //border: 0.1px solid #90e0ef;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 500px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }


`

const Service= ({
  setOpenProfile,
  setCompleteModal,
  setGetModel,
  setStartModal,
}) => {
  const team = [
    {
      avatar: images.completeShipment,
    },
    {
      avatar: images.getShipment,
    },
    {
      avatar: images.startShipment,
    },
    {
      avatar: images.userProfile,
    },

  ];

  const openModelBox = (text) => {
    if (text === 1) {
      setCompleteModal(true);
    } else if (text === 2) {
      setGetModel(true);
    } else if (text === 3) {
      setStartModal(true);
    } else if (text === 4) {
      setOpenProfile(true);
    } 
    
  };
  return (
  
<StyledSection>
<Container>
  <Details>
    <MainContainer>
      {team.map((item, i) => (
        <List key={i}>
          <ImageContainer onClick={() => openModelBox(i + 1)}>
            <Image src={item.avatar} alt="" />
          </ImageContainer>
        </List>
      ))}
    </MainContainer>
  </Details>
</Container>
</StyledSection>
);
};
export default Service;