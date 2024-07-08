import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Image,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const ImageModal = ({ isOpen, onClose, images, selectedImage, setSelectedImage }) => {
  const handlePrevImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setSelectedImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent py={8}>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent="center" alignItems="center">
            <IconButton
              icon={<ChevronLeftIcon />}
              aria-label="Previous image"
              isDisabled={selectedImage === 0}
              onClick={handlePrevImage}
              mr={2}
            />
            <Image src={images[selectedImage]} alt="Proof of delivery image" className="rounded-md min-w-0 w-full" />
            <IconButton
              icon={<ChevronRightIcon />}
              aria-label="Next image"
              isDisabled={selectedImage === images.length - 1}
              onClick={handleNextImage}
              ml={2}
            />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageModal;
