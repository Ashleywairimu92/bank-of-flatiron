import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [info, handleItems] = useState([]);
  const [search, handlesearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(res => res.json())
      .then(data => handleItems(data));
  }, []);

  function searchchange(event) {
    handlesearch(event.target.value);
  }

  const filteritems = info.filter(item => {
    if (item.category.toLowerCase().includes(search.toLowerCase())) {
      return true;
    } else if (search === "") {
      return true;
    }
    return false;
  });

  function addTransaction(data) {
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        handleItems(prevState => [...prevState, data]);
      }
    })
  }

  return (
    <div>
      <Search searchchange={searchchange} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList info={filteritems} />
    </div>
  );
}

export default AccountContainer;
