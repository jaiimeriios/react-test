import Cart from './components/Cart';
import Contador from './components/Contador';
import Greeter from './components/Greeter';
import Header from './components/Header';
import Mood from './components/Mood';

const items = [
    { id: 1, name: 'taco', price: 2.25, qty: 2 },
    { id: 2, name: 'beans', price: 1.99, qty: 3 },
    { id: 3, name: 'soda', price: 1.55, qty: 5 },
];

function App() {
    return (
        <>
            <Header title="React Intro" />
            <Cart initialItems={items} />
            <Greeter name="Lorem" age="666" emocion={4} />
            <Greeter name="Ipsum" emocion={2} />
            <Contador numero={2} />
            <Mood />
        </>
    );
}

export default App;
