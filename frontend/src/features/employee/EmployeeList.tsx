import "./table.css";
import { MaterialReactTable } from 'material-react-table';
import TableToolbar from './components/TableToolbar';
import { use, useEffect, useState } from 'react';
import NameCell from "./components/NameCell";

export default function EmployeeList() {
    const [cols, setCols] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);

    const columns = [
        {
            accessorKey: 'no',
            header: 'STT',
            size: 10,
            minSize: 10,
            maxSize: 30,
            enableSorting: false,        // Ẩn nút sắp xếp
            enableColumnActions: false,  // Ẩn menu 3 chấm
            enableColumnDragging: false, // Ẩn menu nút kéo thả
            muiTableHeadCellProps: {
                align: 'center',
                sx: { justifyContent: 'center' },
            },
            // Căn giữa cell
            muiTableBodyCellProps: {
                align: 'center',
                sx: { justifyContent: 'center', textAlign: 'center' },
            },
        },
        {
            accessorKey: 'fullName',
            header: 'Họ tên',
            Cell: ({ row }) => (
                <NameCell />
            ),
        },
        {
            accessorKey: 'position',
            header: 'Chức danh',
        },
        {
            accessorKey: 'department',
            header: 'Phòng ban',
        },
        {
            accessorKey: 'status',
            header: 'Trạng thái',
        },
        {
            accessorKey: 'actions',
            header: 'Hành động',
            enableSorting: false,
            enableColumnOrdering: false,
            Cell: ({ row }) => (
                <TableToolbar
                    rowId={row.id}
                    expandedRows={expandedRows}
                    setExpandedRows={setExpandedRows}
                />
            ),
        },
    ];

    const rowData = [
        {
            no: 1,
            fullName: 'Nguyễn Văn A',
            position: 'Nhân viên',
            department: 'Kế toán',
            status: 'Đang làm việc',
        },
        {
            no: 2,
            fullName: 'Trần Thị B',
            position: 'Trưởng phòng',
            department: 'Nhân sự',
            status: 'Nghỉ phép',
        },
        {
            no: 3,
            fullName: 'Lê Văn C',
            position: 'Nhân viên',
            department: 'Kỹ thuật',
            status: 'Đang làm việc',
        },
        {
            no: 4,
            fullName: 'Phạm Thị D',
            position: 'Thực tập sinh',
            department: 'Marketing',
            status: 'Đang học việc',
        },
    ];

    useEffect(() => {
        if (false)
            setCols([]);
    }, []);

    return (
        <div className="h-full p-2">
            <h1 className='mb-3 font-semibold text-2xl'>Danh sách nhân viên</h1>

            <MaterialReactTable
                columns={columns}
                data={rowData || []}
                enableColumnOrdering
                enableDensityToggle={false} // Tắt 'Toggle Density'
                initialState={{ density: 'compact' }} // Set mặc định 'Toggle Density'
                enableFullScreenToggle={false} // Tắt 'Toggle Full Screen'
                muiTableBodyCellProps={({ cell }) => ({
                    sx: {
                        backgroundColor: cell.column.id === 'fullName' ? '#f0f0f0' : 'white',
                    },
                })}
                enableGlobalFilter={false}
                renderDetailPanel={({ row }) => {
                    // return null;
                    return (
                        expandedRows?.includes(row?.id) ? (
                            <div className="p-3 bg-gray-100 rounded-lg">
                                Đây là DIV mở rộng cho row {row.id}
                            </div>
                        ) : null
                    )
                }}
                enableExpanding
                enableExpandAll={false}

                displayColumnDefOptions={{
                    'mrt-row-expand': {
                        muiTableHeadCellProps: {
                            sx: { display: 'none' },  // Ẩn header mũi tên
                        },
                        muiTableBodyCellProps: {
                            sx: { display: 'none' },  // Ẩn ô mũi tên ở mỗi row
                        },
                    },
                }}
                state={{
                    expanded: Object.fromEntries(
                        expandedRows.map(id => [id, true])
                    )
                }}
            />
        </div>
    );
};