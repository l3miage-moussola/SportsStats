export interface Competition {
  id: number;
  name: string;
}
export interface CompetitionNews {
  NewsLink: string;
  Image: string;

  Title: string;
  PublisherLogo: string;
  PublisherName: string;
  PublisherDate: string;
}

export interface feaxture {
  homeLogo: string;
  homeTeam : string;
  awayLogo : string;
  awayTeam : string;
  MatchDay : string;
  MatchTime : string;
}
export interface MatchDay {
  matchDay: feaxture[];
}
