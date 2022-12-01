"use strict";

const db = require("../config/db");

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.perse(data);
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static #getUser(data, isAll, fields) {
        const users = JSON.perse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {}

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            db.query()
        })
    }
}