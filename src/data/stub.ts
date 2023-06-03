import LibraryMenu from "../model/LibraryMenu";
import {
    ALBUMS_FROM_LIBRARY,
    ARTISTS_FROM_LIBRARY,
    GENRES_FROM_LIBRARY,
    PLAYLISTS_FROM_LIBRARY
} from "../navigation/constants";
import Album from "../model/Album";
import {Playlist} from "../model/Playlist";

export const MENU_ITEM: LibraryMenu[] = [
    new LibraryMenu("music", "PlayLists", PLAYLISTS_FROM_LIBRARY),
    new LibraryMenu("users", "Artists", ARTISTS_FROM_LIBRARY),
    new LibraryMenu("music", "Albums", ALBUMS_FROM_LIBRARY),
    new LibraryMenu("th-large", "Genres", GENRES_FROM_LIBRARY),
]

export const ALBUMS: Album[] = [
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk'),
    new Album("Alive 2007", '../assets/podcast.jpg', 'Daft  Punk')
]

export const PLAYLISTS: Playlist[] = [
    new Playlist("Motivations", "A description"),
    new Playlist("Sport", "A description"),
    new Playlist("Motivations", "A description"),
    new Playlist("Motivations", "A description"),
    new Playlist("Motivations", "A description"),
    new Playlist("Motivations", "A description"),
    new Playlist("Motivations", "A description"),
    new Playlist("Motivations", "A description"),
]
