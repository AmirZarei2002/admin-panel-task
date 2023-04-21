import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './Layouts/mainLayout';
import ManagementDashboard from './pages/ManagementDashboard';

const App = () => {
    return (
        <MainLayout>
            <BrowserRouter>
                <Routes>
                    {/* Admin Management Dashboard */}
                    <Route path="/admin" element={<ManagementDashboard />} />
                </Routes>
            </BrowserRouter>
        </MainLayout>
    );
};

export default App;
