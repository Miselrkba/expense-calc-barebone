import React from "react";
import { Item } from "./Item";

export const ExpenseList = ({
  expenses,
  handleEdit,
  handleDelete,
  clearItems,
}) => {
  return (
      <>
    <ul>
      {expenses.map((expense) => {
        return (
          <Item
            key={expense.id}
            expense={expense}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </ul>
    {expenses.length > 0 && (<button onClick={clearItems}>clear expenses</button>)}
    </>
  );
};
