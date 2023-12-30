import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";

const Comment = () =>
  // { reply, lastReply }
  {
    return (
      <>
        <Flex gap={4} py={2} my={2} w={"full"}>
          <Avatar
            borderRadius={"2px"}
            src={"/gojo_icon.jpg"}
            // {reply.userProfilePic}
            size={"sm"}
          />
          <Flex gap={1} w={"full"} flexDirection={"column"}>
            <Flex
              w={"full"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text fontSize="sm" fontWeight="bold">
                {/* {reply.username} */}
                username
              </Text>
            </Flex>
            <Text>
              {/* {reply.text} */}
              Comment
            </Text>
          </Flex>
        </Flex>
        {/* {!lastReply ?  */}
        <Divider />
        {/* : null} */}
      </>
    );
  };

export default Comment;
