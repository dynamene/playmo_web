import { firestoreAction } from "vuexfire";

import { dbPlaylistsRef } from "../../firebase";

const state = {
  playlists: [],
};

const getters = {
  playlists(state) {
    return state.playlists.sort(() => Math.random() - 0.5);
  },
};

const actions = {
  setPlaylistsRef: firestoreAction((context) => {
    return context.bindFirestoreRef("playlists", dbPlaylistsRef);
  }),
};

const mutations = {};

export default { state, getters, actions, mutations };
