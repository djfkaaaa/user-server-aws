import { GridColDef } from "@mui/x-data-grid";
import { BoardColumn } from "../model/board-column";
import { Link, Typography } from "@mui/material";
import { PG } from "@/redux/common/enums/PG";

interface CellType{
    row : BoardColumn
}

export default function Columns() : GridColDef[]{
    return[
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'id', // field값은 자바에서 넘어온 속성값이여야함
            headerName: 'No',
            renderCell: ({row}:CellType) =>
                <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.id}</Typography>
            
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'boardName',
            headerName: '게시판 이름',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>
                 <Link href={`${PG.BOARD}/detail/${row.id}`} className="underline">{row.title}</Link>
                </Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'boardType',
            headerName: '게시판 타입',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.description}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'article',
            headerName: '작가',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.article}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'regDate',
            headerName: '작성일',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.regDate}</Typography>
        },
        {
            flex: 0.04,
            minWidth: 0,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({row}:CellType) =>
            <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.modDate}</Typography>
        }

    ]
}