import React from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
  Flex,
} from "@chakra-ui/react";
import { Page } from "../interfaces/Page";

const PricingTable = () => {
  return (
    <Page>
      <Box p={5}>
        <Flex className="gap-11" mb={5}>
          <Box>
            <div className="">party ID</div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <div className="">Service Type</div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Flex>
        <Flex className="gap-11" mb={5}>
          <Box>
            <div className="">Service Code</div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box>
            <div className="">ETA</div>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Flex>

        <Table variant="simple">
          {/* <Thead>
            <Tr>
              <Th>Distance Indicator</Th>
            </Tr>
          </Thead> */}
          <Thead>
            <Tr>
              <Th>Weight</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
              <Th>Zone XXX</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Product 1</Td>
              <Td>$10</Td>
              <Td>This is product 1</Td>
            </Tr>
            <Tr>
              <Td>Product 2</Td>
              <Td>$20</Td>
              <Td>This is product 2</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Page>
  );
};

export default PricingTable;
