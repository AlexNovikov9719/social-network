import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8c7fb457-c414-4141-bd68-e872d0825294'
    }
})

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unFollow(userId) {
        return instanse.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instanse.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    },
    getStatus (userId) {
        return instanse.get(`profile/status/` + userId)
    },
    updateStatus (status) {
        return instanse.put(`profile/status`, {status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image',photoFile)
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile) {
        return instanse.put(`profile`, profile)
    }
}

export const authAPI = {
    getAuth() {
        return instanse.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    login(email, password, rememberMe = false, captcha) {
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logOut() {
        return instanse.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return instanse.get(`security/get-captcha-url`)
    }
}
