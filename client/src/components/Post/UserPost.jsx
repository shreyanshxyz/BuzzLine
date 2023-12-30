import { Avatar, AvatarGroup } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "../Actions/Actions";
function UserPost({ postImg, postTitle, likes, replies }) {
  const [liked, setLiked] = useState(false);
  return (
    <Link to={"/user/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Avatar
                paddingRight={"10px"}
                size={"md"}
                name="Shreyansh Bhadoria"
                src="/gojo_icon.jpg"
              />
              <Text fontSize={"sm"} fontWeight={"bold"}>
                shreyanshxyz
              </Text>
            </Flex>
            <Flex gap={4} alignItems={"center"}>
              <Text fontSize={"sm"} color={"gray.light"}>
                Id
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={postImg} w={"full"} />
            </Box>
          )}

          <Flex gap={3} my={1}>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          <Flex gap={2} alignItems={"center"}>
            <Box
              position={"relative"}
              w={"fit-content"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <AvatarGroup size="xs" max={2}>
                <Avatar
                  size={"xs"}
                  name="Shreyansh Alt"
                  src="https://i.pinimg.com/736x/d2/5d/5c/d25d5c9774eece45fc37b18faf3fdeed.jpg"
                  // position={"absolute"}
                  bottom={0}
                  // left={"0px"}
                  // padding={"2px"}
                />
                <Avatar
                  size={"xs"}
                  name="Shreyansh Alt"
                  src="https://i.pinimg.com/564x/57/ef/d5/57efd59416212ad21a293692dd470570.jpg"
                  // position={"absolute"}
                  bottom={0}
                  // right={"-7px"}
                  // padding={"2px"}
                />
                <Avatar
                  size={"xs"}
                  name="Shreyansh Alt"
                  src="https://i.pinimg.com/736x/57/f7/83/57f783c03de47fd2b3ae794612eb0353.jpg"
                  // position={"absolute"}
                  bottom={0}
                  // left={"15px"}
                  // padding={"2px"}
                />
                <Avatar
                  size={"xs"}
                  name="Shreyansh Alt"
                  src="https://i.pinimg.com/736x/8b/87/dc/8b87dcf0245c75448a08dda8fc5997fb.jpg"
                  // position={"absolute"}
                  bottom={0}
                  // left={"15px"}
                  // padding={"2px"}
                />
              </AvatarGroup>
            </Box>
            <Text color={"gray.light"} fontSize="sm">
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize="sm">
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
}

export default UserPost;
