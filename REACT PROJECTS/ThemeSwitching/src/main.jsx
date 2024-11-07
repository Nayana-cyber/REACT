import React, { useContext } from 'react';
import { AppContext } from './components./AppContext';
import PersonalInfo from './PersonalInfo';
import AccountSetup from './AccountSetup';
import Confirmation from './Confirmation';
import ThemeSwitcher from './ThemeSwitcher';

const MainForm = () => {
    const { currentStep, setCurrentStep, theme } = useContext(AppContext);

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);

    return (
        <div className={`form-container ${theme}`}>
            <ThemeSwitcher />
            {currentStep === 1 && <PersonalInfo />}
            {currentStep === 2 && <AccountSetup />}
            {currentStep === 3 && <Confirmation />}
            {currentStep < 3 && <button onClick={nextStep}>Next</button>}
            {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        </div>
    );
};

export default MainForm;      


