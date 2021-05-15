export const existingUsers = ["allan", "mark"];

/**
 * the input isn't valid if
 * ...the username/password is empty
 * ...the username is already taken
 * ...the confirmed password isn't similar with the real password
 * ...the password contains less than two(2) digits
 */
export const validateRegistration = (username, password, confirmedPassword) => {
  if (username === "" || password === "") {
    return false;
  }
  if (existingUsers.includes(username)) {
    return false;
  }
  if (password != confirmedPassword) {
    return false;
  }
  if (password.length < 2) {
    return false;
  }
  return true;
};
