import image from "../../assets/sneakers.png";
import PencilIcon from "../../assets/icons/pencil-icon.tsx";
import { Input } from "../input.tsx";
import CheckIcon from "../../assets/icons/check-icon.tsx";

const StepCreateCart = () => {
  return (
    <div className="flex flex-col px-3 py-6 md:px-5">
      <div className="flex flex-col items-center justify-center space-y-5 text-center">
        <img src={image} alt="" className="size-[5.75rem]" />
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center gap-x-2">
            <p className="text-2xl font-semibold text-test-text">Кроссовки</p>
            <PencilIcon className="mt-1" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-test-hint">Расчётный вес — 1 кг</p>
            <p className="text-sm text-test-hint">Комиссия за выкуп — 200 ₽</p>
          </div>
        </div>
        <p className="text-sm text-test-link underline">
          Список товаров запрещённых к пересылке
        </p>
      </div>
      <ul className="list-inside list-disc pl-3.5 pt-6 text-sm text-test-destructive">
        <li>Вес должен быть в пределах 0.1-100 кг</li>
        <li>Некорректная ссылка</li>
        <li>Некорректная цена</li>
      </ul>
      <div className="pt-6">
        <div className="flex items-center gap-x-3">
          <div className="space-y-1">
            <label htmlFor="price" className="text-sm text-test-hint">
              Цена <span className="text-test-destructive">*</span>
            </label>
            <Input id="price" />
          </div>
          <div className="space-y-1">
            <label htmlFor="size" className="text-sm text-test-hint">
              Размер
            </label>
            <Input id="size" />
          </div>
          <div className="space-y-1">
            <label htmlFor="weight" className="text-sm text-test-hint">
              Вес <span className="text-test-destructive">*</span>
            </label>
            <Input id="weight" />
          </div>
        </div>
        <div className="space-y-3 pt-6">
          <div className="space-y-1">
            <label htmlFor="link" className="text-sm text-test-hint">
              Ссылка на товар <span className="text-test-destructive">*</span>
            </label>
            <Input id="link" />
          </div>
          <div className="space-y-2 text-sm text-test-hint">
            <p className="text-test-link">
              +340 ₽ за доставку с этого магазина на склад
            </p>
            <p>
              Доставка с некоторых магазинов в Испанию платная. Мы автоматически
              определяем стоимость доставки, и если она платная — добавляем её к
              общей стоимости заказа.
            </p>
          </div>
        </div>
      </div>
      <button className="mt-12 inline-flex w-min items-center justify-center gap-x-1 self-center rounded-lg bg-green-400 px-2 py-2 text-sm uppercase text-test-button-text">
        <CheckIcon className="size-5" />
        сохранить
      </button>
    </div>
  );
};

export default StepCreateCart;
