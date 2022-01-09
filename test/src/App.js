import React from 'react';
import Posts from './components/Post/Posts';
import EventHandle from './components/EventHandleing/EventHandle';
import Pets from './components/Pets/Pets';
import Header from './components/Header/Header';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <EventHandle />

                <Pets />

                <Posts title="posts" />
            </main>
        </>
    );
};

export default App;
