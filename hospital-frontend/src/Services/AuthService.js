
class AuthService {
    static log_in(token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user_id', user.id);
        localStorage.setItem('user_name', user.name);
        localStorage.setItem('user_role', user.role);
    }

    static is_loggedIn() {
        return !!localStorage.getItem('token');
    }

    static log_out() {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_role');
    }
}
export default AuthService