import Header from './components/Header/Header';
import Posts from './components/Post/Posts';
import Pets from './components/Pets/Pets';

import EventHandle from './components/EventHandle';
import Time from './components/Time';
import MathGame from './components/MathGame';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Time />


                <MathGame />


                <EventHandle />

                <Pets />

                <Posts title="posts" />
            </main>
        </>
    );
};

export default App;
