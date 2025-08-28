export interface Game {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: string;
  image: string;
  screenshots: string[];
  color: string;
  releaseDate?: string;
  platforms: string[];
  genre: string;
  features: string[];
}
