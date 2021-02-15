const API_URL = process.env.REACT_APP_API_URL;

export const createUser = (data) => {
  return fetch(`${API_URL}/user/new-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

export const deleteUser = (uid) => {
  return fetch(`${API_URL}/user/${uid}`, {
    method: "DELETE",
  }).then((resp) => resp.json());
};
