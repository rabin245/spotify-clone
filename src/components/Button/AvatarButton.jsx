import { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import useAuth from "../../hooks/useAuth";

const AvatarButton = ({ children }) => {
  const { logOut } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown isOpen={isOpen} toggle={() => setIsOpen((p) => !p)}>
      <DropdownToggle className="rounded-circle d-flex align-items-center justify-content-center bg-white p-0 m-0">
        {children}
      </DropdownToggle>
      <DropdownMenu dark={true}>
        <DropdownItem header>Profile</DropdownItem>
        <DropdownItem onClick={logOut}>Log out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarButton;
