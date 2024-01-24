import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export default function FormInput({
  children,
  label,
  name,
  type = "text",
  placeholder,
  formFeedback,
  value,
  onChange,
  invalid,
}) {
  return (
    <FormGroup className="mt-3">
      <Label className="fw-semibold">{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        className="authFormInput text-white bg-black border-secondary shadow"
        value={value}
        onChange={onChange}
        invalid={invalid}
      />
      {children}
      <FormFeedback>{formFeedback}</FormFeedback>
    </FormGroup>
  );
}
