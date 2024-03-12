import indexFinger from "../assets/index-finger.png";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.tsx";

const ResultPage = () => {
  return (
    <div className="grid min-h-[calc(100vh-2.5rem)] place-items-center">
      <div className="flex flex-col items-center justify-center px-4 py-6">
        <img src={indexFinger} alt="" className="size-40" />
        <div className="space-y-2 pt-4 text-center">
          <p className="text-4.5xl font-semibold">21 300 ₽</p>
          <p className="font-medium">Финальная стоимость</p>
        </div>
        <div className="gradient-content mt-8 h-full w-full bg-white">
          <div className="flex items-center justify-center gap-x-2.5 py-5">
            <p className="pl-2.5 text-[3rem]">📦</p>
            <div className="space-y-3.5 pr-2.5">
              <p className="font-semibold">Доставим за ±21 день</p>
              <p className="text-sm">
                Посылка приедет в отделение Почты России.
              </p>
            </div>
          </div>
        </div>
        <div className="gradient-content mt-8 h-full w-full bg-white">
          <div className="flex items-center justify-center gap-x-2.5 py-5">
            <p className="pl-2.5 text-[3rem]">🏋️‍♀️</p>
            <div className="space-y-3.5 pr-2.5">
              <p className="font-semibold">Лимит веса</p>
              <p className="text-sm">
                Вес посылки выше допустимого лимита, стоимость доставки может
                быть выше.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full space-y-3">
          <div className="bg-test-secondary mt-6 space-y-2 rounded-lg p-5">
            {Array.from({ length: 10 }).map(() => (
              <div className="flex w-full items-center">
                <span className="mr-2">Item 1:</span>
                <span className="border-test-hint flex-1 self-end border-b border-dotted mb-1"></span>
                <span className="ml-2">Item 2</span>
              </div>
            ))}
          </div>
          <div className="text-test-hint flex items-center justify-center gap-x-2 uppercase">
            <p>Больше</p>
            <ArrowDownIcon className="size-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
