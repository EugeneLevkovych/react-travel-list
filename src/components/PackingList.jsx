import Item from "./item";

export default function PackingList({ items, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item ite={i} onDeleteItem={onDeleteItem} key={i.id} />
        ))}
      </ul>
    </div>
  );
}
//test
