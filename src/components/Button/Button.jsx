import { Button } from "reactstrap";

export default function SimpleButton({ type = "nobg", children }) {
  const buttonType =
    type === "normal"
      ? "bg-black text-white"
      : "bg-white text-black border border-white";

  return (
    <Button
      className={`nav--button rounded-5 fw-semibold fs-6 py-2 px-4 d-flex align-items-center justify-content-center 
                  ${buttonType}`}
    >
      {children}
    </Button>
  );
}
