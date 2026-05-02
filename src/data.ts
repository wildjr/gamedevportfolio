import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Vedant Nayar",
  role: "Game Developer",
  introduction: "SHORT_INTRODUCTION",
  description: "TELL_ABOUT_YOURSELF",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    linkedIn: "https://www.linkedin.com/in/vedantnayar",
  }
};

export const games: Game[] = [
  {
    name: "Wrestling Game (2025~)",
    description: "A 3D fighting game currently being developed in Unity as a solo project, currently in the prototype stage. Watch this space for more.",
    genres: ["Fighter"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];