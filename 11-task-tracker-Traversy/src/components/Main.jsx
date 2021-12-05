// import Button from './Button';
import Tasks from './Tasks';
import AddTask from './AddTask';
import { useState } from 'react';
import Nav from './Nav';

function Main() {
    const tasksArray = [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30px',
            reminder: true,
        },
        {
            id: 2,
            text: 'Work Meeting',
            day: 'Feb 6th at 1:45px',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shooping',
            day: 'Feb 6th at 4:30px',
            reminder: false,
        },
    ];


    const [tasks, setTasks] = useState(tasksArray);
    const [showAddTask, setShowAddTask] = useState(true);

    
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        console.log(id);
    };

    const toggleReminder = (id) => {
        console.log(id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000 + 1);
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
    };

    return (
        <main>
            <Nav
                buttonClick={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />

            {/* <Button
                color="lightseagreen"
                text="Toggle Form"
                onClick={() => setShowAddTask(!showAddTask)}
            /> */}

            {showAddTask && <AddTask onAdd={addTask} />}

            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No Tasks'
            )}
        </main>
    );
}

export default Main;
