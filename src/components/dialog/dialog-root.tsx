import * as Dialog from "@radix-ui/react-dialog";
import { useDialog } from "../../service/hooks/use-dialog.tsx";
import ArrowDownIcon from "../../assets/icons/arrow-down-icon.tsx";
import CloseIcon from "../../assets/icons/close-icon.tsx";
import * as ScrollArea from "@radix-ui/react-scroll-area";

const DialogRoot = () => {
  const { currentContent } = useDialog();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="fixed bottom-4 right-4 z-50 bg-test-button p-2 outline-none">
          dialog
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-[dialog-overlay-hide_400ms] data-[state=open]:animate-[dialog-overlay-show_400ms]" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[100] w-[90%] max-w-screen-lg translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-test-bg focus:outline-none data-[state=closed]:animate-[dialog-content-hide_300ms] data-[state=open]:animate-[dialog-content-show_300ms]">
          <Dialog.Title className="shadow-bottom flex w-full items-center justify-between rounded-t-3xl bg-test-bg p-4 font-medium text-test-hint">
            <ArrowDownIcon className="rotate-90 text-test-button" />
            <p>Добавление товара</p>
            <Dialog.Close className="outline-none">
              <CloseIcon className="size-7" />
            </Dialog.Close>
          </Dialog.Title>
          <ScrollArea.Root className="scrollbar-hide relative max-h-[450px] min-h-[300px] overflow-scroll">
            <ScrollArea.Viewport className="h-full w-full rounded">
              {currentContent}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="bg-blackA3 flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out hover:bg-gray-500/50 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
          <div className="shadow-top p-4 text-center text-sm text-test-hint">
            Выберите категорию товара
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogRoot;
