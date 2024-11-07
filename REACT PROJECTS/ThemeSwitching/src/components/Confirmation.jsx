import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Confirmation = () => {
    const { formData, setCurrentStep } = useContext(AppContext);

    const handleSubmit = () => {
        console.log(formData);  // Log form data to console
    };

    return (
        <div>
            <h2>Confirmation</h2>
            <p>Full Name: {formData.fullName}</p>
            <p>Date of Birth: {formData.dob}</p>
            <p>Country: {formData.country}</p>
            <p>Username: {formData.username}</p>
            <p>Email: {formData.email}</p>
            <button onClick={() => setCurrentStep(2)}>Back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Confirmation;
