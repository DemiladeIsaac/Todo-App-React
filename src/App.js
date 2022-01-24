import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "./components/ui/Form";
import NewTodo from "./pages/NewTodo";
import TodoList from "./pages/TodoList";
import UpdateTodo from "./pages/UpdateTodo";
import { app } from "./util/firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleAction = (id) => {
    //console.log(id);
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((response) => {
          console.log(response);
          navigate("/", { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password).then(
        (response) => {
          navigate("/");
          sessionStorage.setItem(
            "Auth Token",
            response._tokenResponse.refreshToken
          );
        }
      );
    }
  };
  return (
    <Routes>
      <Route path="/add-todo" element={<NewTodo />} />
      <Route path="/update-todo/:id" element={<UpdateTodo />} />
      <Route
        path="/login"
        element={
          <Form
            title="Sign in"
            setEmail={setEmail}
            setPassword={setPassword}
            name="Login"
            handleAction={() => handleAction(1)}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Form
            title="Sign Up"
            setEmail={setEmail}
            setPassword={setPassword}
            name="Registration"
            handleAction={() => handleAction(2)}
          />
        }
      />
      <Route path="/" element={<TodoList />} />
    </Routes>
  );
}

export default App;
