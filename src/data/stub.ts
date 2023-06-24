import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

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
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk')
]


export const LIBRARY_ALBUMS: Album[] = [
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk'),
    new Album(uuid(), "Alive 2007", '../assets/podcast.jpg', 'Daft Punk')
]

export const LIBRARY_PLAYLISTS: Playlist[] = [
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Sports", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
    new Playlist(uuid(), "Motivations", "A description"),
]
