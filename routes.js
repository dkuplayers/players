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
    recruitDetail: RECRUIT_DETAIL,
    editRecruit: EDIT_RECRUIT,
    deleteRecruit: DELETE_RECRUIT,
    uploadRecruit: UPLOAD_RECRUIT
};

export default routes;