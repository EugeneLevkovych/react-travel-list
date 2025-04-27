import Item from "./Item";

export default function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item key={i.id} ite={i} />
        ))}
      </ul>
    </div>
  );
}
