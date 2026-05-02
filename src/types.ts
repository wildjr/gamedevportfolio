export enum LinkImageSource {
  Github = "/images/logos/github.png",
  ItchIo = "/images/logos/itch.io.png",
  PlayStore = "/images/logos/playstore.png",
  Android = "/images/logos/android.png",
  Windows = "/images/logos/windows.png",
}

export enum Platform {
  Windows = "Windows",
  Mac = "Mac",
  Linux = "Linux",
  iOS = "iOS",
  Android = "Android",
  Browser = "Browser",
}

export enum GameEngine {
  Unity = "Unity",
  Unreal = "Unreal",
  DirectX = "DirectX",
}

export enum MediaType {
  Image = "image",
  YouTube = "youtube",
  Video = "video",
}

export interface MediaItem {
  source: string;
  type: MediaType;
}

export interface AboutMeData {
  name: string;
  role: string;
  description: string;
  introduction: string;
  image: string;
  cvUri: string;
  links: {
    github: string;
    itchIO: string;
    linkedIn: string;
  };
}

export interface Game {
  name: string;
  description: string;
  role: string[];
  genres: string[];
  source?: { name: string; url: string };
  links: { source: LinkImageSource; url: string }[];
  media: MediaItem[];
  platforms: Platform[];
  engine: GameEngine;
}