//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { TodoItem } from "./MyComponents/TodoItem";
import { Footer } from "./MyComponents/Footer";
function App() {
  let todos =[
    {
      SrNo: 1,
      title: "Go to the Mall",
      desc: "Inorbit Mall"
    },
    {
      SrNo: 2,
      title: "Go to the School",
      desc: "Going School"
    },
    {
      SrNo: 3,
      title: "Go to the Mall",
      desc: "Inorbit Mall"
    }
  ]
  return (
    <>
      <Header title ="My Todos List" searchBar={false}/>
      <Todos todos={todos}/>
      <Footer />
      <TodoItem />
    </>
  );
}

export default App;
