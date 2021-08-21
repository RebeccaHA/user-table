export function setUsers({ commit }, data) {
  commit("setUsers", data);
}

export function addUsers({ commit }, data) {
  commit("addUsers", data);
}

export function deleteUsers({ commit }, data) {
  commit("deleteUsers", data);
}
