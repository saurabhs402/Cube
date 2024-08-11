import React, { useCallback } from 'react';
import { Customer } from '../types/Customer.ts';

interface Props {
  customers: Customer[];
  selectedCustomer: Customer | null;
  onSelectCustomer: (customer: Customer) => void;
}

const CustomerList: React.FC<Props> = React.memo(({ customers, selectedCustomer, onSelectCustomer }) => {
  const handleSelectCustomer = useCallback((customer: Customer) => {
    onSelectCustomer(customer);
  }, [onSelectCustomer]);

  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      {customers.map((customer) => (
        <div
          key={customer.id}
          className={`customer-item ${selectedCustomer?.id === customer.id ? 'selected' : ''}`}
          onClick={() => handleSelectCustomer(customer)}
        >
          <h4>{customer.name}</h4>
          <p>{customer.title}</p>
        </div>
      ))}
    </div>
  );
});

export default CustomerList;