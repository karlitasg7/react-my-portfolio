import './App.css';
import {ListOfSocial} from "../components/ListOfSocial";
import {About} from "../components/About";

import styles from "./App.css"

function App() {
    return (
        <div className={styles.app}>
            <About/>
            <ListOfSocial/>
        </div>
    );
}

export default App;
