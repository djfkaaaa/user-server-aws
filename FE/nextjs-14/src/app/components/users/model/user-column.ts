// 엔티티 느낌의 파일, ts는 타입스크립트이므로 컴포넌트가 아니다

export interface UserColumn{
    props: any;

    id?: number;
    username?: string;
    password?: string;
    name?: string;
    phoneNumber?: string;
    job?: string;
    articles?: string;
    regDate?: string;
    modDate?: string;
    // ^ ? 붙이면 자바의 optional <  값이 없어도된다.
}