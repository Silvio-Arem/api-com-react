import userReduce from "./modules/user"

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userReduce,
    },
});

export type RootStore = ReturnType<typeof store.getState>;

export default store;