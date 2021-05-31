import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import MainAppBar from './components/MainAppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <RecoilRoot>
            <MainAppBar />
            <React.Suspense fallback={<div>Loading...</div>}>
                <AddUser />
                <UserList />
                <ToastContainer />
            </React.Suspense>
        </RecoilRoot>
    );
}

export default App;
