import * as Select from "@radix-ui/react-select";
import * as Checkbox from "@radix-ui/react-checkbox";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.tsx";
import Card from "../components/card.tsx";

const CartsPage = () => {
  return (
    <div className="bg-test-bg min-h-screen">
      <div className="space-y-5 px-5 py-6">
        <div className="space-y-3 font-medium">
          <div className="text-test-text flex items-center justify-between">
            <p>Валюта оплаты</p>
            <Select.Root>
              <Select.Trigger className="bg-test-secondary text-test-text group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg p-3 outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder="USDT" />
                <Select.Icon>
                  <ArrowDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="bg-test-secondary w-[8.75rem] rounded-b-lg p-3 lg:w-[9.75rem]"
                  sideOffset={-5}
                  position="popper"
                >
                  <Select.Viewport className="text-test-hint space-y-4 font-medium">
                    <Select.Item value="val1" className="outline-none">
                      hello
                    </Select.Item>
                    <Select.Item value="val2" className="outline-none">
                      hello
                    </Select.Item>
                    <Select.Item value="val3" className="outline-none">
                      hello
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
          <div className="text-test-text flex items-center justify-between">
            <p>Страна доставки</p>
            <Select.Root>
              <Select.Trigger className="bg-test-secondary text-test-text group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg p-3 outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder="USDT" />
                <Select.Icon>
                  <ArrowDownIcon className="transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="bg-test-secondary w-[8.75rem] rounded-b-lg p-3 lg:w-[9.75rem]"
                  sideOffset={-5}
                  position="popper"
                >
                  <Select.Viewport className="text-test-hint space-y-4 font-medium">
                    <Select.Item value="val1" className="outline-none">
                      hello
                    </Select.Item>
                    <Select.Item value="val2" className="outline-none">
                      hello
                    </Select.Item>
                    <Select.Item value="val3" className="outline-none">
                      hello
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>
        </div>
        <div className="text-test-text space-y-4">
          <p className="font-medium">Способ доставки</p>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <Checkbox.Root
                className="border-test-button inline-flex size-4 items-center justify-center rounded-full border-2"
                id="val-1"
              >
                <Checkbox.Indicator asChild>
                  <div className="bg-test-button size-2 rounded-full" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor="val-1"
                className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-2"
              >
                <p>Курьером на дом</p>
                <p className="text-test-hint text-sm italic">
                  +345 ₽ (быстрее на 3-4 дня)
                </p>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <Checkbox.Root
                className="border-test-button inline-flex size-4 items-center justify-center rounded-full border-2"
                id="val-2"
              >
                <Checkbox.Indicator asChild>
                  <div className="bg-test-button size-2 rounded-full" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor="val-2"
                className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-2"
              >
                <p>Курьером на дом</p>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-test-secondary min-h-screen px-3 py-4">
        <div className="space-y-2 pb-32">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default CartsPage;
