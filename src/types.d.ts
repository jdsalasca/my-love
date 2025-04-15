// Declaration for CSS modules
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Declaration for static assets
declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

// Declaration for JSON files
declare module '*.json' {
  const value: any;
  export default value;
}

// Declaration for MP3 files
declare module '*.mp3' {
  const src: string;
  export default src;
} 