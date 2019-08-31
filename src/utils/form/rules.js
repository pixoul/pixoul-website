export default {
  "name": {
    message: "Please provide your first and last name",
    regex: /\w{2,}\s\w{2,}/
  },
  "email": {
    message: "Invalid email",
    regex: /^\S+@\S+\.\S+$/
  },
  "phone": {
    message: "Invalid phone number",
    regex: /^\(\d{3}\)\s\d{3}\-\d{4}$/,
    mask: "(###) ###-####"
  },
  "username": {
    message: "Username needs to be 6 characters long",
    regex: /^.{6,}$/
  },
  "password": {
    message: "Password needs to contain an uppercase and lower case letter, a special character, and a number",
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
  },
  "code": {
    message: "Code needs to be a 5 digit number",
    regex: /\d{5}/,
    mask: "#####"
  },
  "default": {
    message: "default enabled",
    regex: /\**/
  }
}
