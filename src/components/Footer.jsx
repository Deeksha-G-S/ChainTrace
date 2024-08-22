import React from "react";
import styled from "styled-components";
import images from "../../Images/index";

const FooterContainer = styled.footer`
background-color: ${({ theme }) => theme.card_light};
//border-top: 1px solid #FFFFFF;
  padding-top: 0.5rem;
 
`;

const Container = styled.div`
 // max-width: 90rem;
  margin: 0 auto;
  padding: 0 1rem;
  //color: #4b5563;
  color: ${({ theme }) => theme.text_primary};
 // display:flex;
  
`;

const LogoImage = styled.img`
border-radius:10%;
  width: 8rem;
  height:6rem;
  margin-left:40rem;
  @media (max-width: 960px) {
    margin-left:20rem;
  }
  @media (max-width: 640) {
    margin-left:6rem;
  }
  `;
  

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  align-items:center;
  justify-content:center;

  &:first-child {
    margin-right: 2rem;
  }

  @media (max-width: 640px) {
    margin-bottom: 2rem;

    &:first-child {
      margin-right: 0;
    }
  }
`;

const FooterHeading = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  
`;

const FooterText = styled.p`
  max-width: 30rem;
  margin-bottom: 1rem;
  margin-left:32.5rem;
  @media (max-width: 960px) {
    margin-left:12rem;
  }
  @media (max-width: 640) {
    margin-left:6rem;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-left:30rem;
  @media (max-width: 960px) {
    margin-left:12rem;
  }
  @media (max-width: 640) {
    margin-left:6rem;
  }
`;

const NavL=styled.div`
//border:1px solid #FFFFFF;
border-radius:8px;
display:flex;
// align-items:center;
//justify-content:space-between;
flex-direction:column;`;

const NavItem = styled.li`
color: ${({ theme }) => theme.text_secondary};
  &:hover {
    color: #6b7280;
  }
`;


const CopyRight = styled.div`
  margin-top: 5rem;
  border-top: 1px solid #FFFFFF;
  padding-top: 2.5rem;
  text-align: center;
  //color: #6b7280;
  color:${({ theme }) => theme.text_secondary};
`;



// Footer component using styled components


const Footer= () => {
  
  return (
    <FooterContainer>
    <Container>
      <ContentWrapper>
        <FooterSection>
          <LogoImage src={images.LogoImg}alt="Logo" />
          <FooterText>
           SUPPLY CHAIN MANAGEMENT IN FMCG USING BLOCKCHAIN 
          </FooterText>
          <FooterText>
          </FooterText>
          <NavList>
           <NavL>
            <NavItem>
              CHAITRA R
            </NavItem>
           </NavL>
           <NavL>
            <NavItem>
              DEEKSHA G SHANBHAG
            </NavItem>
           </NavL>
           <NavL>
            <NavItem>
              NIYATHI V
            </NavItem>
           </NavL>
           <NavL>
            <NavItem>
              RAJESHWARI L JHADHAV
            </NavItem>
           </NavL>
          </NavList>
        </FooterSection>
      </ContentWrapper>
      <CopyRight>© 2024 BATCH  ATRIA INSTITUTE OF TECHNOLOGY</CopyRight>
    </Container>
  </FooterContainer>
);
};
export default Footer;