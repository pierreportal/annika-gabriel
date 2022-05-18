const bcrypt = require('bcryptjs');
// const hash = '$2a$10$a0fr9gCDqhQKujWIGLEVg.FCnsAh/SAwH2VegwBeg/q4MdEccOsoi'

export const hashPassword = (password: string) => bcrypt.genSalt(10, (err: any, salt: any) => {
    bcrypt.hash(password, salt, function (err: any, hash: any) {
        if (err) return err;
        return hash;
    });
});

export const compareHash = (password: string, hash: string) => bcrypt.compare(password, hash, function (err: any, res: any) {
    if (err) return err;
    return res;
});