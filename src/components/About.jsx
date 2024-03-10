// import About from "../assets/about.png";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";
import Drone from "../assets/drone.png";
import Tractor from "../assets/tractor.png";
import Multi from "../assets/multi.png";
import Tools from "../assets/tools.png"

const Main = () => {

  const [opened, { open, close }] = useDisclosure(false);

  const data = [
    {
      id: 1,
      image: Drone
    },
    {
      id: 2,
      image: Tractor
    },
    {
      id: 3,
      image: Multi
    },
    {
      id: 4,
      image: Tools
    }
  ]

  return (
    <div id="about" className="h-full p-4 bg-background flex flex-col lg:flex-row items-center gap-8 lg:justify-between">
      {/* Image div */}
      {/* Main div */}
      <div className="font-quicksand lg:ml-8 order-1 lg:order-1">
        <h1 className="text-4xl text-white lg:-mt-12 text-center mt-6 font-bold">
          About us
        </h1>
        <p className="font-quicksand max-w-4xl text-white mt-6 lg:text-lg text-xs">
          FarmHand is here to help farmers find reliable laborers easily.
          Our goal is to make farm work simpler by connecting you with skilled professionals.
          We understand how important it is to have trustworthy laborers, so we carefully select and vet each one.
          With FarmHand, you can spend less time worrying about hiring and more time focusing on your farm.
          Let us handle the laborer management while you manage your farm efficiently.
        </p>
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
        <button onClick={open} className="bg-white p-2 pt-3 pb-3 pl-3 pr-3 mt-8 rounded-full xl:text-base text-sm">
          Find a labourer now!
        </button>
      </div>

      {/* Image div */}
      <div className="lg:pr-24 order-2 lg:order-2">
        <div className="grid grid-cols-2 p-6">
          {data.map((item, index) => (
            <img key={index} src={item.image} alt={`Item ${index + 1}`} className="rounded-lg lg:mt-4 mt-8 lg:mt-0 xl:h-[18rem] xl:w-[18rem]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
