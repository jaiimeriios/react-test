import React from 'react';
import Posts from './components/Post/Posts';
import EventHandle from './components/EventHandleing/EventHandle';

const App = () => {
    return (
        <div className="App">
            <EventHandle />

            <Posts title="TITULO" />
        </div>
    );
};

export default App;
