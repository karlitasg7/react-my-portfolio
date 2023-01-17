import './App.css';
import {ListOfSocial} from "../components/ListOfSocial";
import {About} from "../components/About";
import {Menu} from "../components/Menu";
import {Experience} from "../components/Experience";

import styles from "./App.css"

function App() {
    return (
        <div className={styles.app}>
            <Menu/>
            <About/>
            <ListOfSocial/>
            <Experience/>
        </div>
    );
}

export default App;
