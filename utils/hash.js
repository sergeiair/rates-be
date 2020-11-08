import * as bcrypt from "bcrypt";

export function emailToRestoreToken(email) {
    return bcrypt.hashSync(email + "_frvr3$R34gTgtr5_", 5);
}
