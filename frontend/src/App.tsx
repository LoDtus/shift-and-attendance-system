import './App.css'
import RootLayout from './layouts/RootLayout'
import AuthLayout from './features/auth/AuthLayout'
import ForgotPassword from './features/auth/ForgotPassword'
import ResetPassword from './features/auth/ResetPassword'
import SignIn from './features/auth/SignIn'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from './features/dashboard/DashboardLayout'
import EmployeeList from './features/employee/EmployeeList'
import ProfileLayout from './features/profile/ProfileLayout'
import SettingLayout from './features/setting/SettingLayout'
import NotificationLayout from './features/notification/NotificationLayout'
import ConfigLayout from './features/config/ConfigLayout'
import ScheduleLayout from './features/schedule/ScheduleLayout'
import AttendanceLayout from './features/attendance/AttendanceLayout'
import PositionConfig from './features/config/PositionConfig'
import RoleConfig from './features/config/RoleConfig'
import ContractLayout from './features/contract/ContractLayout'
import ArticleLayout from './features/article/ArticleLayout'
import CustomEditor from './features/article/components/ckeditor/CustomEditor';

export default function App() {
    return (
        <div className='w-screen h-screen'>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route index element={<SignIn/>}/>
                    <Route path="sign-in" element={<SignIn/>}/>
                    <Route path="forgot-password" element={<ForgotPassword/>}/>
                    <Route path="reset-password" element={<ResetPassword/>}/>
                </Route>

                <Route path="/" element={<RootLayout/>}>
                    <Route index element={<DashboardLayout/>}/>
                    <Route path="dashboard" element={<DashboardLayout/>}/>
                    <Route path="employee" element={<EmployeeList/>}/>
                    <Route path="setting" element={<SettingLayout/>}/>
                    <Route path="notification" element={<NotificationLayout/>}/>
                    <Route path="profile" element={<ProfileLayout/>}/>
                    <Route path="config" element={<ConfigLayout/>}/>
                    <Route path="config/position" element={<PositionConfig/>}/>
                    <Route path="config/role" element={<RoleConfig/>}/>
                    <Route path="schedule" element={<ScheduleLayout/>}/>
                    <Route path="attendance" element={<AttendanceLayout/>}/>
                    <Route path="contract" element={<ContractLayout/>}/>

                    <Route path="article" element={<ArticleLayout/>}/>
                    <Route path="article/new" element={<CustomEditor/>}/>
                    <Route path="article/:id" element={<ArticleLayout/>}/>
                    <Route path="article/:id/edit" element={<ArticleLayout/>}/>
                </Route>
            </Routes>
        </div>
    );
};