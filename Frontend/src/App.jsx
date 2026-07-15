import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";


function App() {
  return (
    <div className="bg-linear-to-r from-white to-orange-50 min-h-screen pt-1">
      <Navbar />
      <AppRoutes />
      
    </div>
  );
}

export default App;
