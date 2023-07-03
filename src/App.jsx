import MainApp from "./routes/MainApp";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </>
  );
}

export default App;
