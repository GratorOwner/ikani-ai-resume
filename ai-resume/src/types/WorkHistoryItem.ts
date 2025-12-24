export interface WorkHistoryItem {
  id: number;                     // bigint → number
  created_at: string;             // timestamp with time zone → ISO string
  title: string;                  // text NOT NULL
  company: string | null;         // text NULL
  description: string | null;     // text NULL
  imageLink: string | null;       // text NULL (quoted identifier → camelCase)
  tech: string | null;            // text NULL
}