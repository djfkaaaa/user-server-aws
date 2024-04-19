// 샘플 코드 

import CompaniesColumns from "@/app/components/demos/companies-columns";
import CompaniesRow from "@/app/components/boards/companies-rows";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { NextPage } from "next";


const companiesPage:NextPage = () => {
    // ^ 자바 자료구조에 해당, 순서함수 구조, 판에 해당
 
    

    return (
        <div>
                        <table>
                        <thead>
                        <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                          {CompaniesRow().map((v,i) => 
                (<CompaniesColumns key={i} {...v}/>))
        }
                        </tbody>
                        </table>
                    </div>
            
          );
}
export default companiesPage; 
