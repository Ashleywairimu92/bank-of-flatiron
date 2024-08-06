import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({ date: "", description: "", category: "", amount: ""});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addTransaction(formData);
    setFormData({  date: "", description: "", category: "", amount: ""}); 
  }

  return (
    <form onSubmit={handleSubmit}>
          <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
    
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default AddTransactionForm;
