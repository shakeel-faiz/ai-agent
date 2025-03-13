import axios from 'axios';
import fs from 'fs';

const apiKey = 'sk-projA'; // Replace with your OpenAI key

// Read input.md file
const inputText = fs.readFileSync('input.md', 'utf-8');

// OpenAI API call for translation
async function translateText(text) {
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
          content: text
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
  const translatedText = await translateText(inputText);
  
  // Write the output to output.md file
  fs.writeFileSync('output.md', translatedText);

  console.log('✅ Translation completed successfully! Check output.md');
})();
