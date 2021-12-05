import { useState } from "react";



function AddTask({onAdd}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) {
            console.error("no hay texto")
            return
        } 
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="">Add Task</label>
            <input
                type="text"
                placeholder="add task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <label htmlFor="">Day and Time</label>
            <input
                type="text"
                placeholder="add task"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            <label htmlFor="">Set Reminder</label>
            <input
                type="checkbox"
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
            />

            <input type="submit" value="Save" />
        </form>
    );
}

export default AddTask;
