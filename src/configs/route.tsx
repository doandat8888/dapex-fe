import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Transaction from '../pages/Transaction';

const RoutesApp = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default RoutesApp;