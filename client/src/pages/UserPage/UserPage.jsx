import React from "react";
import UserHeader from "../../components/Header/UserHeader";
import UserPost from "../../components/Post/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={481}
        postImg={"./havertz.jpg"}
        postTitle={"Kai Havertz"}
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg={"./odegaard.jpg"}
        postTitle={"Did you know?"}
      />
      <UserPost
        likes={1200}
        replies={481}
        postImg={"./havertz.jpg"}
        postTitle={"Heluuuu"}
      />
      <UserPost likes={1200} replies={481} postTitle={"Heluuuu"} />
    </>
  );
}

export default UserPage;
