import React, { useState, useEffect } from "react";
import CustomerList from "./components/CustomerList.tsx";
import CustomerDetails from "./components/CustomerDetails.tsx";
import { Customer } from "./types/Customer";
import useCustomers from "./hooks/useCustomers.ts";

import "./App.css";

const App: React.FC = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );
  const customers = useCustomers();

  // Set the first customer as the default selected customer
  useEffect(() => {
    if (customers.length > 0) {
      setSelectedCustomer(customers[0]);
    }
  }, [customers]);

  return (
    <div className="app bg">
      <div className="heading">
        <h1>Profile View</h1>
      </div>

      <div className="content">
        <CustomerList
          customers={customers}
          selectedCustomer={selectedCustomer}
          onSelectCustomer={setSelectedCustomer}
        />

        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
      </div>
    </div>
  );
};

export default App;
