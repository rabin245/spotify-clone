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
      const playlists = response.data;
      // randomize the order of the playlists
      for (let i = playlists.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = playlists[i];
        playlists[i] = playlists[j];
        playlists[j] = temp;
      }
      return playlists;
    },
  }),
});

export const playlistState = atomFamily({
  key: "playlist",
  default: selectorFamily({
    key: "playlist/Default",
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

export const defaultAlbumsAtom = atom({
  key: "defaultAlbums",
  default: selector({
    key: "defaultAlbums/Default",
    get: async () => {
      const response = await axios.get("http://localhost:3000/albums");
      const albums = response.data;
      // randomize the order of the albums
      for (let i = albums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = albums[i];
        albums[i] = albums[j];
        albums[j] = temp;
      }
      return albums;
    },
  }),
});

export const albumState = atomFamily({
  key: "album",
  default: selectorFamily({
    key: "album/Default",
    get:
      (id) =>
      ({ get }) => {
        const albums = get(defaultAlbumsAtom);
        return albums.find((a) => a.id === id);
      },
  }),
});

export const searchResultsState = selectorFamily({
  key: "searchResults",
  get: (query) => async () => {
    const albums = await axios.get(`http://localhost:3000/albums?q=${query}`);
    const songs = await axios.get(`http://localhost:3000/songs?q=${query}`);
    const playlists = await axios.get(
      `http://localhost:3000/playlists?q=${query}`
    );

    const artistIds = songs.data.map((song) => song.artistId);
    const artistPromises = artistIds.map(async (id) => {
      const response = await axios.get(
        `http://localhost:3000/artists/?id=${id}`
      );
      return response.data;
    });

    const response = await Promise.all(artistPromises);

    let artists = response.length
      ? response.reduce((acc, artist) => {
          const existingArtist = acc.find((a) => a.id === artist[0].id);
          if (!existingArtist) {
            acc.push(artist[0]);
          }
          return acc;
        })
      : [];

    return {
      artists: artists,
      albums: albums.data,
      songs: songs.data,
      playlists: playlists.data,
    };
  },
});
