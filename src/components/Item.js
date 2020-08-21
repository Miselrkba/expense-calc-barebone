import React from "react";

export const Item = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <>
      <span>{charge}- </span>
      <span>${amount}</span>
      <button onClick={() => handleEdit(id)}>edit</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </>
  );
};
