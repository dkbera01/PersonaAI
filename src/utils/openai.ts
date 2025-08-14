import { generatePrompt } from './personaData';

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

type ModelType = 'gpt-3.5-turbo' | 'gpt-4' | 'gpt-4-turbo-preview';

interface ChatOptions {
  model?: ModelType;
  temperature?: number;
  maxTokens?: number;
}

export const getChatResponse = async (
  message: string, 
  persona: 'hitesh' | 'piyush',
  options: ChatOptions = {}
) => {
  const prompt = generatePrompt(persona, message);
  
  if (!apiKey || apiKey === 'your-actual-api-key-here') {
    throw new Error('Please add your OpenAI API key to the .env file');
  }

  const {
    model = 'gpt-3.5-turbo',
    temperature = 0.9,
    maxTokens = 500
  } = options;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: 'system',
            content: prompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature,
        max_tokens: maxTokens,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0.5
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData?.error?.message) {
        throw new Error(errorData.error.message);
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    if (!aiResponse) {
      throw new Error('No response from AI');
    }

    return aiResponse;
  } catch (error) {
    console.error('Error getting chat response:', error);
    if (error instanceof Error) {
      if (error.message.includes('API key')) {
        throw new Error('API key error: Please check your OpenAI API key in the .env file');
      }
      throw error;
    }
    throw new Error('An unexpected error occurred. Please try again.');
  }
};
