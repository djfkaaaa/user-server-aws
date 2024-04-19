import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { UserColumn } from "../model/user-column";
import { PG } from "@/redux/common/enums/PG";
import { MyTypography }  from "../../common/style/cell";

interface CellType{
    row : UserColumn
}

export default function UserColumns() : GridColDef[]{
    return[
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'id', // field값은 자바에서 넘어온 속성값이여야함
            headerName: 'No',
            renderCell: ({row}:CellType) => MyTypography(row.id,"1.2rem")
            }
            // {return} 은 생략이 가능 생략하면 위와같이댐
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'username',
            headerName: 'ID',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>
                <Link href={`${PG.USER}/detail/${row.id}`} className="underline">{row.username}</Link>
                </Typography>
            }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'password',
            headerName: '비밀번호',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.password}****</Typography>
            }
        ,    
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'name',
            headerName: '이름',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.name}</Typography>
            }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'phoneNumber',
            headerName: '전화번호',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.phoneNumber}</Typography>
            }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'job',
            headerName: '직업',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.job}</Typography>
            }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'articles',
            headerName: '기사',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.articles}</Typography>
            }
        ,
        {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'regDate',
            headerName: '생성일',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.regDate}</Typography>
            }
         ,
         {
            flex: 0.04,
            minWidth: 30,
            sortable: false,
            field: 'modDate',
            headerName: '수정일',
            renderCell: ({row}:CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.modDate}</Typography>
            }        

    ]
}