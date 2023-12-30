import { useRecoilValue } from "recoil";
import LoginCard from "../../components/Auth/LoginCard";
import SignupCard from "../../components/Auth/SignupCard";
import authScreenAtom from "../../atoms/authAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
