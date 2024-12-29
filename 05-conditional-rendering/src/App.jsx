import AdminPanel from "./components/AdminPanel";
import LoginForm from "./components/LoginForm";
import "./App.css";

const isLoggedIn = true;

function App() {
    return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;
}

export default App;
