import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesApp from './configs/route'
import {NextUIProvider} from "@nextui-org/react";
import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <AuthProvider>
                    <RoutesApp />
                </AuthProvider>
            </NextUIProvider>
        </BrowserRouter>
    )
}

export default App
