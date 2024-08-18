import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainComponent from "./components/MainContent";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div className="App">
      <WelcomeMessage/>
      <Header/>
      <MainComponent/>
      <Footer/>
      </div>
  );
}

export default App;
