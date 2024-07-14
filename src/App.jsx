import { useState } from "react";
import "./App.css";
import first from "./assets/model_s_paintings/Stealth Grey/01.jfif";
import second from "./assets/model_s_paintings/Stealth Grey/02.jfif";
import third from "./assets/model_s_paintings/Stealth Grey/03.jfif";
import fourth from "./assets/model_s_paintings/Stealth Grey/04.jfif";
import black from "./assets/model_s_paintings/Stealth Grey/interiors/black.jfif";
import white from "./assets/model_s_paintings/Stealth Grey/interiors/white.jfif";
import cream from "./assets/model_s_paintings/Stealth Grey/interiors/cream.jfif";

function App() {
  const exteriorColors = [
    "steal_gray",
    "white_pearl",
    "deep_metalic_blue",
    "ultra_red",
    "lunar_silver",
  ];
  const interiorColors = ["black", "white", "cream"];

  const imagesList = {
    steal_gray: {
      exteriors: [first, second, third, fourth],
      interiors: [black, white, cream],
    },
    white_pearl: {
      exteriors: [first, second, third, fourth],
      interiors: [black, white, cream],
    },
    deep_metalic_blue: {
      exteriors: [first, second, third, fourth],
      interiors: [black, white, cream],
    },
    ultra_red: {
      exteriors: [first, second, third, fourth],
      interiors: [black, white, cream],
    },
    lunar_silver: {
      exteriors: [first, second, third, fourth],
      interiors: [black, white, cream],
    },
  };
  const [currentColor, setCurrentColor] = useState("steal_gray");
  const [currentView, setCurrentView] = useState("exteriors");
  const [currentImageNumber, setCurrentImageNumber] = useState(0);

  const handleExteriorColor = (color) => {
    setCurrentColor(color);
    setCurrentView("exteriors");
    setCurrentImageNumber(0);
  };

  const handleInteriorColor = (colorIndex) => {
    setCurrentView("interiors");
    setCurrentImageNumber(colorIndex);
    console.log(imagesList[currentColor][currentView][colorIndex]);
  };

  const maxImageNumber = imagesList[currentColor][currentView].length - 1;
  const minImageNumber = 0;

  const handleNextNumber = () => {
    currentImageNumber < maxImageNumber &&
      setCurrentImageNumber(currentImageNumber + 1);
  };

  const handlePreviousNumber = () => {
    currentImageNumber > minImageNumber &&
      setCurrentImageNumber(currentImageNumber - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "1rem",
      }}
    >
      <img
        src={imagesList[currentColor][currentView][currentImageNumber]}
        style={{ width: "200px", height: "200px" }}
        alt="Car view"
      />
      <div style={{ display: "flex" }}>
        <button onClick={handlePreviousNumber}>{"<"}</button>

        {currentImageNumber + 1}
        <button onClick={handleNextNumber}>{">"}</button>
      </div>
      <span>colores exteriores</span>
      {exteriorColors.map((option, index) => {
        return (
          <button key={index} onClick={() => handleExteriorColor(option)}>
            {option}
          </button>
        );
      })}
      <br />
      <span>colores interiores</span>
      {interiorColors.map((option, index) => {
        return (
          <button key={index} onClick={() => handleInteriorColor(index)}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default App;
