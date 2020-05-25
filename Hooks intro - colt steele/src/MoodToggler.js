import React, { useState } from "react";

const MoodToggler = () => {

  const [isHappy, setIsHapy] = useState(true);
  const toggleMood = () => setIsHapy(!isHappy);

  return (
    <div className="mood">
      <button onClick={toggleMood}>
        Mood
      </button>
      <span style={{backgroundColor: isHappy ? 'red' : 'green'}}>
        {isHappy ? "😀" : "😐"}
      </span>
    </div>
  );
};

export default MoodToggler;
