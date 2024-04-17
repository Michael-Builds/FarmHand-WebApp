import Bg from "../assets/Main.jpg";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TextInput, Group, Box } from "@mantine/core";
import NotificationModal from "./Modal"
import { useState } from "react";

const initialFormState = {
  fullname: "",
  phone_number: "",
  location: "",
  farm_type: "",
  type_of_service: "",
};


const HeroSection = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '', status: 'success' });
  const closeModal = () => setIsModalOpen(false);
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
                <button onClick={handleFormReset} className="text-white  rounded-sm bg-red-500 pl-4 pr-4 pt-1 pb-1">Cancel</button>
                <button type="submit" onClick={handleFormSubmit} className="text-white bg-green-500 rounded-sm  pl-4 pr-4 pt-1 pb-1">Submit</button>
              </Group>
            </Box>
          </Modal>
        </form>
        <button
          onClick={open}
          className="mt-4 bg-green-500 lg:text-base text-sm font-quicksand lg:text-sm hover:bg-green-600 text-white font-semibold lg:py-3 lg:px-6 py-3 px-5 rounded-md shadow-lg transition duration-300 ease-in-out"
        >
          Get a labourer instantly
        </button>
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

export default HeroSection;
