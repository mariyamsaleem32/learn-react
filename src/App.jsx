import './App.css';
import SearchAppBar from './components/nav-bar';
import BasicCard from './components/card';
import Foo from './components/button';

function App() {
  return (
    <div>
      <header>      
        <SearchAppBar/>
      </header>
      <main>
      <BasicCard/>
      </main>
      
      <footer>
        <Foo/>
      </footer>
      </div>
  );
}

export default App;
