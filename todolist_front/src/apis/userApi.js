import api from "./instance";

export async function loginApi(data) {
    let response = null;

    try {
        response = await api.post(`/login`, data);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function registerApi(data) {
    let response = null;

    try {
        response = await api.post(`/user`, data);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function sessionApi() {
    let response = null;

    try {
        response = await api.get(`/session`);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function invalidateSessionApi() {
    let response = null;

    try {
        response = await api.get(`/session/remove`);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function duplicateUserName(data) {
    let response = null;

    try {
        response = await api.get(`/user/duplicate/${data}`);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}