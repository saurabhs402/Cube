import React from 'react';
import { Customer } from '../types/Customer.ts';
import PhotoGrid from './PhotoGrid.tsx';

interface Props {
  customer: Customer;
}

const CustomerDetails: React.FC<Props> = React.memo(({ customer }) => {
  return (
    <div className="customer-details">
        <div className="customer-info">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
      </div>
      <PhotoGrid />
    </div>
  );
});

export default CustomerDetails;