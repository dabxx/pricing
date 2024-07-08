import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { UserContext } from "../interfaces";
import { CARRIER_CODES } from "../constants";

const coreServiceUrl = `${process.env.REACT_APP_CORE_SERVICES_URL}`;
const coreServicePath = `${process.env.REACT_APP_CORE_SERVICES_PATH}`;
const apiUrl = `${coreServiceUrl}${coreServicePath}`;
const coreServiceToken = `${process.env.REACT_APP_CORE_SERVICES_TOKEN}`;

function PopUpModal({ isOpen, onClose }) {
  const [lane, setLane] = useState("");
  const [destination, setDestination] = useState("");
  const [laneOptions, setLaneOptions] = useState([]);
  const { user } = useContext(UserContext); // Use UserContext

  useEffect(() => {
    // Fetch lanes from the API
    fetchLanes();
  }, [user]); // Add user to dependency array

  const fetchLanes = async () => {
    try {
      const response = await fetch(apiUrl + "/get-lanes", {
        headers: {
          Authorization: coreServiceToken,
        },
      });

      if (response.ok) {
        const lanesData = await response.json();
        // Extract lane names from the response data
        const laneNames = lanesData.map((lane) => lane.lane);
        setLaneOptions(laneNames);
      } else {
        console.error("Failed to fetch lanes");
      }
    } catch (error) {
      console.error("Error fetching lanes:", error);
    }
  };

  const createContainer = async () => {
    const carrierCode = user.Groups.find((group) =>
      CARRIER_CODES.includes(group)
    );

    if (!carrierCode) return;

    try {
      const response = await fetch(apiUrl + "/create-container", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: coreServiceToken,
        },
        body: JSON.stringify({
          carrierCode: carrierCode,
          lane,
          destination,
          type: "PALLET",
        }),
      });

      if (response.ok) {
        // const data = await response.json();
        alert("Successfully created container");
        onClose(); // Close the modal after successful creation
      } else {
        console.error("Failed to create container");
        alert("Error creating container. Please try again."); // Show error message
      }
    } catch (error) {
      console.error("Error creating container:", error);
      alert("An unexpected error occurred. Please try again."); // Show generic error message
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">Create Container</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap={5}>
            <FormControl>
              <FormLabel>Lane</FormLabel>
              <Select
                placeholder="Select Lane"
                value={lane}
                onChange={(e) => setLane(e.target.value)}
              >
                {laneOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Destination</FormLabel>
              <Input
                placeholder="Enter Destination Here"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </FormControl>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button className="chakra-primary-button" onClick={createContainer}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PopUpModal;
