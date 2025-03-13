import axios from 'axios';
import fs from 'fs';

const apiKey = 'mykey'; // Replace with your OpenAI key

// Read input.md file
const inputText = fs.readFileSync('input.md', 'utf-8');

// Split based on custom marker '---split---'
const chunks = inputText.split('---split---');

// OpenAI API call for translation
async function translateChunk(chunk) {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are a professional translator. Translate the text to Arabic while preserving the original Markdown format. Do not add any extra information or responses.'
        },
        {
          role: 'user',
          content: chunk
        }
      ]
    },
    {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.choices[0].message.content;
}

(async () => {
  const translatedChunks = [];

  for (const chunk of chunks) {
    const translated = await translateChunk(chunk);
    translatedChunks.push(translated);
  }

  const finalTranslation = translatedChunks.join('\n\n---split---\n\n');
  fs.writeFileSync('output.md', finalTranslation);

  console.log('✅ Translation done! Check output.md');
})();
