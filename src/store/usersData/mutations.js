export function setUsers(state, data) {
  state.users = data || [];
  console.log(state.users);
}

export function addUsers(state, data) {
  state.users.push(data);
  console.log(state.users);
}
