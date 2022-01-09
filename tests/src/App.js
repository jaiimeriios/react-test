import React from 'react';
import Posts from './components/Post/Posts';
import EventHandle from './components/EventHandleing/EventHandle';
import Pets from './components/Pets/Pets';

const App = () => {
    return (
        <div className="App">

            <EventHandle />

            <Pets />

            <Posts title="TITULO" />
        </div>
    );
};

export default App;
