import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRootStore } from "../../store/root-store.ts";

const cartCreateSchema = z.object({
  price: z.coerce
    .number()
    .gt(0, { message: "Некорректная цена" })
    .max(9999, { message: "Некорректная цена" }),
  weight: z.coerce
    .number()
    .gte(0.1, { message: "Вес должен быть в пределах 0.1-100 кг" })
    .lte(100, { message: "Вес должен быть в пределах 0.1-100 кг" })
    .optional(),
  size: z.string().optional(),
  link: z.string().url({ message: "Некорректная ссылка" }),
});

export type CardSchema = z.infer<typeof cartCreateSchema>;

export const useCreateCartForm = () => {
  const createCard = useRootStore((s) => s.createCard);
  const categoryRef = useRootStore((s) => s.categoryRef);

  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<z.infer<typeof cartCreateSchema>>({
    resolver: zodResolver(cartCreateSchema),
    defaultValues: {
      weight: categoryRef.mutableWeight ? categoryRef.designWeight : 0,
    },
  });

  const onSubmit = () => {
    createCard({
      ...getValues(),
      cardId: crypto.randomUUID(),
      categoryRef,
      cardCount: 1,
    });
  };

  return {
    categoryRef,
    submit: handleSubmit(onSubmit),
    register,
    errors,
    handleSubmit,
    getValues,
  };
};
