import React from "react";
import UserHeader from "../../components/Header/UserHeader";
import UserPost from "../../components/Post/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={3002}
        replies={866}
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
        likes={1341}
        replies={391}
        postImg={"./aurora.jpg"}
        postTitle={"Northern Lights - Norway"}
      />
      <UserPost likes={862} replies={123} postTitle={"Heluuuu"} />
    </>
  );
}

export default UserPage;
