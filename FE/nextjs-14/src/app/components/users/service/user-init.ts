import { IUser } from "../model/user-model";

export const initialState: IUser = {
    id: 0,
    username: "",
    password: "",
    name: "",
    phoneNumber: "",
    job: "",
    articles: "",
    regDate: "",
    modDate: "",
    count: 0,
    
}
// 데이터 컬럼값 초기화부