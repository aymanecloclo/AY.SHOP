import {useEffect}from 'react';
import { withAuthenticationRequired,useAuth0  } from '@auth0/auth0-react';


export const PrivateRoute = () => {
 const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      // Envoi des données utilisateur à votre backend Laravel
      fetch("http://localhost:8000/api/register-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          picture: user.picture,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Utilisateur enregistré dans le backend :", data);
        })
        .catch((error) => {
          console.error("Erreur lors de l'enregistrement de l'utilisateur :", error);
        });
    }
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return <div>Private Content</div>;
};


export default withAuthenticationRequired(PrivateRoute, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
