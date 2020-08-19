import { firebaseAuth } from "../../firebase";

const state = {
  user: null,
};

const getters = {
  getUser(state) {
    return state.user;
  },
};

const actions = {
  async signOut({ commit }) {
    try {
      await firebaseAuth.signOut();
      commit("userStatus", null);
    } catch {
      commit("userStatus", null);
    }
  },
};

const mutations = {
  userStatus(state, user) {
    state.user = user;
  },
};

export default { state, getters, actions, mutations };
