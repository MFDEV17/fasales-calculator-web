import CategoryCard from "./category-card.tsx";

const CategoriesList = () => {
  return (
    <div className="grid grid-cols-2 place-content-around gap-x-4 gap-y-6 lg:grid-cols-3">
      {Array.from({ length: 10 }).map(() => (
        <CategoryCard />
      ))}
    </div>
  );
};

export default CategoriesList;
