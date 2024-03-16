import shakingHand from "../assets/images/shaking-hand.png";

const GreetingsPage = () => {
  return (
    <div className="mx-auto grid min-h-dvh max-w-screen-lg place-items-center bg-test-bg">
      <div className="px-4">
        <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-9">
          <img src={shakingHand} alt="shaking hand" />
          <div className="space-y-8">
            <p className="break-all text-center text-4xl font-semibold">
              Привет, <span className="text-test-link">Влад</span>!
            </p>
            <div className="space-y-5 px-2 leading-tight text-test-hint">
              <p>
                Это приложение поможет тебе рассчитать стоимость доставки из
                Европы.
              </p>
              <p>
                Добавь нужные товары и укажи их стоимость, а остальное за нами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingsPage;
