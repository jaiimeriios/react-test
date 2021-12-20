import Contador from './components/Contador';
import Greeter from './components/Greeter';
import Header from './components/Header';
import Mood from './components/Mood';

function App() {
    return (
        <>
            <Header title="React Intro" />
            <Greeter name="Lorem" age="666" emocion={4} />
            <Greeter name="Ipsum" emocion={2} />
            <Contador numero={2} />
            <Mood />
        </>
    );
}

export default App;
