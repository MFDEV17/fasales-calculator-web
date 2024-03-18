import { useCategoryData } from "../../service/cms/queries.ts";
import CategoryCard from "../categories/category-card.tsx";
import { DialogProps } from "../../service/hooks/use-dialog.tsx";

const StepCategoryChoice = (dialogProps: DialogProps) => {
  const { categories, isLoading } = useCategoryData();

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="relative bg-test-secondary px-3 py-5">
      <div className="grid grid-cols-2 place-content-around gap-x-4 gap-y-6 lg:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard {...dialogProps} {...category} key={category._id} />
        ))}
      </div>
    </div>
  );
};

export default StepCategoryChoice;
