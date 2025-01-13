import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  return (
    <div className="flex flex-col justify-around min-h-screen font-sans">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
