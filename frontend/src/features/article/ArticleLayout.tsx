import { useEffect } from "react";
import ArticleList from "./components/ArticleList";
import { Book } from "react-feather";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import type { PaginationProps } from 'antd';

export default function ArticleLayout() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const page = Number(searchParams.get("page"));

    const onChange: PaginationProps['onChange'] = (pageNumber) => {
        searchParams.set("page", pageNumber.toString());
        setSearchParams(searchParams);
    };
    
    useEffect(() => {
        if (!page) {
            searchParams.set("page", "1");
            setSearchParams(searchParams);
        }
    }, [searchParams, page, setSearchParams]);

    return (
        <div className='p-2'>
            <ArticleList/>

            <Pagination
                defaultCurrent={1}
                total={50}
                align="center"
                onChange={onChange}
            />

            <button
                className="fixed bottom-2 right-2
                    py-3 px-5 bg-white flex items-center
                    border border-gray-line rounded-full
                    duration-200 active:scale-95
                "
                onClick={() => navigate("/article/new")}
            >
                <Book size={24} strokeWidth={2} color="#333"/>
                <span className="mb-0.5 ml-1 font-semibold">Tạo bài viết mới</span>
            </button>
        </div>
    );
};