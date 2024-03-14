import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";


const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Navigation = () => {

  const [opened, { open, close }] = useDisclosure(false);

  const handleSignUpClick = () => {
    scrollTo('home'); // Optionally scroll to 'home' section if needed
    open(); // Open the modal
  };


  return (
    <Disclosure as="nav" className="fixed shadow-lg w-full z-20 transition-colors duration-300 ease-in-out bg-white">
      {({ open: disclosureOpen }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  as="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Open main menu</span>
                  {disclosureOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <a href="/" className="flex flex-shrink-0 items-center gap-4">

                  <img
                    className="h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Logo"
                  />
                  <h1 className="font-quicksand font-bold text-3xl text-gray-800">FarmHand</h1>
                </a>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-900">
                <div className="flex items-center gap-12">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-8">
                      <button onClick={() => scrollTo('about')} className=" font-quicksand">About</button>

                      <Modal
                        opened={opened}
                        onClose={close}
                        style={{}}
                        title="Register Now"
                        centered
                        styles={{
                          title: {
                            fontSize: "1rem",
                            color: "black",
                            fontWeight: "900",
                            fontFamily: "Quicksand",
                          },
                        }}
                      >
                        <Box maw={340} mx="auto">
                          <TextInput
                            label="Name"
                            placeholder="Name"
                            className="font-quicksand"
                          />
                          <TextInput
                            mt="md"
                            label="Phone Number"
                            placeholder="Phone Number"
                            className="font-quicksand"
                          />
                          <TextInput
                            mt="md"
                            label="Location"
                            placeholder="Location"
                            className="font-quicksand"
                          />
                          <TextInput
                            mt="md"
                            label="Farm-Type"
                            placeholder="Farm-Type"
                            className="font-quicksand"
                          />
                          <TextInput
                            mt="md"
                            label="Type of Service"
                            placeholder="Type of Service"
                            className="font-quicksand"
                          />

                          <Group mt="lg" className="flex justify-end ">
                            <button className="font-quicksand rounded-sm text-white p-2 pl-3 pr-3 bg-red-500">Cancel</button>
                            <button className="font-quicksand rounded-sm text-white p-2 pl-3 pr-3 bg-green-500">Submit</button>
                          </Group>
                        </Box>
                      </Modal>
                      <button onClick={handleSignUpClick} className="text-center text-base text-white bg-green-600 pl-4 pr-4 pt-2 pb-2 rounded-full font-quicksand"> Get a labourer now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3  justify-start">
              <button
                onClick={() => scrollTo('about')}
                className="block text-center  pl-6 pr-6 text-base bg-transparent py-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                About
              </button>
              <Modal
                opened={opened}
                onClose={close}
                style={{}}
                title="Register Now"
                centered
                styles={{
                  title: {
                    fontSize: "1rem",
                    color: "black",
                    fontWeight: "900",
                    fontFamily: "Quicksand",
                  },
                }}
              >
                <Box maw={340} mx="auto">
                  <TextInput
                    label="Name"
                    placeholder="Name"
                    className="font-quicksand"
                  />
                  <TextInput
                    mt="md"
                    label="Email"
                    placeholder="Email"
                    className="font-quicksand"
                  />
                  <TextInput
                    mt="md"
                    label="Location"
                    placeholder="Location"
                    className="font-quicksand"
                  />
                  <TextInput
                    mt="md"
                    label="Farm-Type"
                    placeholder="Farm-Type"
                    className="font-quicksand"
                  />

                  <Group mt="lg" className="flex justify-end ">
                    <button className="font-quicksand rounded-sm text-white p-2 pl-3 pr-3 bg-red-500">Cancel</button>
                    <button className="font-quicksand rounded-sm text-white p-2 pl-3 pr-3 bg-green-500">Submit</button>
                  </Group>
                </Box>
              </Modal>
              <button
                onClick={handleSignUpClick}
                className="block pl-3 pr-3 font-quicksand text-sm text-center text-base text-white bg-green-600 py-2 rounded-full text-white hover:bg-gray-500"
              >
                Get a labourer now
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navigation;
