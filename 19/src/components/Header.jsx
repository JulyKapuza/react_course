import Button from "./UI/Button";
const Header = () => {
  return (
    <header className="flex justify-between items-center py-[3rem] px-[10%]">
      <div className="flex gap-[1rem] items-center">
        <img
          src="./logo.jpg"
          alt="Logo"
          className="w-[4rem] h-[4rem] fit-contain rounded-full border-2 border-[#ffc404]"
        />
        <h1>Food For You</h1>
      </div>
      <nav>
        <Button textOnly>Card (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
