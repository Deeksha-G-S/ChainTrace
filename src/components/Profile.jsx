import React, { useState, useEffect } from "react"
import styled from "styled-components";
import images from "../../Images/index";
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow-y: auto;
`;

const OverlayBackground = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 32rem;
  padding: 1rem;
  //background-color: #fff;
 background-color:${({ theme }) => theme.bg};
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  //color: #718096;
  color:${({ theme }) => theme.text_primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  margin-bottom: 0.75rem;
  border-radius: 50%;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const Title = styled.h5`
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: 500;
  //color: #4a5568;
  color:${({ theme }) => theme.text_primary};
`;

const UserName = styled.span`
  font-size: 0.875rem;
  //color: #4a5568;
  color:${({ theme }) => theme.text_secondary};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const InfoLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  //color: #000;
  color:${({ theme }) => theme.text_primary};
  border-radius: 0.375rem;
  border: 2px solid #854CE6;
  text-decoration: none;
`;



const Profile= ({
  openProfile,
  setOpenProfile,
  currentUser,
  getShipmentsCount,
}) => {
  const [count, setCount] = useState();
  useEffect(() => {
    const getShipmentsData = getShipmentsCount();

    return async () => {
      const allData = await getShipmentsData;
      setCount(allData);
    };
  }, []);
  return openProfile ? (

  <Overlay>
      <OverlayBackground onClick={() => setOpenProfile(false)} />
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={() => setOpenProfile(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </CloseButton>
          <InfoContainer>
            <ProfileImage src={images.avatar} alt="Bonnie image" />
            <Title>Welcome Trader</Title>
            <UserName>{currentUser}</UserName>
            <div>
              <InfoLink href="#">Balance: 345 ETH</InfoLink>
              <InfoLink href="#">Total Shipment: {count}</InfoLink>
            </div>
          </InfoContainer>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  ) : null;

};
export default Profile;
