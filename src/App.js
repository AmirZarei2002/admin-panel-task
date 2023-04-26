import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './Layouts/mainLayout';
import ManagementDashboard from './pages/ManagementDashboard';
import UsersList from './pages/users-management/UsersList';
import NewCompany from './pages/company-management/NewCompany';

const App = () => {
    return (
        <MainLayout>
            <BrowserRouter>
                <Routes>
                    {/* Admin Management Dashboard */}
                    <Route path="/" element={<ManagementDashboard />} />
                    <Route path="/create/company" element={<NewCompany />} />
                    <Route path="/user-list" element={<UsersList />} />

                </Routes>
            </BrowserRouter>
        </MainLayout>
    );
};

export default App;
