import Header from './components/Header/Header';
import Posts from './components/Post/Posts';
import Pets from './components/Pets/Pets';

import EventHandle from './components/EventHandle';
import Time from './components/Time';
import MathGame from './components/MathGame';
import Fetch from './components/Fetch/Fetch';

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

                <Fetch />
                <br /><br /><br /><br /><br /><br />
            </main>
        </>
    );
};

export default App;
