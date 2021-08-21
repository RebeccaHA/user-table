export function setUsers(state, data) {
  state.users = data || [];
}

export function addUsers(state, data) {
  state.users.push(data);
}
