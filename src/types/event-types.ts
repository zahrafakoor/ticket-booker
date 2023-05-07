export interface Event {
  image: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price?: number;
  warning?: string | null;
}
