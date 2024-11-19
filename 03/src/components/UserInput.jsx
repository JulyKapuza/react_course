export default function UserInput({ label, value, onChange }) {
  return (
    <p>
      <label htmlFor={label}>{label}</label>
      <input id={label} type="number" onChange={onChange} value={value} required  />
    </p>
  );
}
