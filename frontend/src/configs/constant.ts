import {
    faChartSimple,
    faGear,
    faUsers,
    faScrewdriverWrench,
    faClipboardList,
    faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export const NAVIGATION_BAR_MENU = [
    { path: "/dashboard", icon: faChartSimple, label: "Dashboard" },
    { path: "/article", icon: faChartSimple, label: "Article" },
    { path: "/schedule", icon: faClipboardList, label: "Schedule", subMenu: [
        { path: "/schedule/calendar", label: "Schedule Calendar" },
        { path: "/schedule/shift-management", label: "Shift Management" },
        { path: "/schedule/shift-requests", label: "Shift Requests" },
        { path: "/schedule/my-shifts", label: "My Shifts" },
        { path: "/schedule/register", label: "Register Shift" },
        { path: "/schedule/calendar", label: "My Calendar" },
    ] },
    { path: "/attendance", icon: faCalendarCheck, label: "Attendance", subMenu: [
        { path: "/attendance/list", label: "Attendance List" },
        { path: "/attendance/requests", label: "Attendance Requests" },
        { path: "/attendance/calendar", label: "Attendance Calendar" },
        { path: "/attendance/reports", label: "Attendance Reports" },
    ] },
    {
        path: "/employee", icon: faUsers, label: "Employee", subMenu: [
            { path: "/employee/list", label: "Employee List" },
            { path: "/employee/contracts", label: "Contracts" },
            { path: "/employee/onboarding", label: "Onboarding" },
            { path: "/employee/offboarding", label: "Offboarding" },
        ]
    },
    { path: "/config", icon: faScrewdriverWrench, label: "Config", subMenu: [
        { path: "/config/role", label: "Role" },
        { path: "/config/position", label: "Position" },
    ] },
    { path: "/setting", icon: faGear, label: "Setting" },
];