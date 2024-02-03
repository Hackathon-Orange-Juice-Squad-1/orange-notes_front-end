export const handleGoogleLogin = async (uid, displayName, email, photoURL) => {
    try {
        const response = await fetch('https://orange-notes-backend.onrender.com/auth/googleLogin', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                uid: uid,
                displayName: displayName,
                photoURL: photoURL,
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