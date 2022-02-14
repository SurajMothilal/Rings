import { API } from 'aws-amplify'

export const get = (
    apiName,
    path,
    params = {},
    callback = () => {},
    errCallback = () => {}
) => {
    return API.get(apiName, path, params)
        .then(r => callback(r))
        .catch(e => errCallback(e))
}

export const apiConfig = {
    apiName: 'ringsapi',
    accountPath: '/account'
}