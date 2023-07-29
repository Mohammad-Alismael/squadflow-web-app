import React from "react";
type PropsType = {
  label: string;
  value: string;
  type: string;
  placeholder: string;
  handleChange: {
    (e: React.ChangeEvent<any>): void;
    <T_1 = string | React.ChangeEvent<any>>(
      field: T_1
    ): T_1 extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  handleBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  error: string | undefined;
};
function Textfield({
  label,
  value,
  type = "text",
  placeholder = "John Doe",
  handleChange,
  handleBlur,
  error,
}: PropsType) {
  return (
    <div className="">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={label}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}

export default Textfield;
