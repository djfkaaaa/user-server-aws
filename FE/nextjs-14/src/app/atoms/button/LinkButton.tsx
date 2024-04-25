import { PG } from "@/redux/common/enums/PG";
import Link from "next/link";
import path from "path";
import { title } from "process";

interface ILinkButton{
    id: number,
    title: string,
    path: string
}

export default function LinkButton({id,title,path}:ILinkButton){
    // 파라미터에 any 대신  ILinkButton 을 준것은 타입을 주기위해, 리액트는 점점 타입을 주는 방향으로 발전중 자바와 반대, 반응형 사용할때 타입을 줘야 에러가 안남
    return(
    <Link href={`${path}`} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
     md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500
      dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
       dark:border-gray-700" aria-current="page">{title}</Link>
    )
}

export const linkButtonTiltes = [
    {id: 0, title:'마이페이지', path:`${PG.USER}/detail/${1}`},
    {id: 1, title:'게시글목록', path:`${PG.ARTICLE}`},
    {id: 2, title:'게시판목록', path:`${PG.BOARD}`},
    {id: 3, title:'카운터', path:`${PG.COUNT}/demos/redux-counter`},
    {id: 4, title:'보드아이디 아티클 테스트', path:`${PG.ARTICLE}/getBoardId`}
]

export const settings = []