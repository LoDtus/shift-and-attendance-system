import { Outlet } from "react-router-dom";
import NavigationBar from "../features/shared/NavigationBar";
import Header from "../features/shared/Header";

export default function RootLayout() {
    return (
        <div className='w-full h-full flex flex-col'>
            <Header/>
            <div className="grow flex">
                <NavigationBar/>
                <div className="grow">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};