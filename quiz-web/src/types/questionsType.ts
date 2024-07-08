export type Questions = Question[];

export type text = string;
export type id = number;
export type correctAnswerId = number;

export interface Question {
  id: id;
  text: text;
  answers: Answer[];
  correctAnswerId: correctAnswerId;
}

export interface Answer {
  id: id;
  text: text;
}

export interface Score {
  name: string;
  score: number;
}
