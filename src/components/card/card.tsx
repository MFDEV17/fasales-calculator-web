import LinkIcon from "../../assets/icons/link-icon.tsx";
import TrashIcon from "../../assets/icons/trash-icon.tsx";
import { StoreCard } from "../../service/store/store-state.ts";

const Card = ({
  categoryRef: { image, name, singleName, designWeight },
  price,
  link,
  cardCount,
}: StoreCard) => {
  return (
    <div className="relative mx-auto max-w-screen-lg rounded-xl bg-test-bg">
      <div className="flex items-center">
        <div className="hidden shrink-0 px-4 lg:block">
          <img src={image} alt="" className="size-20" />
        </div>
        <div className="space-y-2 lg:border-l">
          <div className="flex items-center gap-x-2 px-5 pt-2">
            <img src={image} alt="" className="size-5 lg:hidden" />
            <p className="font-semibold text-test-text">{name || singleName}</p>
          </div>
          <div className="space-y-2 px-5">
            <div>
              <p className="text-2xl font-semibold text-test-text">
                € {price} <span className="text-test-hint">≈ 4000 ₽</span>
              </p>
              <p className="text-sm font-medium text-test-hint">
                +340 ₽ доставка на склад
              </p>
            </div>
            <p className="font-medium">{designWeight} кг</p>
          </div>
          <div className="flex w-full items-center gap-x-1 px-5 pb-2">
            <LinkIcon />
            <a
              href="#"
              target="_blank"
              className="text-sm italic text-test-link"
            >
              {new URL(link).hostname}
            </a>
          </div>
        </div>
      </div>
      <button className="absolute bottom-2 right-3 rounded-lg bg-test-destructive p-2">
        <TrashIcon className="size-4" />
      </button>
      <button className="absolute right-3 top-2 inline-flex size-8 items-center justify-center rounded-lg bg-test-secondary font-medium text-test-hint">
        {cardCount}
      </button>
    </div>
  );
};

export default Card;
