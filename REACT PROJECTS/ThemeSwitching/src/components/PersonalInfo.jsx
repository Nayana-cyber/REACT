import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const PersonalInfo = () => {
    const { formData, setFormData } = useContext(AppContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2>Personal Information</h2>
            <input 
                type="text" 
                name="fullName" 
                placeholder="Full Name" 
                value={formData.fullName}
                onChange={handleChange} 
            />
            <input 
                type="date" 
                name="dob" 
                placeholder="Date of Birth" 
                value={formData.dob}
                onChange={handleChange} 
            />
            <select 
                name="country" 
                value={formData.country}
                onChange={handleChange}
            >
                <option value="">Select Country</option>
                {/* Populate countries here */}
            </select>
        </div>
    );
};

export default PersonalInfo;
