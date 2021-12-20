import { useState } from 'react';

function Mood() {
    const [mood, setMood] = useState(true);

    const toggleMood = () => {
        setMood(!mood)
    };

    return (
        <span onMouseEnter={toggleMood}>
            {
                mood ? '😃' : '😒'
            }
        </span>
    );
}

export default Mood;
