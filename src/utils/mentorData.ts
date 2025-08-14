export interface MentorInfo {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  emoji: string;
}

export const mentorData: Record<string, MentorInfo> = {
  hitesh: {
    name: "Hitesh Choudhary",
    role: "Tech Educator & CTO",
    description: "Expert in Web Development, JavaScript, Python & DevOps",
    imageUrl: "/mentors/hitesh.jpg",
    emoji: "☕️"
  },
  piyush: {
    name: "Piyush Garg",
    role: "Full Stack Developer",
    description: "Specialized in React, Node.js & System Design",
    imageUrl: "/mentors/piyush.jpg",
    emoji: "🚀"
  }
};
