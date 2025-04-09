import { Comment } from "./comment";

export interface Idea {
  ideaDescription: string;
  projectId: string,
  ideaId: string;
  ideaName: string;
  x: number;
  y: number;
  creatorId: string;
  comments: Comment[];
  upVotes: string[];
  downVotes: string[];
}

