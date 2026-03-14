export type UserData = {
  name: string;
  bio: string;
  expiresAt: number; // timestamp in milliseconds
};

export const mockData: Record<string, UserData> = {
  john: {
    name: "John Doe",
    bio: "I am a software engineer building cool things.",
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days from now (valid)
  },
  jane: {
    name: "Jane Smith",
    bio: "I love designing intuitive user interfaces.",
    expiresAt: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago (expired)
  },
  alex: {
    name: "Alex Johnson",
    bio: "Full stack developer and coffee enthusiast.",
    expiresAt: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now (valid)
  }
};
