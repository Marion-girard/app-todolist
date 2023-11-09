import React from "react";

export default function TodoList(props) {
  let { items } = props;
  return (
    <div>
      {items.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}
