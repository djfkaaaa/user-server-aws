import { Action, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import countReducer from "@/redux/features/counter/counter.slice";
import userReducer from "@/app/components/users/service/user-slice";
import articleReducer from "@/app/components/articles/service/article-slice";
import boardReducer from "@/app/components/boards/service/board-slice";


const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const countPersistConfig = {
  key: "count",
  storage,
  whitelist: ["countState"],
};
// ^ 저장소가 아니라, store가 아닌 빈공간을 key를 사용해 이름을 붙여줌??
const articlePersistConfig = {
  key: "article",
  storage,
  whitelist: ["articleState"],
};
const userPersistConfig = {
  key : "user",
  storage,
  whitelist : ["userState"],
};
const boardPersistConfig = {
  key : "board",
  storage,
  whitelist : ["boardState"],
};

const persistedCountReducer = persistReducer(countPersistConfig, countReducer);
const persistedArticleReducer = persistReducer(articlePersistConfig, articleReducer);
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedBoardReducer = persistReducer(boardPersistConfig, boardReducer);


export const rootReducer = combineReducers({
  count: persistedCountReducer,
  article : persistedArticleReducer,
  user : persistedUserReducer,
  board : persistedBoardReducer,
  
});


