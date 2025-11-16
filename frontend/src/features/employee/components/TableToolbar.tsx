import { Button } from "antd";
import { useEffect } from "react";

export default function TableToolbar({
    rowId,
    expandedRows,
    setExpandedRows
}) {
    const toggleRow = () => {
        if (expandedRows.includes(rowId)) {
            setExpandedRows(expandedRows.filter((id: string) => id !== rowId));
        } else {
            setExpandedRows([...expandedRows, rowId]);
        }
    };0

    return (
        <div className="flex">
            <Button
                className="!font-semibold"
                variant="solid" color="blue"
                onClick={() => toggleRow()}
            >
                Xem tại đây
            </Button>
            <Button
                className="!font-semibold ml-1"
                variant="solid" color="green"
                onClick={() => {}}
            >
                Sửa
            </Button>
            <Button
                className="!font-semibold ml-1"
                variant="solid" color="danger"
                onClick={() => {}}
            >
                Xóa
            </Button>
        </div>
    );
};