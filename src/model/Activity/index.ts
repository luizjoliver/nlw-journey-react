export interface Activity {
  date: string;
  activities: Array<{
    id: string;
    title: string;
    occurs_at: string;
  }>;
}
