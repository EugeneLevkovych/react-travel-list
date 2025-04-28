import Item from "./item";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((i) => (
          <Item ite={i} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

