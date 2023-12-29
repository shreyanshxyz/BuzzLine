import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { Button, useToast } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";

function UserHeader() {
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Shreyansh Bhadoria
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} bg={"gray.dark"} p={2} borderRadius={"full"}>
              shreyanshxyz
            </Text>
          </Flex>
        </Box>
      </Flex>
    </VStack>
  );
}

export default UserHeader;
