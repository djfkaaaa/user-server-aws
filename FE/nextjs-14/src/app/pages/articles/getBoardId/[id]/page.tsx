'use client';
import MoveButton from "@/app/atoms/button/MoveButton";
import { IArticles } from "@/app/components/articles/model/article-model";
import Columns from "@/app/components/articles/module/article-columns";
import { findarticlebyboard } from "@/app/components/articles/service/article-service";
import { getAllArticles } from "@/app/components/articles/service/article-slice";
import { PG } from "@/redux/common/enums/PG";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const cards = [
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/mountain-nightview.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/autumn.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/babypinetree.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/beach.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/purpleflowers.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/starrysky.jpg",
  "https://www.tailwindtap.com/assets/components/horizontal-carousel/lake.jpg",
];

export default function getBoardsId(props:any){

    const dispatch = useDispatch()
    const allArticles: IArticles[] = useSelector(getAllArticles)
    const router = useRouter()
    useEffect(()=>{
      
        dispatch(findarticlebyboard(props.params.id))
    },[dispatch])

    return(<>
      <div className="flex flex-col  items-center justify-center w-full bg-white-300">
        <div className="flex overflow-x-scroll snap-x snap-mandatory max-w-6xl no-scrollbar">
          {cards.map((data, index) => {
            return (
              <section
                className="flex-shrink-0 w-full snap-center justify-center items-center"
                key={index}
              >
                <img
                  src={data}
                  alt="Images to scroll horizontal"
                  className="w-full h-[500px]"
                />
              </section>
            );
          })}
        </div>
        <td colSpan={3}>
          <MoveButton text={"글쓰기"} path={`${PG.ARTICLE}/save`}/>
        </td>
      </div>
          <h2> 게시글 수 :{allArticles.length} </h2> 
          <Box sx={{ height: "100%", width: '100%' }}>
        {allArticles && <DataGrid
          rows={allArticles}
          columns={Columns()}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20]} 
          checkboxSelection
          disableRowSelectionOnClick
        />}
      </Box>
      </>)

}