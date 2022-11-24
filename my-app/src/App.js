import * as React from 'react';
import Container from './components/Container';
import BottomNavigation from './components/BottomNavigation';
import ResponsiveAppBar from './components/Appbar';
import Grid from './components/Grid';
import ComplexButtons from './components/ComplexButtons';


function App() {

    return (
        <>
            <ResponsiveAppBar />
            <main>
                <div >
                    <ComplexButtons />
                    <BottomNavigation />
                </div>
            </main>
        </>
    );
}

export default App;
