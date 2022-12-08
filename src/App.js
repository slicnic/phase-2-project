import './App.css';
import Header from './components/Header'
import CurrentAnimals from './components/CurrentAnimals'
import NewAnimalForm from './components/NewAnimalForm';

function App() {
    return (
        <>
            <Header />
            <NewAnimalForm />
            <CurrentAnimals />
        </>
    );
}

export default App;