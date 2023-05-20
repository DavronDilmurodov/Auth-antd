import { Layout } from "./components/layout";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.component";
import { Posts } from "./pages/posts/posts.component";
import { Users } from "./pages/users/users.component";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/login";

export const App = () => {
  const [token] = useAuth();

  if (token) {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </Layout>
    );
  }
  return <Login />;
};
