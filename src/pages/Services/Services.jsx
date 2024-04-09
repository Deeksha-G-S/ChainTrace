import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import TableComponent from "../../components/TableComponent";
import Form from "../../components/Form";
import Service from "../../components/Service";
import Profile from "../../components/Profile";
import GetShipment from "../../components/GetShipment";
import CompleteShipment from "../../components/CompleteShipment";
import StartShipment from "../../components/StartShipment";
import Navigation from "../../components/Navigation";
import { TrackingProvider } from "../../../conetxt/track";
import { TrackingContext } from  "../../../conetxt/track";
import styled from  'styled-components';

const MainContainer= styled.div`
background-color:${({ theme }) => theme.card_light};
`;



const Services=()=>{
    const {
        currentUser,
        createShipment,
        getAllShipment,
        completeShipment,
        getShipment,
        startShipment,
        getShipmentsCount,
      } = useContext(TrackingContext);
      
  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);
  
  
  const [allShipmentsdata, setallShipmentsdata] = useState();
  useEffect(() => {
    const getCampaignsData = getAllShipment();

    return async () => {
      const allData = await getCampaignsData;
      setallShipmentsdata(allData);
    };
  }, []);
    
    return(
        <MainContainer>
            <TrackingProvider>
             <Navigation/>
            <Service
        setOpenProfile={setOpenProfile}
        setCompleteModal={setCompleteModal}
        setGetModel={setGetModel}
        setStartModal={setStartModal}
      />

      <TableComponent
        setCreateShipmentModel={setCreateShipmentModel}
        allShipmentsdata={allShipmentsdata}
      />
      <Form
        createShipmentModel={createShipmentModel}
        createShipment={createShipment}
        setCreateShipmentModel={setCreateShipmentModel}
      />
      <Profile
        openProfile={openProfile}
        setOpenProfile={setOpenProfile}
        currentUser={currentUser}
        getShipmentsCount={getShipmentsCount}
      />
      <CompleteShipment
        completeModal={completeModal}
        setCompleteModal={setCompleteModal}
        completeShipment={completeShipment}
      />
      <GetShipment
        getModel={getModel}
        setGetModel={setGetModel}
        getShipment={getShipment}
      />
      <StartShipment
        startModal={startModal}
        setStartModal={setStartModal}
        startShipment={startShipment}
      />


      <Footer/>
      </TrackingProvider>
        </MainContainer>
        
        )
    }
export default Services;

