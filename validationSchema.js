const constants = require('./constants');
module.exports= {
    userpersonals:{
        type: Object,
        unknownKeys: 'allow',
        required: true,
        schema: {
            uuid:{
                type: String,
                trim: true,
                required: true,
                match: /^.{1,}$/,
                errors:{
                    type:{
                        message: constants.UUID.INVALID_DT,
                    },
                    required:{
                        message: constants.UUID.REQUIRED,
                    },
                    match:{
                        message: constants.UUID.REQUIRED,
                    },
                    allowNull:{
                        message: constants.UUID.REQUIRED,
                    },
                },
            },
            userName: {
                type: String,
                trim: true,
                required: true,
                match: /^.{1,}$/,
                errors: {
                    type:{
                        message: constants.USERNAME.INVALID_TYPE,
                    },
                    required: {
                        message: constants.USERNAME.REQ,
                    },
                    match:{
                        message: constants.USERNAME.REQ,
                    },
                    allowNull:{
                        message: constants.USERNAME.REQ,
                    },
                },
            },
            firstName: {
                type: String,
                trim: true,
                required: true,
                match: /^[a-zA-Z]+$/,
                errors: {
                    type:{
                        message: constants.FIRSTNAME.INVALID_TP,
                    },
                    required: {
                        message: constants.FIRSTNAME.REQ_FIRST,
                    },
                    match:{
                        message: constants.FIRSTNAME.INVALID_TP,
                    },
                    allowNull:{
                        message: constants.FIRSTNAME.REQ_FIRST,
                    },
                },
            },
            lastName: {
                type: String,
                trim: true,
                required: true,
                match: /^[a-zA-Z]+$/,
                errors: {
                    type:{
                        message: constants.FIRSTNAME.INVALID_D,
                    },
                    required: {
                        message: constants.LASTNAME.REQ_LAST,
                    },
                    match:{
                        message: constants.LASTNAME.REQ_LAST,
                    },
                    allowNull:{
                        message: constants.LASTNAME.REQ_LAST,
                    },
                },
            },
            regNumber: {
                type: String,
                trim: true,
                required: true,
                match: /^\d+$/,
                errors: {
                    type:{
                        message: constants.REGNUMBER.INVALID_T,
                    },
                    required: {
                        message: constants.REGNUMBER.REQ_REG,
                    },
                    match:{
                        message: constants.REGNUMBER.REQ_REG,
                    },
                    allowNull:{
                        message: constants.REGNUMBER.REQ_REG,
                    },
                },
            },
            dob: {
                type: Date,
                required: true,
                errors: {
                    type:{
                        message: constants.DOB.INVALID_DATE,
                    },
                    required: {
                        message: constants.DOB.REQ_DATE,
                    },
                    allowNull:{
                        message: constants.DOB.REQ_DATE,
                    },
                },
            },
            gender: {
                type: String,
                trim: true,
                required: true,
                match: /^.{1,}$/,
                enum: ['Male','Female','Transgender','male','female','transgender'],
                errors: {
                    type:{
                        message: constants.GENDER.INVALID_G,
                    },
                    enum:{
                        message: constants.GENDER.INVALID_GEN,
                    },
                    required: {
                        message: constants.GENDER.REQ_GENDER,
                    },
                    match:{
                        message: constants.GENDER.REQ_GENDER,
                    },
                    allowNull:{
                        message: constants.GENDER.REQ_GENDER,
                    },
                },
            },
            mobileNumber: {
                type: String,
                trim: true,
                required: true,
                match: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                errors: {
                    type:{
                        message: constants.MOBNUMBER.INVALID_MO,
                    },
                    required: {
                        message: constants.MOBNUMBER.REQ_MO,
                    },
                    match:{
                        message: constants.MOBNUMBER.REQ_MO,
                    },
                    allowNull:{
                        message: constants.MOBNUMBER.REQ_MO,
                    },
                },
            },
            userBio:{
                type: String,
                trim: true,
                errors:{
                    type:{
                        message: constants.USERBIO.INVALID_BIO,
                    },
                },
            }
        }
    }
}