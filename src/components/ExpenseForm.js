import React from "react";

export const ExpenseForm = ({
  charge,
  amount,
  edit,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="charge">charge</label>
      <input
        type="text"
        id="charge"
        name="charge"
        placeholder="e.g. rent"
        value={charge}
        onChange={handleCharge}
      />
      <label htmlFor="amount">amount</label>
      <input
        type="number"
        name="amount"
        id="amount"
        placeholder="e.g. 100"
        value={amount}
        onChange={handleAmount}
      />
      <button type="submit">{edit ? "edit" : "submit"}</button>
    </form>
  );
};
