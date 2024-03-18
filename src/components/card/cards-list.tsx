import Card from "./card.tsx";
import { useRootStore } from "../../service/store/root-store.ts";

export const CardsList = () => {
  const cards = useRootStore((s) => s.cards);

  return (
    <div className="bg-test-secondary px-3 py-4">
      <div className="space-y-2 pb-10">
        {cards.map((card) => (
          <Card key={card.cardId} {...card} />
        ))}
      </div>
    </div>
  );
};
