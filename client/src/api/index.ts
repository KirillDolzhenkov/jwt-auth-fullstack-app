import instance from './instance.ts'
import type {ILoginRequest, ILoginResponse} from "./auth/types.ts";
import Endpoints from "./endpoints.ts";
import type {AxiosPromise} from "axios";

export const login = (params: ILoginRequest): AxiosPromise<ILoginResponse> =>
    instance.post(Endpoints.AUTH.LOGIN, params);