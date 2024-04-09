import React, { useState } from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  overflow-y: auto;
`;

const StyledOverlayBackground = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const StyledContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
`;

const StyledModal = styled.div`
  position: relative;
  width: 100%;
  max-width: 32rem;
  padding: 1rem;
  //background-color: #fff;
  background-color:${({ theme }) => theme.bg};
  border-radius: 0.5rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  //color: #4a5568;
  color: ${({ theme }) => theme.text_primary};
`;

const FormContainer = styled.div`
  max-width: 24rem;
  margin: 0 auto;
`;

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  //background-color: transparent;
  color:${({ theme }) => theme.text_primary};
  border: none;
  cursor: pointer;
`;

const StyledForm = styled.form`
  margin-top: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    border-color: #4c51bf;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.75rem;
 // background-color: #4c51bf;
 background-color:${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const StyledDetailsContainer = styled.div`
  margin-top: 1rem;
`;

const StyledDetail = styled.p`
color: ${({ theme }) => theme.text_primary} ;
  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const GetShipment= ({ getModel, setGetModel, getShipment }) => {
  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getshipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
    console.log(getData);
  };
  console.log(singleShipmentData);

  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  return getModel ? (
  
  <StyledOverlay>
  <StyledOverlayBackground onClick={() => setGetModel(false)} />
  <StyledContentContainer>
    <StyledModal>
      <StyledCloseButton onClick={() => setGetModel(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mx-auto"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </StyledCloseButton>
      <FormContainer >
        <FormTitle >
          Product Tracking Details
        </FormTitle>
        <StyledForm onSubmit={(e) => e.preventDefault()}>
          <div >
            <StyledInput
              type="number"
              placeholder="Id"
              onChange={(e) => setIndex(e.target.value)}
            />
          </div>
          <StyledButton onClick={() => getshipmentData()}>
            Get details
          </StyledButton>
        </StyledForm>
        {singleShipmentData == undefined ? (
          ""
        ) : (
          <StyledDetailsContainer>
            <StyledDetail>
              Sender: {singleShipmentData.sender.slice(0, 25)}...
            </StyledDetail>
            <StyledDetail>
              Receiver: {singleShipmentData.receiver.slice(0, 25)}...
            </StyledDetail>
            <StyledDetail>
              PickupTime: {converTime(singleShipmentData.pickupTime)}
            </StyledDetail>
            <StyledDetail>
              DeliveryTime: {converTime(singleShipmentData.deliveryTime)}
            </StyledDetail>
            <StyledDetail>Distance: {singleShipmentData.distance}</StyledDetail>
            <StyledDetail>Price: {singleShipmentData.price}</StyledDetail>
            <StyledDetail>Status: {singleShipmentData.status}</StyledDetail>
            <StyledDetail>
              Paid: {singleShipmentData.isPaid ? "Complete" : "Not Complete"}
            </StyledDetail>
          </StyledDetailsContainer>
        )}
      </FormContainer>
    </StyledModal>
  </StyledContentContainer>
</StyledOverlay>
) : (
""
);
};
export default GetShipment;
