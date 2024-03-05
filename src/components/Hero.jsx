import Bg from "../assets/bg.png";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Button, Group, Box } from "@mantine/core";

const HeroSection = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex lg:pl-32 flex-col items-start justify-center text-white z-10 px-8 max-w-7xl">
        <h1 className="lg:text-6xl text-xl md:text-6xl font-bold mb-4 font-quicksand ">
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
              label="Email"
              placeholder="Email"
              className="font-quicksand"
            />

            <Group justify="center" mt="xl">
              <Button className="font-quicksand">Submit</Button>
            </Group>
          </Box>
        </Modal>
        <button
          onClick={open}
          className="mt-4 bg-green-500 font-quicksand hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg transition duration-300 ease-in-out"
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
