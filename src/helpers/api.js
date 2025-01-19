import { get, post, patch, del } from './apiProvider';
import { LOGIN, REGISTER } from '../constants/urlConstants';

export function login(reqData) {
    return post(LOGIN, reqData);
};

export function register(reqData) {
    return post(REGISTER, reqData);
};
