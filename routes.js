import { recruitDetail } from "./controllers/recruitController";

//Global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//Users

const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

//Recruit

const RECRUIT = "/recruit";
const RECRUIT_DETAIL = "/:id";
const EDIT_RECRUIT = "/:id/edit-recruit";
const DELETE_RECRUIT = "/:id/delete-recruit";
const UPLOAD_RECRUIT = "/upload-recruit";
const VOLUNTEER_RECRUIT = "/:id/volunteer-recruit";
const CANCEL_VOLUNTEER = "/:id/cancel-volunteer";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    recruit: RECRUIT,
    recruitDetail: id => {
        if (id) {
            return `/recruit/${id}`;
        } else {
            return RECRUIT_DETAIL;
        }
    },
    editRecruit: id => {
        if (id) {
            return `/recruit/${id}/edit-recruit`;
        } else {
            return EDIT_RECRUIT;
        }
    },
    deleteRecruit: id => {
        if (id) {
            return `/recruit/${id}/delete-recruit`;
        } else {
            return DELETE_RECRUIT;
        }
    },
    uploadRecruit: UPLOAD_RECRUIT,
    volunteer: id => {
        if (id) {
            return `/recruit/${id}/volunteer-recruit`;
        } else {
            return VOLUNTEER_RECRUIT;
        }
    },
    cancelVolunteer: id => {
        if (id) {
            return `/recruit/${id}/cancel-volunteer`;
        } else {
            return CANCEL_VOLUNTEER;
        }
    }
};

export default routes;
