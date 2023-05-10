import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

export default function FormInput({
  children,
  label,
  name,
  type = "text",
  placeholder,
  formFeedback,
}) {
  return (
    <FormGroup className="mt-3">
      <Label className="fw-semibold">{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        className="authFormInput text-white bg-black border-secondary shadow"
      />
      {children}
      <FormFeedback>{formFeedback}</FormFeedback>
    </FormGroup>
  );
}
