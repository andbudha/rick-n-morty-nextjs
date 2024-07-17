type Info = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

export type APIResponse = {
  info: Info;
  results: Character[];
};

//seasons gql-response-types

export interface Main {
  data: Data;
}

export interface Data {
  episodes: Episodes;
}

export interface Episodes {
  results: Episode[];
}

export interface Episode {
  name: string;
  episode: string;
  characters: GqlCharacter[];
}

export interface GqlCharacter {
  image: string;
}
