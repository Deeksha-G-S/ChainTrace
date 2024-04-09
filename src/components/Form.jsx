import React, { useState } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
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

const StyledModalContainer = styled.div`
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
 // background-color: #fff;
 background-color:${({ theme }) => theme.bg};
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  color: #718096;
  color:${({ theme }) => theme.text_primary};
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const FormTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  //color: #4a5568;
  color:${({ theme }) => theme.text_primary};
  margin-bottom: 0.75rem;
`;

const FormDescription = styled.p`
  font-size: 0.9375rem;
  color: #4a5568;
  color:${({ theme }) => theme.text_secondary};
  margin-bottom: 1.5rem;
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
  color: #fff;
 // background-color: #4a90e2;
 background-color:${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;


const Form= ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment,
}) => {
  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("Wrong creating item");
    }
  };
  return createShipmentModel ? (
 
  <StyledOverlay>
  <OverlayBackground onClick={() => setCreateShipmentModel(false)} />
  <StyledModalContainer>
    <ModalContent>
      <ModalCloseButton onClick={() => setCreateShipmentModel(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </ModalCloseButton>
      <div>
        <FormTitle>Track product, Create Shipment</FormTitle>
        <FormDescription>
        Enter details to create shipment.
        </FormDescription>
        <form onSubmit={(e) => e.preventDefault()}>
          <StyledInput
            type="text"
            placeholder="receiver"
            value={shipment.receiver}
            onChange={(e) => setShipment({ ...shipment, receiver: e.target.value })}
          />
          <StyledInput
            type="date"
            placeholder="pickupTime"
            value={shipment.pickupTime}
            onChange={(e) => setShipment({ ...shipment, pickupTime: e.target.value })}
          />
          <StyledInput
            type="text"
            placeholder="distance"
            value={shipment.distance}
            onChange={(e) => setShipment({ ...shipment, distance: e.target.value })}
          />
          <StyledInput
            type="text"
            placeholder="price"
            value={shipment.price}
            onChange={(e) => setShipment({ ...shipment, price: e.target.value })}
          />
          <SubmitButton onClick={() => createItem()}>
            Create Shipment
          </SubmitButton>
        </form>
      </div>
    </ModalContent>
  </StyledModalContainer>
</StyledOverlay>
) : null;

};
export default Form;
