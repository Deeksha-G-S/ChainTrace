import React, { useState } from "react";
import styled from "styled-components";
import Str1 from "./SVG/Str1";

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
  // background-color:${({ theme }) => theme.bg}
  // border-radius: 0.375rem;
  // box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
  background-color:${({ theme }) => theme.bg};
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
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
  color:${({ theme }) => theme.text_primary};
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
  //background-color: #4a90e2;
  background-color:${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
`;



const StartShipment= ({ startModal, setStartModal, startShipment }) => {
  const [getProduct, setGetProduct] = useState({
    reveiver: "",
    index: "",
  });

  const startShipping = () => {
    startShipment(getProduct);
  };
  return startModal ? (

  <Overlay>
      <OverlayBackground onClick={() => setStartModal(false)} />
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={() => setStartModal(false)}>
            <Str1 />
          </CloseButton>
          <FormContainer>
            <FormTitle>Start The Shipping</FormTitle>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <StyledInput
                  type="text"
                  placeholder="Receiver"
                  value={getProduct.receiver}
                  onChange={(e) =>
                    setGetProduct({ ...getProduct, receiver: e.target.value })
                  }
                />
              </div>
              <div>
                <StyledInput
                  type="text"
                  placeholder="ID"
                  value={getProduct.index}
                  onChange={(e) =>
                    setGetProduct({ ...getProduct, index: e.target.value })
                  }
                />
              </div>
              <SubmitButton onClick={() => startShipping()}>
                Get details
              </SubmitButton>
            </form>
          </FormContainer>
        </ModalContent>
      </ModalContainer>
    </Overlay>
  ) : null;
};
export default StartShipment;

