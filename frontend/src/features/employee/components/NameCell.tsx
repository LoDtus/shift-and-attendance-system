export default function NameCell() {
    return (
        // Khônng dùng thẻ a, dùng Typography.Link
        <a
            className="flex flex-col
                duration-200 hover:text-blue-500"
            href="/"
        >
            <span>Nguyễn Hàn Hải Linh</span>
            <span className="text-[12px] text-gray-400">abc@gmail.com</span>
        </a>
    );
};