export interface ICard {
  type: string;
  title: string;
  mediaUrl: string;
  excerpt: string;
  category?: string;
  canShowEmoji?: boolean;
}
