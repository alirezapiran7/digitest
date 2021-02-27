
const BASE_URL = 'http://185.247.119.178:3008/'
const BASE_API = 'http://185.247.119.178:3008/customer/api/'
const USEFUL = 'http://185.247.119.178:3008/customer/api/useful/'

export default urls = {
    baseUrl: BASE_URL,
    baseApi: BASE_API,
    updateUser :BASE_API + 'user/',
    nearMe :BASE_API + 'useful/restaurant/nearme',
    me: BASE_API + 'useful/user/me',
    customerFile: "http://185.247.119.178:3008/uploads/customer/",
    login: BASE_API + 'login',
    register: BASE_URL + 'register',
    refreshtoken: BASE_API + 'refreshtoken',
    sendCode: 'http://185.247.119.178:3008/customer/tryRegister/',
    verifyCode: 'http://185.247.119.178:3008/customer/verifyCode/',
    termsConditions: BASE_URL + 'sms-verify',
    paymentTermsConditions: BASE_URL,
    privacyPolicy: BASE_URL,


    getGeoIp: 'http://ip-api.com/json/',
}

