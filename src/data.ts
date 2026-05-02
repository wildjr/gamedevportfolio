import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Vedant Nayar",
  role: "Game Programmer",
  introduction: "Lifelong game developer looking to make it a full-time career",
  description: "Lifelong game developer looking to make it a full-time career",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/VedantNayarCV.pdf`,
  links: {
    github: "https://www.linkedin.com/in/vedantnayar",
    itchIO: "https://www.linkedin.com/in/vedantnayar",
    linkedIn: "https://www.linkedin.com/in/vedantnayar",
  }
};

export const games: Game[] = [
  {
    name: "Wrestling Game (2025~)",
    description: "A 3D fighting game currently being developed in Unity as a solo project, currently in the prototype stage. Watch this space for more.",
    role: [],
    genres: ["Fighting"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/placeholder.png", type: MediaType.Image }
    ],
  },
  {
    name: "Virtual Reality Application with Heart Rate Tracking to Study Social Anxiety (2023~)",
    description: "This was my dissertation project at HWU: A Virtual Reality application that plays 360° videos and monitors user's heart rate to track anxiety. I used Unity to build for the original Oculus Rift, with a Polar H10 heart rate sensor connected to the user. As this was a solo project, all work showcased here is my own. Now that I've completed my degree, I'm working with my dissertation supervisor to publish the results as a paper.",
    role: [
      "Mechanism to play 360° videos in Unity, and controller support to pause, play, and stop the video.",
      "Log file to track video play data",
      "API calls to the Polar H10 heart rate sensor to retrieve HR data, then correlate the data to the video log file"
    ],
    genres: ["Simulation", "Serious Games"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/placeholder.png", type: MediaType.Image }
    ],
  },
  {
    name: "Arabic Scrabble Game (2021)",
    description: "Worked at Shamsi Studios as a Unity Developer, and worked on an Arabic Scrabble game.",
    role: [
      "Responsible for creation and optimisation of a high-complexity algorithm to suggest a word when the user uses a power up. The previous algorithm froze the screen for 2-4 seconds. Rewritten with optimisations to save calculation power where possible by pruning word list based on various checks and unique properties of each power up, and sorting based on score potential. The end result ran without frame drops."
    ],
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/placeholder.png", type: MediaType.Image },
    ],
  },
  {
    name: "Traffic Flow (2021)",
    description: "Worked at PepUp Studios/Maple Infosystems as a Unity Developer, and this was one of the two projects I worked on: an update to an existing project known as Traffic Flow.",
    role: [
      "Worked on the second release prototype for Traffic Flow, as well as related ad campaign.",
      "Worked on designing and implementing the first 10 levels, including roads, waypoints, props, buildings, deciding powerups available, car types that can spawn, etc.",
      "Implementation of special vehicle variants such as emergency vehicles (need to reach their destination within a certain amount of time), criminals (ignore signals if given the chance), cash trucks (drop powerups which users can pickup), trash trucks (drop garbage which can cause accidents), impatient drivers (who will jump signals if they are forced to wait for too long), slower moving vehicles (will slow down the entire lane behind it)",
      "Implementation of dropped powerups (from cash truck) to reset happiness, reset health bar of emergency vehicles, and add cash",
      "Expanded existing systems to allow for branching waypoints for cars, including selection criteria for deciding which way to go, audio and visual cues to convey driver emotions and special vehicle variants, and signals that automatically switch every x seconds if not toggled."
    ],
    genres: ["Hypercasual"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.PlayStore, url: "https://play.google.com/store/apps/details?id=com.PepUpStudios.TrafficFlow" },
    ],
    media: [
      { source: "/images/games/TrafficFlow/trafficflow-1.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-2.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-3.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-4.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-5.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-6.jpg", type: MediaType.Image },
      { source: "/images/games/TrafficFlow/trafficflow-7.jpg", type: MediaType.Image },
    ],
  },
  {
    name: "Third Person Shooter (2021)",
    description: "Worked at PepUp Studios/Maple Infosystems as a Unity Developer, and this was one of the two projects I worked on: a third person shooter. Unfortunately, this game was never released.",
    role: [
      "Helped in creating the character controller, including movement from virtual analog stick, swipe controls for camera and auto rotation to face enemies.",
      "Contributed to design and implementation of one level",
      "Contributed to UI design of health bars and fixing UVs of props for an in-game mechanic",

    ],
    genres: ["Hypercasual", "Third Person Shooter"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/noimg.png", type: MediaType.Image },
    ],
  },
  {
    name: "Spacing Out (2019-2020)",
    description: "Spacing Out is a physics based puzzle game set in the vacuum of space. A lot of the sprites and text from the build below are placeholders. The art style I'm aiming for is pencil drawn, with a slightly rough around the edges feel, almost as if it came out of someone's imagination. The concept is that it is a 2D physics based game with puzzle elements created in Unity (C#) where you play as a group of astronauts stranded in space due to an accident. The only way to move in space is by throwing something in the opposite direction, and that forms the core of gameplay. The objective is to get to the 'safe zone' where you can be rescued by your colleagues.",
    role: [
      "Solo programmer and artist",
      "Created all assets, scripts and prefabs for this game",
      "Creation of an introductory cutscene using animations and scripts",
      "Scripting various objects and their behaviours, such as Balls (the basic throwable object. An astronaut can throw it to fly in the opposite direction), Fire extinguishers (Give a more continuous movement. Can be used to round tight corners), O2 canisters (Can create a controlled explosion to break weak walls), Wormholes (teleports the player to another wormhole)",
      "Created animations for astronauts"
    ],
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Android, url: "/files/games/SpacingOut_alpha1.2.apk" },
    ],
    media: [
      { source: "/images/games/SpacingOut/so-1.mp4", type: MediaType.Video },
      { source: "/images/games/SpacingOut/so-2.mp4", type: MediaType.Video },
      { source: "/images/games/SpacingOut/so-3.mp4", type: MediaType.Video },
      { source: "/images/games/SpacingOut/so-4.mp4", type: MediaType.Video },
    ],
  },
  {
    name: "NeuroSys (2017-2018)",
    description: "NeuroSys was the capstone project for my degree at UOWD. The project can be broken down into a simulation (Unity C# for Samsung Gear VR) and an app. The simulation side of the project, showcased here, was developed by a team of two. The idea was that this simulation could potentially be used (in the presence of a licensed therapist) to aid in the treatment of Acrophobia (fear of heights) and Arachnophobia (fear of spiders). The project won third place in the UOWD Innovation Fair.",
    genres: ["Simulation", "Serious Games"],
    role: [
      "Co-lead developer for the simulation",
      "3D modelled most objects in the Acrophobia scenes using Autodesk Maya",
      "Creation of an introductory cutscene using animations and scripts",
      "Helped with level planning and design across the board, including setting parameters for how intense each level needs to be, variables that the therapist can control within each level, locations of objects and hazards in the levels, etc",
      "Design implemention for the Acrophobia levels",
      "All Acrophobia scripts including hot-air balloon and elevator controls",
      "Terrain sculpting using Unity's terrain tools",
      "UI implementation+controls"
    ],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/NeuroSys/neurosys-1.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-2.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-3.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-4.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-5.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-6.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-7.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-8.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-9.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-10.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-11.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-12.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-13.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-14.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-15.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-16.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-17.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-18.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-19.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-20.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-21.png", type: MediaType.Image },
      { source: "/images/games/NeuroSys/neurosys-22.png", type: MediaType.Image },
    ],
  },
  {
    name: "AR Project as Research Assistant for Dr Watfa (2017-2018)",
    description: "Developed an AR Application created in Unity (C#) using Vuforia that involved involved tracking a piece of paper or an object in the real world and augmenting a 3D object in front of it. The application also communicated with wireless tags & sensors. Please note that details are confidential due to an NDA",
    role: [],
    genres: ["Application"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/noimg.png", type: MediaType.Image }
    ],
  },
  {
    name: "Minigame Project for Majid Al Futtaim (2017-2018)",
    description: "Developed a group of minigames for web browsers, created in Unity (C#), which communicate with a database using PHP & SQL to store and retrieve user information. Please note that details are confidential due to an NDA",
    role: [],
    genres: ["Minigames"],
    platforms: [Platform.Browser],
    engine: GameEngine.Unity,
    links: [
    ],
    media: [
      { source: "/images/games/noimg.png", type: MediaType.Image }
    ],
  },
  {
    name: "Winter Tower Defense (2018)",
    description: "Winter Tower Defense is a first person shooter game created in Unreal Engine for Windows. It was one of two assignments where I could work on something of my choosing, and is a small game to get me used to creating games in Unreal",
    role: [
      "Solo developer",
      "Modified and used the existing first person player to meet the needs of the game",
      "Used blueprints to control the spawning and behaviour of bombs, the shooting of snowballs, the interactions between snowballs and bombs, scoring, and castle health and game over conditions"
    ],
    genres: ["First Person Shooter", "Tower Defense"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Windows, url: "/files/games/WinterTowerDefense.zip" },
    ],
    media: [
      { source: "/images/games/WinterTowerDefense/wtd-1.png", type: MediaType.Image },
      { source: "/images/games/WinterTowerDefense/wtd-2.png", type: MediaType.Image },
      { source: "/images/games/WinterTowerDefense/wtd-3.png", type: MediaType.Image },
      { source: "/images/games/WinterTowerDefense/wtd-4.png", type: MediaType.Image },
      { source: "/images/games/WinterTowerDefense/wtd-5.png", type: MediaType.Image },
    ],
  },
  {
    name: "Simple Platformer (2018)",
    description: "Simple Platformer is a third person platformer created in Unreal Engine for Windows. It was one of two assignments where I could work on something of my choosing, and is a small game to get me used to creating games in Unreal.",
    role: [
      "Solo developer",
      "Modified and used the existing third person character to meet the needs of the game",
      "Used blueprints to control: The collection of orbs and scoring, the interactions between the player and spikes (losing health), the game over conditions based on health or player position, and the win condition"
    ],
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unreal,
    links: [
      { source: LinkImageSource.Windows, url: "/files/games/SimplePlatformer.zip" },
    ],
    media: [
      { source: "/images/games/SimplePlatformer/sp-1.png", type: MediaType.Image },
      { source: "/images/games/SimplePlatformer/sp-2.png", type: MediaType.Image },
      { source: "/images/games/SimplePlatformer/sp-3.png", type: MediaType.Image },
      { source: "/images/games/SimplePlatformer/sp-4.png", type: MediaType.Image },
      { source: "/images/games/SimplePlatformer/sp-5.png", type: MediaType.Image },
      { source: "/images/games/SimplePlatformer/sp-6.png", type: MediaType.Image },
    ],
  },
  {
    name: "Scroodle (2017)",
    description: "Description: Scroodle is a proof of concept of an asymmetrical co-operative multiplayer 2D game with platforming elements created in Unity (C#) for Windows. The two players are Blobby and The Hand. The Hand needs to keep Blobby alive and get it to the end of the level, while Blobby contributes by collecting resources for The Hand to use.",
    role: [
      "Solo developer",
      "Wrote all scripts, created animation paths, prefabs, etc. Note: The sprites were the only thing not created by me, as they were imported from a Unity asset package"
    ],
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Windows, url: "/files/games/Scroodle.zip" },
    ],
    media: [
      { source: "/images/games/Scroodle/scroodle-1.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-2.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-3.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-4.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-5.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-6.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-7.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-8.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-9.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-10.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-11.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-12.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-13.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-14.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-15.png", type: MediaType.Image },
      { source: "/images/games/Scroodle/scroodle-16.png", type: MediaType.Image },
    ],
  },
  {
    name: "When The Wolfsbane Blooms (2017)",
    description: "WTWB is a 2.5D platformer which was developed for a university assignment by a team of two in Unity (C#) for Windows. The models and animations are from Mixamo, as the assignment was testing game scripting rather than animation or modelling. The game follows Lyra, a girl who has the gift (or curse) of transforming into a beast when under direct moonlight",
    role: [
      "Game Programmer",
      "Worked on some aspects of the the beast and Lyra's movements (especially wall climbing) using a combination of Unity's triggers and colliders",
      "Used finite state machines for enemies, plus used FSMs to decide how NPCs (civilian and otherwise) react to the beast",
      "Contributed to level design",
      "Programmed the UI display, especially notable in the last few screenshots, including the health bar's changing colours and switching the player icon when transforming between Lyra and the beast"
    ],
    genres: ["Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Windows, url: "/files/games/WTWB_build2.zip" },
    ],
    media: [
      { source: "/images/games/WTWB/wtwb-1.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-2.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-3.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-4.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-5.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-6.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-7.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-8.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-9.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-10.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-11.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-12.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-13.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-14.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-15.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-16.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-17.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-18.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-19.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-20.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-21.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-22.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-23.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-24.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-25.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-26.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-27.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-28.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-29.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-30.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-31.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-32.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-33.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-34.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-35.png", type: MediaType.Image },
      { source: "/images/games/WTWB/wtwb-36.png", type: MediaType.Video },
    ],
  },
  {
    name: "Hue Man (2016)",
    description: "Hue Man is a 2D side scrolling game created in Unity for Android phones. The objective is for the superhero, Hue Man, to collect orbs. Hue Man can change his colour by using the buttons at the bottom, and can only collect an orb if he matches the colour of the orb. Successfully collecting an orb gives +1 score and +3 seconds, but collecting an orb of the wrong colour gives -2 seconds. The game speeds up as time goes on, and is over when time runs out",
    role: [
      "Lead designer and art director",
      "Helped in the design of the game and mechanics",
      "Helped to find the general feel of the art style",
      "Created sprites"
    ],
    genres: ["Puzzle"],
    platforms: [Platform.Android],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Android, url: "/files/games/HueMan_v1.0.apk" },
    ],
    media: [
      { source: "/images/games/HueMan/hm-1.mp4", type: MediaType.Video },
    ],
  },
  {
    name: "Pokémon: Battle Arena (2014)",
    description: "PBA is a fan-made tribute to the Pokémon series made in C++ using DirectX for Windows. Players are thrown into a room with 4 other trainers and must defeat them all in order to win. Each battle consists of 3 rounds, with randomly selected Pokémon on either side.",
    role: [
      "Lead programmer",
      "Worked on every aspect of the game except graphics",
      "Involved high complexity class and object design (IVs, EVs, stats), as well as high complexity programming",
      "Implementation of numerous functions for the battle system (including complex attacks)"
    ],
    genres: ["RPG", "Strategy"],
    platforms: [Platform.Windows],
    engine: GameEngine.DirectX,
    links: [
      { source: LinkImageSource.Windows, url: "/files/games/Pokemon_-_Battle_Arena.rar" },
    ],
    media: [
      { source: "/images/games/PBA/pba-1.png", type: MediaType.Image },
      { source: "/images/games/PBA/pba-2.png", type: MediaType.Image },
      { source: "/images/games/PBA/pba-3.png", type: MediaType.Image },
      { source: "/images/games/PBA/pba-4.png", type: MediaType.Image },
      { source: "/images/games/PBA/pba-5.png", type: MediaType.Image },
      { source: "/images/games/PBA/pba-6.png", type: MediaType.Image },
    ],
  }
];