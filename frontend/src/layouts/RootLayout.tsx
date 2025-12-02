import { Outlet } from "react-router-dom";
import NavigationBar from "../features/shared/NavigationBar";
import Header from "../features/shared/Header";
import Footer from "../features/shared/Footer";

export default function RootLayout() {
    return (
        <div className='w-full h-full'>
            <Header/>
            <div className="grow flex">
                <NavigationBar/>
                <div className="grow flex flex-col">
                    <div className="grow">
                        <Outlet/>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
};