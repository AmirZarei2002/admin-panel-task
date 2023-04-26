import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './Layouts/mainLayout';
import ManagementDashboard from './pages/ManagementDashboard';
import CompanyManagement from './pages/CompanyManagement';

const App = () => {
    return (
        <MainLayout>
            <BrowserRouter>
                <Routes>
                    {/* Admin Management Dashboard */}
                    <Route path="/" element={<ManagementDashboard />} />
                    <Route path="/create/company" element={<CompanyManagement />} />
                </Routes>
            </BrowserRouter>
        </MainLayout>
    );
};

export default App;
