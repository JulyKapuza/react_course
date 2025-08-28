import { currencyFormatter } from "../utils/formating";
import Button from "./UI/Button";

const MealItem = ({ name, image, price, description }) => {
  return (
    <li className="bg-[#1d1a16] rounded-[1rem] overflow-hidden text-center shadow-[0_1px_6px_rgba(0, 0, 0, 0.3)]  ">
      <article className="h-full flex flex-col justify-between">
        <img
          className="w-full h-[20rem] object-cover"
          src={`http://localhost:3000/${image}`}
          alt={name}
        />
        <div>
          <h3 className="text-[1.5rem] font-bold my-[0.75rem]">{name}</h3>
          <p className="inline-block bg-[#312c1d] text-[#ffc404] text-[0.9rem] font-bold py-[0.5rem] px-[2rem] m-[0] rounded-[4px]">
            {currencyFormatter.format(price)}
          </p>
          <p className="m-[1rem]">{description}</p>
        </div>
        <p>
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
