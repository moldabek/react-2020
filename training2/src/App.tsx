import React from 'react';
import './App.css';
import Repositories from "./Repositories";
import RepositoriesHooks from "./RepositoriesHooks";
// import Table from "./components/Table";
// import Welcome from "./components/Ticket";
// import { Counter } from "./components/Counter";

// const new_user = {
//     name: '',
//     age: 0,
//     dateOfBirth: '',
//     email: ''
// }
function App(){
    return(
        // <Table initialUsers={new_user}></Table>
        <div className={'container'}>
            <div className={'App'}>
                <h1>HOC</h1>
                    <Repositories></Repositories>
            </div>
            <div className={'App'}>
                <h1>Hooks</h1>
                    <RepositoriesHooks></RepositoriesHooks>
            </div>
        </div>
    );
}
// function App({initialCount}:Props) {
//     let l = []
//     const [count, setCount] = useState(initialCount)
//     l.push(initialCount)
//     return (
//       <div>
//           <button className="btn" onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
//           <span>{count}</span>
//           <button className="btn" onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
//           <ul>
//               <li>{l}</li>
//           </ul>
//       </div>
//     );
// }

export default App;
