import dotenv from 'dotenv';
import OpenAI from 'openai';
import fs from 'fs';

dotenv.config();

// Load your Markdown file
const markdownText = fs.readFileSync('input.md', 'utf-8');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function translate() {

  const targetLanguage = 'German'; 

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',  // Use GPT-4o
    messages: [
      {
        role: 'system',
        content: 'You are a professional translator. Translate the following Markdown document to ${targetLanguage} while keeping the original Markdown formatting intact.'
      },
      {
        role: 'user',
        content: markdownText
      }
    ]
  });

  const translatedText = response.choices[0].message.content;

  // Save the translated content
  fs.writeFileSync('output.md', translatedText);

  console.log('✅ Translation complete! Check output.md');
}

translate();
