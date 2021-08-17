import axios from "axios";

export const getUsers = () =>
  axios.get("https://renewable.exchange/test/users.json").then(response => {
    console.log(response.data);
    return response.data;
  });
