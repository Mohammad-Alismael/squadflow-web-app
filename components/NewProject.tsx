"use client";
import { createNewProject } from "@/lib/api";
import { Fragment, useState } from "react";
import { usePathname, useRouter } from 'next/navigation'
import Card from '@/components/Card'
import Button from "./Button";
import Input from "./Input";
import { Dialog, Transition } from "@headlessui/react";

const NewProject = () => {
  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNewProject(name);
    setIsOpen(false);
    router.refresh()
  };

  return (
    <Card className="bg-transparent">
      <div className="fixed inset-0 flex items-center justify-center">
        <Button onClick={() => openModal()}>+ New Project</Button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-2 capitalize"
                  >
                    create new project
                  </Dialog.Title>
                  <form className="flex items-center" onSubmit={handleSubmit}>
                    <Input
                      placeholder="project name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Button type="submit">Create</Button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Card>
  );
};

export default NewProject;
