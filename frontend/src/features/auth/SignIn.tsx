import { useEffect, useState } from "react";
import { Button, Checkbox, Input, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const DEFAULT_FORM = {
    usernameOrEmail: "",
    password: "",
    rememberMe: false,
}

export default function SignIn() {
    const [form, setForm] = useState(DEFAULT_FORM);

    const startSignIn = async () => {

    }

    useEffect(() => {
        console.log(form);
        
    }, [form])

    return (
        <div className="p-12">
            <h1 className="mb-3 font-semibold text-2xl text-center">Đăng nhập</h1>

            <label htmlFor="signin-username" className="shrink-0">Tên đăng nhập hoặc email</label>
            <Input
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, usernameOrEmail: e.target.value})}
                id="signin-username" name="signin-username"
            />

            <label htmlFor="signin-password" className="shrink-0">Mật khẩu</label>
            <Input
                className=""
                placeholder="Aa"
                onBlur={(e) => setForm({...form, usernameOrEmail: e.target.value})}
                id="signin-password" name="signin-password"
            />

            <div className="flex items-center">
                <label htmlFor="signin-rememberMe" className="mb-1 mr-1 cursor-pointer">
                    <Text>Duy trì đăng nhập</Text>
                </label>
                <Checkbox
                    id="signin-rememberMe"
                    onChange={() => setForm({...form, rememberMe: !form.rememberMe})}
                ></Checkbox>
            </div>

            <Button
                className="w-full !font-semibold"
                type="primary"
                onClick={() => startSignIn()}
            >
                Đăng nhập
            </Button>

            <div className="flex">
                <span>Bạn chưa có tài khoản?</span>
                <a href="">
                    Đăng ký
                </a>
            </div>
        </div>
    );
};