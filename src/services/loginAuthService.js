export const handleLogin = async (email, password) => {
    try {
        const response = await fetch('https://orange-notes-backend.onrender.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const body = await response.json();

        if (body.token) {
            localStorage.setItem('token', body.token);
            return true;
        } else {
            throw new Error(`Erro: ${body.msg}`);
        }
    } catch (error) {
        throw error;
    }
}