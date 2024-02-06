import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { jwtDecode } from "jwt-decode";

export const GoogleLogin = () => {
  const navigate = useNavigate();
  const g_sso = useRef(null);

  useEffect(() => {
    if (g_sso.current) {
      window.google.accounts.id.initialize({
        client_id:
          "1095567261898-6eop9ig5u5fh70e5dqqan0empoiflbad.apps.googleusercontent.com",
        callback: (response) => {
          const data = jwtDecode(response.credential);
          navigate(
            `/register?gname=${data.given_name}&fname=${data.family_name}&email=${data.email}`
          );
        },
      });
      window.google.accounts.id.renderButton(g_sso.current, {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "signin_with",
        shape: "rectangular",
        logo_alignment: "left",
        width: "220",
      });
      window.google.accounts.id.prompt();
    }
  }, [navigate]);

  return <div ref={g_sso} />;
};
