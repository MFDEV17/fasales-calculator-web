import PencilIcon from "../../assets/icons/pencil-icon.tsx";
import { Input } from "../input.tsx";
import CheckIcon from "../../assets/icons/check-icon.tsx";
import { useCreateCartForm } from "../../service/hooks/form/use-create-cart-form.ts";
import { ErrorMessage } from "@hookform/error-message";
import { DialogProps } from "../../service/hooks/use-dialog.tsx";

const StepCreateCart = (dialogProps: DialogProps) => {
  const { register, errors, submit, categoryRef } = useCreateCartForm();

  return (
    <>
      <form className="flex flex-col px-3 py-6 md:px-5" onSubmit={submit}>
        <div className="flex flex-col items-center justify-center space-y-5 text-center">
          <img src={categoryRef.image} alt="" className="size-[5.75rem]" />
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center gap-x-2">
              <p className="text-2xl font-semibold text-test-text">
                {categoryRef.name}
              </p>
              <PencilIcon className="mt-1" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-test-hint">
                Расчётный вес — {categoryRef.designWeight} кг
              </p>
              <p className="text-sm text-test-hint">
                Комиссия за выкуп — 200 ₽
              </p>
            </div>
          </div>
          <p
            className="text-sm text-test-link underline"
            onClick={dialogProps.goToNextStep}
          >
            Список товаров запрещённых к пересылке
          </p>
        </div>
        <ul className="list-inside list-disc pl-3.5 pt-6 text-sm text-test-destructive">
          <ErrorMessage
            name="weight"
            errors={errors}
            render={({ message }) => <li>{message}</li>}
          />
          <ErrorMessage
            name="link"
            errors={errors}
            render={({ message }) => <li>{message}</li>}
          />
          <ErrorMessage
            name="price"
            errors={errors}
            render={({ message }) => <li>{message}</li>}
          />
        </ul>
        <div className="pt-6">
          <div className="flex items-center gap-x-3">
            <div className="space-y-1">
              <label htmlFor="price" className="text-sm text-test-hint">
                Цена <span className="text-test-destructive">*</span>
              </label>
              <Input id="price" {...register("price")} />
            </div>
            <div className="space-y-1">
              <label htmlFor="size" className="text-sm text-test-hint">
                Размер
              </label>
              <Input id="size" {...register("size")} />
            </div>
            <div className="space-y-1">
              <label htmlFor="weight" className="text-sm text-test-hint">
                Вес <span className="text-test-destructive">*</span>
              </label>
              <Input id="weight" {...register("weight")} />
            </div>
          </div>
          <div className="space-y-3 pt-6">
            <div className="space-y-1">
              <label htmlFor="link" className="text-sm text-test-hint">
                Ссылка на товар <span className="text-test-destructive">*</span>
              </label>
              <Input id="link" {...register("link")} />
            </div>
            <div className="space-y-2 text-sm text-test-hint">
              <p className="text-test-link">
                +340 ₽ за доставку с этого магазина на склад
              </p>
              <p>
                Доставка с некоторых магазинов в Испанию платная. Мы
                автоматически определяем стоимость доставки, и если она платная
                — добавляем её к общей стоимости заказа.
              </p>
            </div>
          </div>
        </div>
        <button
          className="mt-12 inline-flex w-min items-center justify-center gap-x-1 self-center rounded-lg bg-green-400 px-2 py-2 text-sm uppercase text-test-button-text"
          type="submit"
        >
          <CheckIcon className="size-5" />
          сохранить
        </button>
      </form>
    </>
  );
};

export default StepCreateCart;
