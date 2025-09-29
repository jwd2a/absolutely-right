import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Absolutely Right",
  EMAIL: "justin@maderalabs.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Absolutely Right - AI, Product, Technology and Weed",
  DESCRIPTION: "Absolutely right is a blog by Justin Davis. Posts about AI, product, technology and weed.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A mixture of rants and ideas about AI, product, and tech.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/jwd2a",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/jwd2a"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jwd2a",
  }
];
