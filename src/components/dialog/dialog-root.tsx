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
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-gray-700/75" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-full max-w-screen-lg translate-x-[-50%] translate-y-[-50%] rounded-xl bg-test-bg focus:outline-none z-[100]">
          <Dialog.Title className="shadow-bottom flex w-full items-center justify-between rounded-t-xl bg-test-bg p-4 font-medium text-test-hint">
            <ArrowDownIcon className="rotate-90 text-test-button" />
            <p>Добавление товара</p>
            <CloseIcon className="size-7" />
          </Dialog.Title>
          <ScrollArea.Root className="h-[80vh] overflow-hidden rounded">
            <ScrollArea.Viewport className="h-full w-full rounded">
              {currentContent}
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar
              className="bg-blackA3 hover:bg-gray-500/50 flex touch-none select-none p-0.5 transition-colors duration-[160ms] ease-out data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
              orientation="vertical"
            >
              <ScrollArea.Thumb className="bg-red-400 relative flex-1 rounded-[10px] before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogRoot;
