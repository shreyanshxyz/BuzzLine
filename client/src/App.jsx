import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import Header from "./components/Header/Header";

const user = true;
function App() {
  return (
    <Container maxW="740px">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:username"
          element={
            user ? (
              <>
                <UserPage />
                {/* <CreatePost /> */}
              </>
            ) : (
              <UserPage />
            )
          }
        />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  );
}

export default App;
