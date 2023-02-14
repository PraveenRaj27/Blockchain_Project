// const { generatePrime } = require('crypto');
const jwt = require('jsonwebtoken');

const secretKey = 'l338NMmyd4TUBamPILFABGUgr/CF5ueATatPBybS2yeV79BsgqmVWRkA55apniNO7FpgrrLvvVaM/QyOATOVZA==';

const generateAccessToken = (payload) => {
    const signedJWT = jwt.sign(payload, secretKey);
    return signedJWT;
}

module.exports = generateAccessToken;