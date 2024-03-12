import sneakers from "../assets/sneakers.png";
import LinkIcon from "../assets/icons/link-icon.tsx";
import TrashIcon from "../assets/icons/trash-icon.tsx";

const Card = () => {
  return (
    <div className="bg-test-bg relative mx-auto max-w-screen-lg rounded-xl">
      <div className="flex items-center">
        <div className="hidden px-4 lg:block">
          <img src={sneakers} alt="" className="size-20" />
        </div>
        <div className="space-y-2 lg:border-l">
          <div className="flex items-center gap-x-2 px-5 pt-2">
            <img src={sneakers} alt="" className="size-5 lg:hidden" />
            <p className="text-test-text font-semibold">Кроссовки</p>
          </div>
          <div className="space-y-2 px-5">
            <div>
              <p className="text-test-text text-2xl font-semibold">
                € 39 <span className="text-test-hint">≈ 4000 ₽</span>
              </p>
              <p className="text-test-hint text-sm font-medium">
                +340 ₽ доставка на склад
              </p>
            </div>
            <p className="font-medium">0.2 кг</p>
          </div>
          <div className="flex items-center gap-x-1 px-5 pb-2">
            <LinkIcon />
            <a
              href="#"
              target="_blank"
              className="text-test-link text-sm italic"
            >
              farfetch.com ...
            </a>
          </div>
        </div>
      </div>
      <button className="bg-test-destructive absolute bottom-2 right-3 rounded-lg p-2">
        <TrashIcon className="size-4" />
      </button>
      <button className="bg-test-secondary text-test-hint absolute right-3 top-2 inline-flex size-8 items-center justify-center rounded-lg font-medium">
        1
      </button>
    </div>
  );
};

export default Card;
