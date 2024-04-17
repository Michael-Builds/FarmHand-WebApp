import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import PropTypes from 'prop-types';
import NotificationModal from "./Modal"
import { useState } from "react";

const initialFormState = {
  fullname: "",
  phone_number: "",
  location: "",
  farm_type: "",
  type_of_service: "",
};

const InViewImage = ({ src, alt, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  InViewImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    delay: PropTypes.number,
  };

  const animationClass = inView ? 'fade-in-left' : '';
  const style = {
    animationDuration: '1s',
    animationDelay: `${delay}s`,
  };

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`rounded-lg -mb-8 h-[10rem] w-[15rem] object-cover lg:mt-4 mt-8 lg:mt-0 xl:h-[18rem] xl:w-[18rem] ${animationClass}`}
      style={style}
    />
  );
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '', status: 'success' });
  const closeModal = () => setIsModalOpen(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormReset = () => {
    setFormData({
      fullname: "",
      phone_number: "",
      location: "",
      farm_type: "",
      type_of_service: "",
    });
  };

  const validateForm = () => {
    return Object.values(formData).every(x => x !== "");
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      setModalData({ title: 'Error', description: 'Please fill in all required fields.', status: 'error' });
      setIsModalOpen(true);
      return;
    }
    setLoading(true);
    try {
      const endpoint = process.env.ENDPOINT;
      const response = await fetch('https://v1.nocodeapi.com/kabandakpantimichael/google_sheets/kARzyuYIpHdwqMct?tabId=Signup', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([[
          new Date().toLocaleString(),
          formData.fullname,
          formData.phone_number,
          formData.location,
          formData.farm_type,
          formData.type_of_service
        ]])
      });
      if (!response.ok) throw new Error('Failed to submit form');
      handleFormReset();
      setModalData({ title: 'Success', description: 'Your information has been submitted successfully.', status: 'success' });
      setIsModalOpen(true);
    } catch (error) {
      setModalData({ title: 'Error', description: error.toString(), status: 'error' });
      setIsModalOpen(true);
    }

    setLoading(false);
    close();
  };

  const Drone = "https://5.imimg.com/data5/SELLER/Default/2021/12/JA/AO/QQ/72464407/nla616-16kg-crop-spraying-drone-agriculture-uav-drone-sprayer-500x500.jpg"
  const Tractor = "https://media.sciencephoto.com/f0/17/66/93/f0176693-800px-wm.jpg"
  const Harvestor = "https://st2.depositphotos.com/1426049/7905/i/450/depositphotos_79057734-combine-harvester.jpg"
  const Farmers = "https://cdn.vanguardngr.com/wp-content/uploads/2021/03/Farmers-at-Work-in-their-Various-Farms.jpg"

  return (
    <div id="about" className="h-full p-4 bg-background flex flex-col lg:flex-row items-center gap-8 lg:justify-between">

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
        <form >
          <Modal
            opened={opened}
            onClose={close}
            style={{}}
            title="Register Now"
            centered
            styles={{
              title: {
                color: "black",
                fontWeight: "900",
                fontFamily: "Quicksand",
              },
            }}
          >
            <Box mx="auto" sx={{ maxWidth: 320 }}>
              {Object.entries(formData).map(([key, value]) => (
                <TextInput
                  required
                  key={key}
                  label={key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')}
                  name={key}
                  value={value}
                  onChange={handleInputChange}
                  mt="sm"
                  className="font-quicksand"
                />
              ))}
              <Group mt="lg" position="right" >
                <button onClick={handleFormReset} className="text-white font-quicksand text-sm rounded-sm bg-red-500 pl-4 pr-4 pt-2 pb-2">Cancel</button>
                <button type="submit" onClick={handleFormSubmit} className="text-white  font-quicksand text-sm bg-green-500 rounded-sm  pl-4 pr-4 pt-2 pb-2">Submit</button>
              </Group>
            </Box>
          </Modal>
        </form>

        <button onClick={open} className="bg-white p-2 pt-3 pb-3 pl-3 pr-3 mt-8 rounded-full xl:text-base text-sm">
          Find a labourer now
        </button>
      </div>
      <div className="lg:pr-24 order-2 lg:order-2">
        <div className="grid grid-cols-2 xl:p-6 xl:gap-8 gap-5 xl:mt-0 -mt-10 mb-8">
          <InViewImage src={Drone} alt="Drone" delay={0.2} />
          <InViewImage src={Tractor} alt="Tractor" delay={0.4} />
          <InViewImage src={Harvestor} alt="Harvestor" delay={0.6} />
          <InViewImage src={Farmers} alt="Farmers" delay={0.8} />
        </div>
      </div>
      <NotificationModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        title={modalData.title}
        description={modalData.description}
        status={modalData.status || 'success'}
        onClose={closeModal}
      />
    </div>
  );
};



export default Main;
