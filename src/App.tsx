import { BrowserRouter } from 'react-router-dom'
import './App.css'
import RoutesApp from './configs/route'
import {NextUIProvider} from "@nextui-org/react";

function App() {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <RoutesApp />
            </NextUIProvider>
        </BrowserRouter>
    )
}

export default App
