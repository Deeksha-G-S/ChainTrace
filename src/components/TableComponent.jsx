import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
background-color: ${({ theme }) => theme.card_light};
  max-width: 90rem; /* Equivalent to max-w-screen-xl */
  margin: 0 auto;
  padding: 0 1rem; /* Equivalent to px-4 */

  @media (min-width: 768px) {
    padding: 0 2rem; /* Equivalent to md:px-8 */
  }
`;

const HeadingContainer = styled.div`
//card_lightground-color: ${({ theme }) => theme.card_light};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;


const HeadingText = styled.h3`
 // color: #4b5563; /* Equivalent to text-gray-800 */
 color:${({ theme }) => theme.text_primary};
  font-size: 1.5rem; /* Equivalent to text-xl */
  font-weight: bold;
  margin-bottom: 0.5rem; /* Equivalent to mt-2 */
  
  @media (min-width: 640px) {
    font-size: 1.875rem; /* Equivalent to sm:text-2xl */
  }
`;


const DescriptionText = styled.p`
  //color: #4b5563; /* Equivalent to text-gray-600 */
  color:${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  margin-top: 0.5rem; /* Equivalent to mt-2 */
`;


const ButtonContainer = styled.div`

  margin-top: 1rem; /* Equivalent to mt-3 */
  
  @media (min-width: 768px) {
    margin-top: 0; /* Equivalent to md:mt-0 */
    margin-left: 1rem; /* Equivalent to md:ml-0 */
  }
`;


const Button = styled.p`
  display: inline-block;
  padding: 0.5rem 1rem;
  //background-color: #4b5563; /* Equivalent to bg-gray-800 */
  background-color:${({ theme }) => theme.primary};
  color: #ffffff; /* Equivalent to text-white */
  font-size: 1rem;
  font-weight: medium;
  border-radius: 0.375rem; /* Equivalent to rounded-lg */
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #374151; /* Equivalent to hover:bg-gray-700 */
  }
`;


const TableContainer = styled.div`
background-color: ${({ theme }) => theme.card_lights};
  margin-top: 3rem; /* Equivalent to mt-12 */
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* Equivalent to shadow-sm */
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  overflow-x: auto;
`;


const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  card_lightsground-color: ${({ theme }) => theme.card_light};
`;


const TableHead = styled.thead`
background-color: ${({ theme }) => theme.card_light};
  background-color: #f9fafb; /* Equivalent to bg-gray-50 */
  color: #4b5563; /* Equivalent to text-gray-600 */
  font-weight: medium;
  border-bottom: 1px solid #e5e7eb; /* Equivalent to border-b */
`;


const TableRow = styled.tr`
background-color: ${({ theme }) => theme.card_light};
  border-bottom: 1px solid #e5e7eb; /* Equivalent to divide-y */
`;


const TableHeaderCell = styled.th`
color:${({ theme }) => theme.text_primary};
  padding: 0.75rem 1.5rem; /* Equivalent to py-3 px-6 */
`;


const TableBody = styled.tbody`
 // color: #4b5563; /* Equivalent to text-gray-600 */
 color:${({ theme }) => theme.text_primary};
`;


const TableDataCell = styled.td`
  padding: 1rem 1.5rem; /* Equivalent to py-4 px-6 */
`;




const TableComponent= ({ setCreateShipmentModel, allShipmentsdata }) => {
  const converTime = (time) => {
    const newTime = new Date(time);
    const dataTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);

    return dataTime;
  };

  console.log(allShipmentsdata);

  return (

    <Container>
    <HeadingContainer>
      <div>
        <HeadingText>Create Tracking</HeadingText>
        <DescriptionText>
        With Create Tracking, users can seamlessly initiate and manage tracking processes, fostering accountability, integrity, and trust within their operations.
        </DescriptionText>
      </div>
      <ButtonContainer>
        <Button onClick={() => setCreateShipmentModel(true)}>Add Tracking</Button>
      </ButtonContainer>
    </HeadingContainer>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Sender</TableHeaderCell>
            <TableHeaderCell>Receiver</TableHeaderCell>
            <TableHeaderCell>Pickup Time</TableHeaderCell>
            <TableHeaderCell>Distance</TableHeaderCell>
            <TableHeaderCell>Price</TableHeaderCell>
            <TableHeaderCell>Delivery Time</TableHeaderCell>
            <TableHeaderCell>Paid</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allShipmentsdata?.map((shipment, idx) => (
            <TableRow key={idx}>
              <TableDataCell>{shipment.sender.slice(0, 15)}...</TableDataCell>
              <TableDataCell>{shipment.receiver.slice(0, 15)}...</TableDataCell>
              <TableDataCell>{converTime(shipment.pickupTime)}</TableDataCell>
              <TableDataCell>{shipment.distance} Km</TableDataCell>
              <TableDataCell>{shipment.price}</TableDataCell>
              <TableDataCell>{shipment.deliveryTime}</TableDataCell>
              <TableDataCell>{shipment.isPaid ? " Completed" : "Not Complete"}</TableDataCell>
              <TableDataCell>
                {shipment.status === 0
                  ? "Pending"
                  : shipment.status === 1
                  ? "IN_TRANSIT"
                  : "Delivered"}
              </TableDataCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
  );
};
export default TableComponent;

