import './App.css';
import SearchAppBar from './components/nav-bar';
import BasicCard from './components/main';
import Foo from './components/footer';

// const Card = (props) => {
//   console.log(props);
// return (
// <div>
//   <h2>{v}</h2>
// </div>
// )
// }

function App() {
  // const arr = ["one","two","three"];
  return (
    <div>
      {/* {
        arr.map((v,i) => {
       <Card value={v}/>
        })}; */}
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
