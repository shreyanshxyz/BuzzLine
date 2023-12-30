import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Link, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { Button, useToast } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { Link as RouterLink } from "react-router-dom";

function UserHeader() {
  const toast = useToast();

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: "Success.",
        status: "success",
        description: "Profile link copied.",
        duration: 3000,
        isClosable: true,
      });
    });
  };

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} mb={2} fontWeight={"bold"}>
            Shreyansh Bhadoria
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} bg={"gray.dark"} p={2} borderRadius={"full"}>
              shreyanshxyz
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar
            name={"shreyanshxyz"}
            src="/gojo_icon.jpg"
            size={{
              base: "lg",
              md: "xl",
            }}
          />
        </Box>
      </Flex>
      <Flex
        gap={2}
        alignItems={"center"}
        w={"full"}
        justifyContent={"space-between"}
      >
        <Text>Student of Life</Text>
        <Link as={RouterLink} to="/update">
          <Button size={"sm"}>Edit Profile</Button>
        </Link>
        {/* <Button size={"sm"}>"Follow"</Button> */}
      </Flex>

      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>899 followers</Text>
        </Flex>
        <Flex>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} onClick={copyURL}>
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid gray"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Posts</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid white"}
          justifyContent={"center"}
          color={"gray.light"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}> Comments</Text>
        </Flex>
      </Flex>
    </VStack>
  );
}

export default UserHeader;
