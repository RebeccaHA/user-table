export function setUsers(state, data) {
  state.users = data || [];
}

export function addUsers(state, data) {
  state.users.push(data);
}

export function deleteUsers(state, data) {
  const match = state.users.filter(user => data.includes(user));
  return (state.users = state.users.filter(i => !match.includes(i)));
}
