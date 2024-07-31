import api from "./instance";

export async function registerTodoApi(data) {
    let response = null;

    try {
        response = await api.post(`/todo`, data);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function todolistApi(data) {
    let response = null;

    try {
        response = await api.get(`/todolist`, {params: data});
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function updateTodoState(data) {
    let response = null;

    try {
        response = await api.put(`/todo/${data}`);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function updateTodoContent(data) {
    let response = null;

    try {
        response = await api.put(`/todo`, data);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function deleteTodo(data) {
    let response = null;

    try {
        response = await api.delete(`/todo/${data}`);
    } catch (e) {
        console.error(e);
        response = e.response;
    }

    return response;
}

export async function searchTodo(data) {
    let response = null;

    try {
        response = await api.get(`/search`, {params: data});
    } catch(e) {
        console.error(e);
        response = e.response;
    }

    return response;
}