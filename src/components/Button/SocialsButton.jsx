const SocialsButton = ({ children, link }) => {
  return (
    <a
      href={link}
      className="btn footer--socialButton text-white shadow rounded-circle border-0 d-flex justify-content-center align-items-center p-2 "
    >
      {children}
    </a>
  );
};

export default SocialsButton;
