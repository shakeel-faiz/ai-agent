import dotenv from 'dotenv';
import OpenAI from 'openai';
import fs from 'fs';

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY; 
const openai = new OpenAI({ apiKey });

// Language mapping with custom file extensions
const languages = {
  //Arabic: 'ar',
  German: 'de',
  //Spanish: 'es',
  //Persian: 'fa',
  //French: 'fr',
  Indonesian: 'id',
  //Italian: 'it',
  //Japanese: 'ja',
  //Korean: 'ko',
  //Polish: 'pl',
  //'Portuguese (Brazil)': 'pt',
  //Russian: 'ru',
  //Thai: 'th',
  //Turkish: 'tr',
  //Vietnamese: 'vi',
  //Chinese: 'zh',
  //'Chinese Traditional': 'zh-hant'
};

// Read input Markdown file
const inputText = fs.readFileSync('index.md', 'utf-8');

// Translation function
async function translateText(text, language) {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are a professional translator. Translate the following Markdown document to ${language} while keeping the original Markdown formatting intact.`
      },
      {
        role: 'user',
        content: text
      }
    ]
  });

  return response.choices[0].message.content;
}

// Translate and save each language
(async () => {
  const totalLanguages = Object.keys(languages).length;
  let count = 0;

  for (const [language, extension] of Object.entries(languages)) {
    count++;
    console.log(`Translating to ${language}... (${count}/${totalLanguages})`);

    const translatedText = await translateText(inputText, language);
    const outputFile = `index.${extension}.md`;
    
    fs.writeFileSync(outputFile, translatedText);

    console.log(`Done: ${outputFile}`);
  }

  console.log('All translations completed successfully!');
})();
