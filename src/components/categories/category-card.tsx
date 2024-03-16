import category from "../../assets/sneakers.png";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="rounded-3xl bg-test-bg p-4">
        <img src={category} alt="" className="size-[3.75rem]" />
      </div>
      <p className="text-center text-sm font-medium">Футболки</p>
    </div>
  );
};

export default CategoryCard;
