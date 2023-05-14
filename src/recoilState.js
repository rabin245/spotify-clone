import { atom, selector, atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const loggedInUserAtom = atom({
  key: "loggedInUser",
  default: JSON.parse(sessionStorage.getItem("loggedInUser")) || null,
});

export const defaultPlaylistsAtom = atom({
  key: "defaultPlaylists",
  default: selector({
    key: "defaultPlaylists/Default",
    get: async () => {
      const response = await axios.get("http://localhost:3000/playlists");
      return response.data;
    },
  }),
});

export const playlistState = atomFamily({
  key: "playlists",
  default: selectorFamily({
    key: "playlists/Default",
    get:
      (id) =>
      async ({ get }) => {
        // const response = await axios.get(`http://localhost:3000/playlists/${id}`);
        // return response.data;
        const playlists = get(defaultPlaylistsAtom);
        return playlists.find((playlist) => playlist.id === id);
      },
  }),
});

export const songState = atomFamily({
  key: "song",
  default: selectorFamily({
    get: (id) => async () => {
      const response = await axios.get(`http://localhost:3000/songs/${id}`);
      return response.data;
    },
  }),
});

export const currentSelectedSongAtom = atom({
  key: "currentSelectedSong",
  default: null,
});
