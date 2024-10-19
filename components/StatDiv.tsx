import Icon from "./Icon";

export default function StatDiv({ title, value, color = "" }) {
  return (
    <div className="statDiv">
      <span>{title}</span>
      <p className={`${color}`}>{value}</p>
      <i>
        <Icon i={title} />
      </i>
    </div>
  );
}
