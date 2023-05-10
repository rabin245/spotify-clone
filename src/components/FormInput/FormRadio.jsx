import { FormGroup, Input, Label } from "reactstrap";

const FormRadio = ({ id, name, label, value, checked, onChange }) => {
  return (
    <FormGroup check className="me-4">
      <Input
        id={id}
        name={name}
        type="radio"
        className="text-white bg-black border-secondary login-social-button"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <Label check for={name}>
        {label}
      </Label>
    </FormGroup>
  );
};

export default FormRadio;
