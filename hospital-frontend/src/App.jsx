import "./App.css";
import MovingBallsBackground from "./components/MovingBallsBackground/MovingBallsBackground";
import Navigation from "./router/Navigation";
import { IDProvider } from "./context/IDProvider";

function App() {
  return (
    <MovingBallsBackground>
      <IDProvider>
        <Navigation />
      </IDProvider>
    </MovingBallsBackground>
  );
}

export default App;
