export const getToken = () => {
    const token = localStorage.getItem('cla_token')
    return token
}

export const getBearerToken = () => {
    const token = localStorage.getItem('cla_token')
    return `Bearer ${token}`
}