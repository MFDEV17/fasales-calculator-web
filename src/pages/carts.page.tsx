import * as Select from "@radix-ui/react-select";
import * as Checkbox from "@radix-ui/react-checkbox";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.tsx";
import DialogRoot from "../components/dialog/dialog-root.tsx";
import { useAppData } from "../service/cms/queries.ts";
import { CardsList } from "../components/card/cards-list.tsx";

const CartsPage = () => {
  const { isLoading, data } = useAppData();

  if (isLoading) {
    return (
      <div className="grid min-h-screen place-items-center">Loading...</div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-test-bg">
      <div className="relative space-y-5 px-5 py-6">
        <DialogRoot />
        <div className="space-y-3 font-medium">
          <div className="flex items-center justify-between text-test-text">
            <p>Валюта оплаты</p>
            <Select.Root>
              <Select.Trigger className="group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg bg-test-secondary p-3 text-test-text outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder={data.currencies[0].currencyName} />
                <Select.Icon>
                  <ArrowDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="w-[8.75rem] rounded-b-lg bg-test-secondary p-3 lg:w-[9.75rem]"
                  sideOffset={-5}
                  position="popper"
                >
                  <Select.Viewport className="space-y-4 font-medium text-test-hint">
                    {data.currencies.map((currency) => (
                      <Select.Item
                        key={currency._id}
                        value={currency.currencyName}
                        className="outline-none"
                      >
                        <Select.ItemText>
                          {currency.currencyName}
                        </Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="flex items-center justify-between text-test-text">
            <p>Страна доставки</p>
            <Select.Root>
              <Select.Trigger className="group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg bg-test-secondary p-3 text-test-text outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder={data.countries[0].countryName} />
                <Select.Icon>
                  <ArrowDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="w-[8.75rem] rounded-b-lg bg-test-secondary p-3 lg:w-[9.75rem]"
                  sideOffset={-5}
                  position="popper"
                >
                  <Select.Viewport className="space-y-4 font-medium text-test-hint">
                    {data.countries.map((country) => (
                      <Select.Item
                        key={country._id}
                        value={country.countryName}
                        className="outline-none"
                      >
                        <Select.ItemText>{country.countryName}</Select.ItemText>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
        <div className="space-y-4 text-test-text">
          <p className="font-medium">Способ доставки</p>
          <div className="space-y-3">
            {data.deliveryMethods.map((method) => (
              <div className="flex items-center gap-x-2">
                <Checkbox.Root
                  key={method._id}
                  className="inline-flex size-4 items-center justify-center rounded-full border-2 border-test-button"
                  id={method.methodName}
                >
                  <Checkbox.Indicator asChild>
                    <div className="size-2 rounded-full bg-test-button" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <label
                  htmlFor={method.methodName}
                  className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-2"
                >
                  <p>{method.methodName}</p>
                  <p className="hidden text-sm italic text-test-hint">
                    +345 ₽ (быстрее на 3-4 дня)
                  </p>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CardsList />
    </div>
  );
};

export default CartsPage;
