import voucher from "../assets/images/voucher.png";
import CopyIcon from "../assets/icons/copy-icon.tsx";

const OrderPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg text-test-text">
      <div className="flex flex-col items-center justify-center px-4 py-5">
        <div className="py-5">
          <img src={voucher} alt="" className="size-52" />
        </div>
        <div className="flex flex-col items-center justify-center pb-5 pt-4">
          <div className="space-y-3">
            <p className="text-center text-2xl font-semibold">
              Оформление заказа
            </p>
            <p className="px-3">
              Чтобы оформить заказ скопируйте текст ниже и отправьте его нашему{" "}
              <span className="underline">менеджеру</span>.
            </p>
          </div>

          <div className="py-5">
            <div className="space-y-6 rounded-[1.25rem] bg-test-secondary p-5 text-sm italic text-test-hint">
              <p>Хочу сделать заказ с сайта matchesfashion.com</p>
              <ul className="list-inside list-decimal">
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
                <li>Кроссовки, размер 36, ссылка:</li>
              </ul>
            </div>
          </div>

          <button className="inline-flex items-center justify-center gap-x-1 rounded-lg bg-test-button p-2 text-sm uppercase text-test-button-text">
            <CopyIcon />
            <span>Скопировать</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
