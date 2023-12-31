import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/react";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import AuthPage from "./pages/AuthPage/AuthPage";
import UpdateProfilePage from "./pages/UpdateProfile/UpdateProfilePage";
import Header from "./components/Header/Header";
import { useRecoilValue } from "recoil";
import userAtom from "./atoms/userAtom";
function App() {
  const user = useRecoilValue(userAtom);
  return (
    <Container maxW="740px">
      <Header />
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />
        <Route
          path="/update"
          element={user ? <UpdateProfilePage /> : <Navigate to="/auth" />}
        />
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
