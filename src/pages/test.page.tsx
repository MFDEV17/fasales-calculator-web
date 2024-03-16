import users from "../users.json";
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

const TestPage = () => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-sm space-y-4 rounded-lg bg-gray-200 p-4">
        {users.map((user) => (
          <div
            className="flex justify-between rounded-lg bg-white px-4 py-4 text-gray-900 shadow"
            key={user.id}
          >
            <div>
              <p>{user.name}</p>
              <p className="text-sm text-gray-500">{user.role}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div>
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="rounded p-2 hover:bg-gray-200">
                    <Pencil1Icon />
                  </button>
                </Dialog.Trigger>
                <Dialog.Overlay className="fixed inset-0 bg-gray-900/40" />
                <Dialog.Content className="fixed left-1/2 top-1/2 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-8 text-gray-900 shadow">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="text-xl">
                      Edit contact
                    </Dialog.Title>
                    <Dialog.Close className="text-gray-400 transition-colors duration-300 hover:text-gray-900">
                      <Cross1Icon className="size-5" />
                    </Dialog.Close>
                  </div>
                  <div className="mt-8">
                    <UserFields user={user} />
                  </div>
                  <div className="mt-8 space-x-5 text-right">
                    <button className="rounded-md px-4 py-2 text-sm font-medium text-gray-900 transition-colors duration-300 hover:bg-green-600 hover:text-white">
                      Cancel
                    </button>
                    <button className="rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-green-600">
                      Save
                    </button>
                  </div>
                </Dialog.Content>
              </Dialog.Root>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestPage;

function UserFields({
  user,
}: {
  user: { id: string; name: string; email: string; role: string };
}) {
  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-900">Name</label>
        <input
          autoFocus
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.name}
        />
      </div>

      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Role
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.role}
        />
      </div>
      <div>
        <label className="text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <input
          className="mt-2 block w-full rounded-md border border-gray-300 px-2 py-1.5 text-sm text-gray-900 shadow-sm sm:leading-6"
          type="text"
          defaultValue={user.email}
        />
      </div>
    </div>
  );
}
