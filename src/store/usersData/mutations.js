export function setUsers(state, data) {
  state.users = data || [];
  console.log(state.users);
}
