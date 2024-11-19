import UserInput from "./UserInput";

export default function Calculator({inputs, onChange}) {

  return (
    <div id="user-input">
      <div className="input-group">
        {inputs.map(([label, value], indexInput) => (
          <UserInput
            key={indexInput}
            label={label}
            value={value}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

