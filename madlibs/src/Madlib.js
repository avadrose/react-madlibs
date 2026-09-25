import { useState } from "react";
import MadlibForm from "./MadlibForm";
import Story from "./Story";

function Madlib() {
  const [storyData, setStoryData] = useState(null);

  function createStory(data) {
    setStoryData(data);
  }

  function restart() {
    setStoryData(null);
  }

  return (
    <div>
      <h1>Madlibs!</h1>

      {storyData ? (
        <Story data={storyData} restart={restart} />
      ) : (
        <MadlibForm createStory={createStory} />
      )}
    </div>
  );
}

export default Madlib;