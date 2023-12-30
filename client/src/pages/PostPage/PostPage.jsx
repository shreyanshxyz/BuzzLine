import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { useRecoilState, useRecoilValue } from "recoil";
import { DeleteIcon } from "@chakra-ui/icons";
import Actions from "../../components/Actions/Actions";
import Comment from "../../components/Comments/Comment";

function PostPage() {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar
            src={"/gojo_icon.jpg"}
            size={"md"}
            borderRadius={"2px"}
            name="Shreyansh Bhadoria"
          />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              shreyanshxyz
            </Text>
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            30 December 2023
            {/* {formatDistanceToNow(new Date(currentPost.createdAt))} ago */}
          </Text>

          {/* {currentUser?._id === user._id && ( */}
          {/* <DeleteIcon size={20} cursor={"pointer"} onClick={handleDeletePost} /> */}
          {/* )} */}
        </Flex>
      </Flex>

      <Text my={3}>Sample text for the post.{/* {currentPost.text} */}</Text>

      {/* {currentPost.img && ( */}
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image
          src={"/havertz.jpg"}
          // {currentPost.img}
          w={"full"}
        />
      </Box>
      {/* )} */}

      <Flex gap={3} my={3}>
        <Actions
        // post={currentPost}
        />
      </Flex>

      <Divider my={4} />

      {/* <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex> */}

      <Divider bg={"gray"} my={4} />
      {/* {currentPost.replies.map((reply) => (
        <Comment
          key={reply._id}
          reply={reply}
          lastReply={
            reply._id ===
            currentPost.replies[currentPost.replies.length - 1]._id
          }
        />
      ))} */}
      <Comment
        userProfilePic={"/gojo_icon.jpg"}
        username={"shreyanshx"}
        text={"Nice Man!"}
        lastReply={false}
      />
      <Comment
        userProfilePic={"/gojo_icon.jpg"}
        username={"shreyanshxy"}
        text={"Nice One Man!"}
        lastReply={false}
      />
      <Comment
        userProfilePic={"/gojo_icon.jpg"}
        username={"shreyanshxyy"}
        text={"Nice Two Man!"}
        lastReply={true}
      />
    </>
  );
}

export default PostPage;
