import { createAction } from "@reduxjs/toolkit";

export const apiCallBegan = createAction("api/apiCallBegan");
export const apiCallFailed = createAction("api/apiCallFailed");
export const apiCallSuccess = createAction("api/apiCallSuccess");