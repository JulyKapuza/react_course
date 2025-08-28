const Button = ({ children, textOnly, className, ...props }) => {
  let cssClasses = textOnly
    ? "cursor-pointer font-inherit bg-transparent border-none text-[#ffc404] hover:text-[#ffab04] active:text-[#ffab04]  "
    : "cursor-pointer bg-[#ffc404] border border-[#ffc404] text-[#1f1a09] py-[0.5rem] px-[1.5rem] rounded-[4px] hover:bg-[#ffab04] hover:text-[#1f1a09] hover:border-[#ffab04] active:bg-[#ffab04] active:text-[#1f1a09] active:border-[#ffab04]";

  cssClasses += " " + className;

  return (
    <button {...props} className={cssClasses}>
      {children}
    </button>
  );
};

export default Button;
