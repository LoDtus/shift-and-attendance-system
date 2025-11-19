import ArticleList from "./components/ArticleList";
import CustomEditor from "./components/ckeditor/CustomEditor";
import { Book } from "react-feather";

export default function ArticleLayout() {
    

    return (
        <div className='p-2'>
            {/* <CustomEditor/> */}
            <ArticleList/>

            <button
                className="fixed bottom-2 right-2
                    py-3 px-5 bg-white flex items-center
                    border border-gray-line rounded-full
                    duration-200 active:scale-95
                "
                onClick={() => {}}
            >
                <Book size={24} strokeWidth={2} color="#333"/>
                <span className="mb-0.5 ml-1 font-semibold">Tạo bài viết mới</span>
            </button>
        </div>
    );
};