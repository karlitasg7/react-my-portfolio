import React from "react";
import './App.css';
import {ListOfSocial} from "../components/ListOfSocial";
import {About} from "../components/About";
import {Menu} from "../components/Menu";
import {Experience} from "../components/Experience";
import {ProjectsList} from "../components/ProjectsList";
import {EducationList} from "../components/EducationList";
import {Contact} from "../components/Contact";
import styles from "./App.css"

function App() {

    const [selectedOption, setSelectedOption] = React.useState('about');

    return (
        <div className={styles.app}>
            <Menu
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
            />

            {selectedOption === 'about' && (
                <About/>
            )}

            {selectedOption === 'experience' && (
                <Experience/>
            )}

            {selectedOption === 'projects' && (
                <ProjectsList/>
            )}

            {selectedOption === 'education' && (
                <EducationList/>
            )}

            {selectedOption === 'contact' && (
                <Contact/>
            )}

            <ListOfSocial/>
        </div>
    );
}

export default App;
