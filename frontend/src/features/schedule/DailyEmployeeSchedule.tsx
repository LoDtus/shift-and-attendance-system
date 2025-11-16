import "./schedule.css";

export default function DailyEmployeeSchedule() {
    const members = ["Nguyễn A", "Trần B", "Lê C"];

    // Tạo mảng các mốc thời gian từ 00:00 → 23:30 (48 cột)
    const timeSlots = Array.from({ length: 48 }, (_, i) => {
        const hour = String(Math.floor(i / 2)).padStart(2, "0");
        const minute = i % 2 === 0 ? "00" : "30";
        return `${hour}:${minute}`;
    });

    return (
        <div className="overflow-auto">
            <span>Daily Employee Schedule</span>

            <table className="border border-gray-300 min-w-max text-sm">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2 bg-gray-100 sticky left-0 z-10">
                            Thành viên
                        </th>

                        {timeSlots.map((slot, index) => (
                            <th
                                key={index}
                                className="border border-gray-300 p-1 text-center bg-gray-50 min-w-[25px] relative-header"
                            ></th>
                        ))}
                    </tr>

                    <tr>
                        <th className="sticky left-0 bg-white"></th>
                        <th colSpan={48} className="p-0 relative bg-transparent">
                            <div className="top-0 left-0 w-full h-full border">
                                {Array.from({ length: 24 }).map((_, hourIdx) => {
                                    if (hourIdx === 0) return null;
                                    const slotLabel = String(hourIdx).padStart(2, "0") + ":00";
                                    const cellWidth = 30;
                                    const xPosition = hourIdx * cellWidth * 2 + cellWidth;
                                    
                                    return (
                                        <div
                                            key={hourIdx}
                                            className="hour-label border"
                                            style={{ left: xPosition }}
                                        >
                                            {slotLabel}
                                        </div>
                                    );
                                })}
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {members.map((member, rowIndex) => (
                        <tr key={rowIndex}>
                            {/* Tên thành viên */}
                            <td className="border border-gray-300 p-2 sticky left-0 bg-white z-10">
                                {member}
                            </td>

                            {/* 48 ô thời gian */}
                            {timeSlots.map((slot, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border border-gray-200 hover:bg-blue-100 cursor-pointer h-8"
                                ></td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};