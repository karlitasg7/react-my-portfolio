import React from "react";
import './App.css';
import {ListOfSocial} from "../components/ListOfSocial";
import {About} from "../components/About";
import {Menu} from "../components/Menu";
import {ProjectsList} from "../components/ProjectsList";
import {EducationList} from "../components/EducationList";
import {Contact} from "../components/Contact";
import styles from "./App.css"
import ExperienceList from "../components/ExperienceList";

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
                <ExperienceList/>
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
