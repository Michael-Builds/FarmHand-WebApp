import Bg from "../assets/Main.jpg";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";

const HeroSection = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div
      id="hero"
      className="relative bg-cover bg-fit bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex lg:pl-32 flex-col items-start justify-center text-white z-10 px-8 max-w-7xl">
        <h1 className="lg:text-5xl text-xl md:text-6xl font-bold xl:mb-4 mb-2 font-quicksand ">
          Connect with skilled laborers in no time for all your farm work needs{" "}
        </h1>

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
        <button
          onClick={open}
          className="mt-4 bg-green-500 lg:text-base text-sm font-quicksand hover:bg-green-600 text-white font-semibold lg:py-3 lg:px-6 py-3 px-5 rounded-md shadow-lg transition duration-300 ease-in-out"
        >
          Get a labourer instantly
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
