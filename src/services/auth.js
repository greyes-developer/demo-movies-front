const API_URL = process.env.REACT_APP_API_URL;

export const login = (email, password) => {
  return fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((response) => {
    return response.json();
  });
};
