import { useState, useEffect } from 'react';
import { Customer } from '../types/Customer';

const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // Fetch customers from an API or generate mock data
    const mockCustomers: Customer[] = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      name: `Customer ${i + 1}`,
      title: `Title ${i + 1}`,
      address: `Address ${i + 1}`,
    }));

    setCustomers(mockCustomers);
  }, []);

  return customers;
};

export default useCustomers;