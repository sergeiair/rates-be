

export function getRestoreHTML(name, token) {
    return `
        Hi ${name}, <br>
        Need to reset your password? Click on the link below to get you in.  <br>
        <a href="http://localhost:4000/reset-password?v=${token}">Create new password</a>
    `;
}
