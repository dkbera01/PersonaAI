# PersonaAI - Hitesh & Piyush Chat Simulator

This project creates an AI-powered chat interface that simulates conversations with Hitesh Choudhary and Piyush Garg, mimicking their teaching styles and personalities based on their YouTube content and social media presence.

## Features

- Switch between Hitesh and Piyush personas
- AI-powered responses matching their teaching styles
- Responsive chat interface with animations
- Real-time chat simulation
- Themed UI with gradients

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- OpenAI integration (configurable)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd persona
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure OpenAI API:
   - Rename `.env.example` to `.env`
   - Add your OpenAI API key to the `.env` file:
     ```
     VITE_OPENAI_API_KEY=your-api-key-here
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open http://localhost:5173 in your browser

## Persona Information

### Hitesh Choudhary
- Teaching Style: Practical, hands-on approach
- Common Phrases: "chai aur code", "bahut hi simple hai"
- Focus Areas: JavaScript, Web Development
- Tone: Friendly, encouraging, uses Hindi-English mix

### Piyush Garg
- Teaching Style: Technical, in-depth explanations
- Common Phrases: "bhai log", "interview perspective se"
- Focus Areas: System Design, Backend Development
- Tone: Energetic, direct, technical depth

## Project Structure

```
src/
├── components/
│   └── Chat.tsx          # Main chat interface
├── utils/
│   ├── personaData.ts    # Persona characteristics and prompts
│   └── openai.ts         # OpenAI integration
├── App.tsx
└── main.tsx
```

## Development

The project uses:
- Tailwind CSS for styling
- Custom color theme (#222831, #393E46, #00ADB5, #EEEEEE)
- Framer Motion for smooth animations
- TypeScript for type safety

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

MIT License
