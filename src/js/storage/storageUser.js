// Save the information in sessionStorage.
export function saveUser(user) {
    window.sessionStorage.setItem('user', JSON.stringify(user));
}

// The method that returns true when a user exists in Session Storage
export function checkUserSessionStorage() {
    return sessionStorage.getItem("user") !== null;
}