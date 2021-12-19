import Greeter from './components/Greeter';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header title="React Intro" />
            <Greeter name="Lorem" age="666" emocion={4} />
            <Greeter name="Ipsum" emocion={2} />
        </>
    );
}

export default App;
