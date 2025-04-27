export default function Item({ ite, onDeleteItem }) {
  return (
    <li>
      <span style={ite.packed ? { textDecoration: "line-through" } : {}}>
        {ite.quantity} {ite.description}
      </span>
      <button onClick={() => onDeleteItem(ite.id)}>❌</button>
    </li>
  );
}
