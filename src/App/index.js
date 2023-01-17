import './App.css';
import {ListOfSocial} from "../components/ListOfSocial";
import {About} from "../components/About";
import {Menu} from "../components/Menu";

import styles from "./App.css"

function App() {
    return (
        <div className={styles.app}>
            <Menu/>
            <About/>
            <ListOfSocial/>
        </div>
    );
}

export default App;
