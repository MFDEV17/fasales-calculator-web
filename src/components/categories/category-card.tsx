import { Category } from "../../types/type.category.ts";
import { useRootStore } from "../../service/store/root-store.ts";
import { DialogProps } from "../../service/hooks/use-dialog.tsx";

const CategoryCard = ({
  image,
  name,
  goToNextStep,
  ...category
}: Category & DialogProps) => {
  const setFormProps = useRootStore((s) => s.setFormProps);

  return (
    <div
      className="flex flex-col items-center justify-center space-y-2"
      onClick={() => {
        setFormProps({ image, name, ...category });
        goToNextStep();
      }}
    >
      <div className="rounded-3xl bg-test-bg p-4">
        <img src={image} alt="" className="size-[3.75rem]" />
      </div>
      <p className="w-full overflow-hidden truncate text-ellipsis text-nowrap text-center text-sm font-medium">
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
