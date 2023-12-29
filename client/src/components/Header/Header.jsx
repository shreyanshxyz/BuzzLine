import {
  Button,
  Flex,
  Image,
  Link,
  useColorMode,
  Text,
} from "@chakra-ui/react";

function Header() {
  return (
    <Flex justifyContent={"center"} marginTop={6} marginBottom={12}>
      <Text cursor={"pointer"} w={20}>
        BuzzLine
      </Text>
    </Flex>
  );
}

export default Header;
