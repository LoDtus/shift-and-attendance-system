export default function ArticleList() {
    const arr = [1,1,1,11,1,1,1];

    return (
        <div className="border">
            <h2 className="text-2xl font-semibold">Các bài viết</h2>

            <div>
                {arr?.map((article, articleIndex) => {
                    return (
                        <button
                            key={articleIndex}
                            className={`w-full p-3 text-left border border-gray-line rounded-md
                                flex items-start
                                duration-200 hover:bg-gray-hover active:scale-98
                                ${articleIndex > 0 && 'mt-2'}
                            `}
                        >
                            <img
                                className="size-20 shrink-0 mr-4 rounded-md border border-gray-line object-cover"
                                src="/images/People-no1.jpg"
                                alt="article thumbnail"
                            />
                            <div>
                                <h3 className="text-lg font-semibold"></h3>
                                <div></div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
};