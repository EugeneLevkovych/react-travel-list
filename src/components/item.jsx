export default function Item({ ite }) {
  return (
    <li>
      <span style={ite.packed ? { textDecoration: "line-through" } : {}}>
        {ite.quantity} {ite.description}
      </span>
      <button>❌</button>
    </li>
  );
}
