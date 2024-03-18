import sadFace from "../../assets/images/sad-face.png";
import { DialogProps } from "../../service/hooks/use-dialog.tsx";

const DialogBannedItems = ({ setStep }: DialogProps) => {
  return (
    <div className="flex h-full max-h-[450px] min-h-[300px] w-full flex-col items-center space-y-6 overflow-y-scroll bg-white p-6 scrollbar-hide">
      <img src={sadFace} alt="" className="size-[12rem]" />
      <div className="space-y-6 px-0 md:px-2">
        <p>К сожалению, из Европы в Россию можно отправлять не все товары.</p>
        <div className="space-y-4">
          <p className="text-center text-xl font-semibold md:text-2xl">
            Запрещено к пересылке
          </p>
          <ul className="list-inside list-disc pl-3">
            <li>Запчасти для машин</li>
            <li>Духи и жидкости</li>
            <li>Техника</li>
            <li>Мебель</li>
            <li>Лекарства</li>
          </ul>
        </div>
      </div>
      <button
        className="rounded-lg bg-test-button px-3 py-2.5 text-sm uppercase text-test-button-text"
        onClick={() => setStep(2)}
      >
        понятно
      </button>
    </div>
  );
};

export default DialogBannedItems;
