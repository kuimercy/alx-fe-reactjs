import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <div className="App">
      <WelcomeMessage />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
