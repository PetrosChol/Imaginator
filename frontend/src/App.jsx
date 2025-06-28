import { useContext } from "react";
import ModeContext from "./store/mode-store";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css"

const App = () => {

  const {darkMode, setDarkMode} = useContext(ModeContext)

  function toggleTheme() {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-stretch min-h-screen">
        <Header isDark={darkMode} toggleTheme={toggleTheme}/>
        <Main />
      </div>
    </div>
  );
};

export default App;
