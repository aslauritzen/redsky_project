import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import MainAppBar from './components/MainAppBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';

function App() {
    return (
        <RecoilRoot>
            <MainAppBar />
            <React.Suspense fallback={<Skeleton />}>
                <AddUser />
                <UserList />
                <ToastContainer />
            </React.Suspense>
        </RecoilRoot>
    );
}

export default App;
