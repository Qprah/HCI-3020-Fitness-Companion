import React, { useState } from "react";
import "./MuscleGroupSelector.css";
import musclesData from "../../assets/musclesData";
import Dialog from "../dialog/dialog";
import image from "../../assets/image-orig.png";
import Conversation from "../dialog/conversation";
import image1 from "../../assets/img.png";
import { Dropdown } from "react-bootstrap";
import {
  dumbbell,
  machine,
  none,
  ibasic,
  iintermediate,
  iadvanced,
} from "../../assets/icons";
import { motion } from "framer-motion";
import { Card, Image, ListGroup } from "react-bootstrap";

const MuscleGroupSelector = ({
  onCategorySelected,
  onDifficultySelected,
  onMuscleSelected,
}) => {
  const specialMuscles = ["Biceps", "Calves", "Triceps", "Forearms"];

  const [clickedMuscle, setClickedMuscle] = useState(null);

  const [openDia, setOpenDia] = useState(false);
  // yuze
  const handleGoBack = () => {
    setClickedMuscle(null);
    setOpenDia(false);
    onMuscleSelected(null);
  };

  const handDone = () => {
    setOpenDia(false);
  };

  const [conversationStage, setConversationStage] = useState(null);

  const handleStage = (stage, what) => {
    setConversationStage(stage, what);
  };

  const handleConvStage = (stage, what) => {
    setConversationStage(stage);
    onCategorySelected(null);
    onDifficultySelected(null);
    onMuscleSelected(null);
  };

  // yuze

  const handleMuscleClick = (muscle) => {
    setClickedMuscle(muscle);

    // yuze
    handleStage(muscle);
    setOpenDia(true);
    onMuscleSelected(muscle);
    onCategorySelected(null);
    onDifficultySelected(null);
    // yuze
  };

  const handleHoverEffect = (muscleClass) => {
    document.querySelectorAll(`.${muscleClass}`).forEach((path) => {
      path.style.stroke = "black";
      path.style.fill = "red";
    });
  };

  const handleHoverLeave = (muscleClass) => {
    document.querySelectorAll(`.${muscleClass}`).forEach((path) => {
      path.style.stroke = "transparent";
      path.style.fill = "transparent";
    });
  };

  const [isToggled, setToggled] = useState(true);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  const [selectedFilter, setSelectedFilter] = useState("includeAnd");
  const [selectedEquipment, setSelectedEquipment] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("novice");

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
  };

  const handleEquipmentChange = (value) => {
    setSelectedEquipment(value);
  };

  const handleDifficultyChange = (value) => {
    setSelectedDifficulty(value);
  };

  const categories = [
    { id: 1, name: "Free weight", icon: dumbbell },
    { id: 2, name: "Machine", icon: machine },
    { id: 3, name: "No equipment", icon: none },
  ];

  const difficulties = [
    { id: 1, name: "Novice", icon: ibasic },
    { id: 2, name: "Intermediate", icon: iintermediate },
    { id: 3, name: "Expert", icon: iadvanced },
  ];

  const renderCategories = () =>
    categories.map((category) => (
      <ListGroup.Item
        key={category.id}
        action
        className="centered-list-item"
        style={{ borderRadius: "0.25rem" }}
      >
        {category.icon && (
          <Image
            src={category.icon}
            style={{ width: "1.8rem", height: "1.8rem", marginRight: "0.5rem" }}
            alt={category.name}
          />
        )}
        {category.name}
      </ListGroup.Item>
    ));

  const renderDifficulties = () =>
    difficulties.map((difficulty) => (
      <ListGroup.Item
        key={difficulty.id}
        action
        className={"centered-list-item"}
      >
        {difficulty.icon && (
          <Image
            src={difficulty.icon}
            style={{
              width: "1.8rem",
              height: "1.8rem",
              marginRight: "0.5rem",
              borderRadius: "0rem",
            }}
            alt={difficulty.name}
          />
        )}
        {difficulty.name}
      </ListGroup.Item>
    ));

  const renderMuscles = () => {
    return musclesData.map((muscleGroup) => {
      if (specialMuscles.includes(muscleGroup.dataMuscle)) {
        return (
          <g
            key={muscleGroup.dataMuscle}
            className="muscle-group"
            onMouseEnter={() =>
              handleHoverEffect(muscleGroup.dataMuscle.toLowerCase())
            }
            onMouseLeave={() =>
              handleHoverLeave(muscleGroup.dataMuscle.toLowerCase())
            }
          >
            {muscleGroup.paths.map((path, pathIndex) => (
              <path
                key={`${muscleGroup.dataMuscle}-${pathIndex}`}
                {...path}
                onClick={() => handleMuscleClick(path.dataMuscle)}
                className={`muscle-area ${muscleGroup.dataMuscle.toLowerCase()}`}
                fill="transparent" // Set your desired default color
              />
            ))}
          </g>
        );
      } else {
        // For other muscles
        return (
          <muscleGroup.type
            key={muscleGroup.dataMuscle}
            {...muscleGroup}
            data-muscle={muscleGroup.dataMuscle}
            onClick={(e) => {
              const clickedMuscle = e.target.getAttribute("data-muscle");
              handleMuscleClick(clickedMuscle);
            }}
            fill="transparent"
            onMouseEnter={(e) => {
              e.target.style.stroke = "black";
              e.target.style.fill = "red";
            }}
            onMouseLeave={(e) => {
              e.target.style.stroke = "transparent";
              e.target.style.fill = "transparent";
            }}
            className="muscle-area"
          />
        );
      }
    });
  };

  return (
    <div className="muscle-container">
      <div className="dropdown-container">
        <Dropdown drop='down'	>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Advanced
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <div className="advanced-container">
              <div className="inc-exc-container">
                {/* Filter options */}
                <div>
                  <label>
                    <input
                      type="radio"
                      value="includeAnd"
                      checked={selectedFilter === "includeAnd"}
                      onChange={() => handleFilterChange("includeAnd")}
                    />
                    &nbsp;Include And
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="includeOr"
                      checked={selectedFilter === "includeOr"}
                      onChange={() => handleFilterChange("includeOr")}
                    />
                    &nbsp;Include Or
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="exclude"
                      checked={selectedFilter === "exclude"}
                      onChange={() => handleFilterChange("exclude")}
                    />
                    &nbsp;Exclude
                  </label>
                </div>
              </div>

              <div>
                <div style={{ margin: "15px" }}>
                  <motion.Card
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      style={{
                        width: "100%",
                        height: "60%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card.Body>
                        <ListGroup className="centered-group-item">
                          {renderCategories()}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </motion.Card>
                </div>

                <div style={{ margin: "15px" }}>
                  <motion.Card
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <Card
                      style={{
                        width: "100%",
                        height: "60%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Card.Body>
                        <ListGroup className="centered-group-item">
                          {renderDifficulties()}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </motion.Card>
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="conversation-container">
        <Conversation stage={conversationStage} onStage={handleConvStage} />
      </div>
      <div className="muscle-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="muscle"
          viewBox="0 0 1280 2000"
          preserveAspectRatio="xMid YMid slice"
        >
          <image
            href={!isToggled ? image1 : image}
            width="100%"
            height="100%"
            className="muscle-image"
          />
          {isToggled && renderMuscles()}
        </svg>
      </div>

      <div className="toggle-container">
        <div className="toggle-text">
          <h5>
            Prioritize {isToggled ? "Male" : "Female"}{" "}
            Exercises&nbsp;&nbsp;&nbsp;
          </h5>
        </div>
        <div
          className={`toggle-switch ${isToggled ? "on" : "off"}`}
          onClick={handleToggle}
        >
          <div className="slider"></div>
        </div>
      </div>

      {openDia && (
        <div className="dialog-container">
          <Dialog
            onGoBack={handleGoBack}
            clickedMuscle={clickedMuscle}
            onCategorySelected={onCategorySelected}
            onDifficultySelected={onDifficultySelected}
            onMuscleSelected={onMuscleSelected}
            onStage={handleStage}
            onDone={handDone}
          />
        </div>
      )}
    </div>
  );
};

export default MuscleGroupSelector;
