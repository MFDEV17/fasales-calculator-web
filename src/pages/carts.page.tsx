import * as Select from "@radix-ui/react-select";
import * as Checkbox from "@radix-ui/react-checkbox";
import ArrowDownIcon from "../assets/icons/arrow-down-icon.tsx";
import Card from "../components/card.tsx";
import DialogRoot from "../components/dialog/dialog-root.tsx";

const CartsPage = () => {
  return (
    <div className="min-h-screen bg-test-bg">
      <div className="relative space-y-5 px-5 py-6">
        <DialogRoot />
        <div className="space-y-3 font-medium">
          <div className="flex items-center justify-between text-test-text">
            <p>Валюта оплаты</p>
            <Select.Root>
              <Select.Trigger className="group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg bg-test-secondary p-3 text-test-text outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder="USDT" />
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
          <div className="flex items-center justify-between text-test-text">
            <p>Страна доставки</p>
            <Select.Root>
              <Select.Trigger className="group inline-flex w-full max-w-[8.75rem] items-center justify-between rounded-lg bg-test-secondary p-3 text-test-text outline-none lg:max-w-[9.75rem]">
                <Select.Value placeholder="USDT" />
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
        <div className="space-y-4 text-test-text">
          <p className="font-medium">Способ доставки</p>
          <div className="space-y-3">
            <div className="flex items-center gap-x-2">
              <Checkbox.Root
                className="inline-flex size-4 items-center justify-center rounded-full border-2 border-test-button"
                id="val-1"
              >
                <Checkbox.Indicator asChild>
                  <div className="size-2 rounded-full bg-test-button" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label
                htmlFor="val-1"
                className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-2"
              >
                <p>Курьером на дом</p>
                <p className="text-sm italic text-test-hint">
                  +345 ₽ (быстрее на 3-4 дня)
                </p>
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <Checkbox.Root
                className="inline-flex size-4 items-center justify-center rounded-full border-2 border-test-button"
                id="val-2"
              >
                <Checkbox.Indicator asChild>
                  <div className="size-2 rounded-full bg-test-button" />
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

      <div className="min-h-screen bg-test-secondary px-3 py-4">
        <div className="space-y-2 pb-16">
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
