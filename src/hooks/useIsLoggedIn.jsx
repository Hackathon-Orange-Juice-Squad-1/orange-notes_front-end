import { jwtDecode } from "jwt-decode";

function isTokenValid(userToken) {
  if (typeof userToken !== "string" || userToken === "") return false;

  try {
    const token = jwtDecode(userToken);
    return token === null ? false : true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export const useIsLoggedIn = () => {
    const token = localStorage.getItem("token");
    const isLoggedIn = isTokenValid(token);

  return { isLoggedIn };
};
