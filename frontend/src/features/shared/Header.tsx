import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    return (
        <div id="header" className="p-2 flex justify-between items-center border-b border-gray-line">
            <h1 className="shrink-0 ml-2 pb-1 font-semibold text-2xl cursor-pointer" onClick={() => navigate("/")}>
                Demo Company
            </h1>

            <div className="h-full flex items-center">
                <Input
                    className="h-full! w-[500px]!"
                    placeholder="Tìm kiếm"
                    onChange={(e) => setKeyword(e.target.value)}
                    allowClear
                />
                
                <button
                    className="h-full mx-2 aspect-square rounded-full
                        duration-200 hover:bg-gray-hover active:scale-90"
                >
                    <FontAwesomeIcon icon={faBell} />
                </button>
                
                <img
                    className="h-9 w-9 aspect-square object-cover rounded-full
                        cursor-pointer duration-200 active:scale-90"
                    src="/images/Avatar.jpg"
                    onClick={() => navigate("/profile")}
                />
            </div>
        </div>
    );
};