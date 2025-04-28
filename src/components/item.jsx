export default function Item({ ite, onDeleteItem, onToggleItem }) {
  
  return (
    <li>
      <input type="checkbox" value={ite.packed} onChange={()=>{onToggleItem(ite.id)}}/>
      <span style={ite.packed ? { textDecoration: "line-through" } : {}}>
        {ite.quantity} {ite.description}
      </span>
      <button onClick={() => onDeleteItem(ite.id)}>❌</button>
    </li>
  );
}

