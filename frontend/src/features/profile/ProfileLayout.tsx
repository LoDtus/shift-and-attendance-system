import {
    faAddressCard,
    faCakeCandles,
    faEnvelope,
    faUser,
    faPhone,
    faUserTie,
    faTag,
    faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useState } from "react";

export default function ProfileLayout() {
    const [openEditProfile, setOpenEditProfile] = useState(false);

    const toggleEditForm = () => {


        setOpenEditProfile(!openEditProfile);
    }

    const startSignOut = async () => {
        const response = ""
    };

    return (
        <div>
            <div className="w-full flex border-b">
                <div className="p-8 border-r">
                    <button
                        className="w-[200px] h-[200px] p-1 rounded-full overflow-hidden
                        duration-200 hover:bg-gray-200"
                    >
                        <img
                            className="aspect-square rounded-full object-cover"
                            src="/images/Avatar.jpg"
                        />
                    </button>

                    <Button
                        onClick={() => toggleEditForm()}
                    >
                        Cập nhật
                    </Button>
                    <Button
                        variant="solid" color="danger"
                        onClick={() => { }}
                    >
                        Đăng xuất
                    </Button>
                </div>

                <div className="px-8 py-6">
                    <div className="flex items-center">
                        <span className="text-2xl font-semibold mr-2">Nguyễn Hàn Hải Linh</span>
                        <span className={`pb-[2px] px-5 font-semibold rounded-full
                            bg-green-400`}
                        >
                            Đang làm việc
                        </span>
                    </div>
                    <div className="w-full mt-2 border flex">
                        <div className="basis-[50%]">
                            <span className="font-semibold text-lg">Thông tin cá nhân</span>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faAddressCard}/>
                                <span>Mã nhân viên:</span>
                                <span>IT-001</span>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faEnvelope}/>
                                <span>Email cá nhân:</span>
                                <span>example@email.com</span>
                            </div>
                            <div className="flex items-center">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faCakeCandles}/>
                                <div className="flex flex-col">
                                    <span className="text-sm text-gray-500">Ngày sinh</span>
                                    <span>22/02/2022</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-[5%_95%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faUser}/>
                                <span className="flex"><span className="shrink-0 mr-1 font-semibold">Giới tính:</span>Female</span>
                            </div>
                        </div>

                        <div className="basis-[50%]">
                            <span className="font-semibold text-lg">Thông tin công việc</span>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faUserTie}/>
                                <span>Nhân viên</span>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faTag}/>
                                <span>Phòng Công nghệ thông tin</span>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faEnvelope}/>
                                <span>example@email.com</span>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faPhone}/>
                                <span>0912.999.999.999</span>
                            </div>
                            <div className="grid grid-cols-[20%_80%]">
                                <FontAwesomeIcon className="mt-1 mr-1" icon={faBusinessTime}/>
                                <span>2 năm</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 px-6 py-5 border rounded-lg">
                        <span className="font-semibold text-xl">Giới thiệu</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis iste reprehenderit suscipit reiciendis. Qui molestiae cum explicabo corrupti, rem nulla tempora est sit atque corporis quaerat tempore voluptatem, rerum fuga.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};