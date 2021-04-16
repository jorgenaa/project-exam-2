const tokenKey = 'auth';

export const getAuth = () => {
    const token = localStorage.getItem(tokenKey);
        return JSON.parse(token);
 }
