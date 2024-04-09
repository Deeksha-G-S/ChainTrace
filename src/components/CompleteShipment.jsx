import React, { useState } from "react";
import styled from "styled-components";

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

const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  font-size: 0.9375rem;
  color: #4a5568;
  background-color: #edf2f7;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  outline: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 500;
  color:${({ theme }) => theme.text_primary};
  //color: #fff;
 //background-color: #4a90e2;
 background-color:${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;

const CompleteShipment= ({ completeModal, setCompleteModal, completeShipment }) => {
  const [completeShip, setCompleteShip] = useState({
    recevier: "",
    index: "",
  });

  const changeStatus = async () => {
    completeShipment(completeShip);
  };
  return completeModal ? (
  <Overlay>
  <OverlayBackground onClick={() => setCompleteModal(false)} />
  <ModalContainer>
    <ModalContent>
      <CloseButton onClick={() => setCompleteModal(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </CloseButton>
      <FormContainer>
        <FormTitle>Complete Shipment</FormTitle>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <StyledInput
              type="text"
              placeholder="Receiver"
              value={completeShip.recevier}
              onChange={(e) => setCompleteShip({ ...completeShip, recevier: e.target.value })}
            />
          </div>
          <div>
            <StyledInput
              type="number"
              placeholder="ID"
              value={completeShip.index}
              onChange={(e) => setCompleteShip({ ...completeShip, index: e.target.value })}
            />
          </div>
          <SubmitButton onClick={() => changeStatus()}>Change Status</SubmitButton>
        </form>
      </FormContainer>
    </ModalContent>
  </ModalContainer>
</Overlay>
) : null;
};
export default CompleteShipment;