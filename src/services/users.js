import axios from "axios";

export const getUsers = () =>
  axios
    .get("https://renewable.exchange/test/users.json")
    .then(response => response.data);
