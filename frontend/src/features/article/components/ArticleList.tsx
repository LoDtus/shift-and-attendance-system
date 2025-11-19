export default function ArticleList() {
    const arr = [1,1,1,11,1,1,1];

    return (
        <div>
            <h2 className="text-2xl font-semibold">Các bài viết</h2>

            <div className="flex flex-col">
                {arr?.map((article, articleIndex) => {
                    return (
                        <button
                            key={articleIndex}
                            className={`p-3 text-left border border-gray-line rounded-md
                                min-w-0 flex items-start
                                duration-200 hover:bg-gray-hover active:scale-98
                                ${articleIndex > 0 && 'mt-2'}
                            `}
                        >
                            <img
                                className="w-[100px] mr-3 border border-gray-line rounded-md"
                                src="/images/People-no1.jpg"
                            />
                            <div>
                                <h3 className="text-lg font-semibold">Tiêu đề bài viết</h3>
                                <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas expedita ullam iusto omnis reprehenderit odio ipsum, doloribus commodi distinctio ut obcaecati, magnam, asperiores ipsam quia sit neque laboriosam labore exercitationem?</div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};