import React from 'react';
import { AppProvider } from './AppContext';
import MainForm from './MainForm';

const App = () => (
    <AppProvider>
        <MainForm />
    </AppProvider>
);

export default App;
