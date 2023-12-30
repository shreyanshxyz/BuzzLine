import React from "react";
import { Link } from "react-router-dom";
import { Button, Flex } from "@chakra-ui/react";
function HomePage() {
  return (
    <Link to={"/user"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button
          mx={"auto"}
          bg={"black"}
          _hover={{
            backgroundColor: "black",
          }}
        >
          Go to profile page
        </Button>
      </Flex>
    </Link>
  );
}

export default HomePage;
