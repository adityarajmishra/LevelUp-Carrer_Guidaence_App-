import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import React, { useState, useEffect } from "react";
import process from "../svg/process.svg";
import { Image } from "react-bootstrap";
import thoughts from "../svg/thoughts.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Working = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const contentStyle2 = {
    display: "flex",
  };
  const contentStyle4 = {
    marginLeft: "280px",
    marginTop: "300px",
  };

  const contentStyle3 = {
    marginLeft: "300px",
    marginTop: "300px",
  };
  return (
    <div style={contentStyle2}>
      <Image
        data-aos="fade-down"
        data-aos-duration="1500"
        width={300}
        src={process}
      />

      <Button
        style={contentStyle4}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        type="primary"
        onClick={showModal}
      >
        <h6> How It Works</h6>
      </Button>
      <Modal
        title="How the WEBSITE Works"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <hr />
        <p>User has to first Login to the website</p>
        <hr />
        <p>............</p> <hr />
        <p>............</p> <hr />
        <p>............</p> <hr />
        <p>............</p> <hr />
        <p>............</p> <hr />
        <p>............</p> <hr />
      </Modal>
      <Image
        data-aos="fade-left"
        style={contentStyle3}
        width={400}
        src={thoughts}
      />
    </div>
  );
};
export default Working;
