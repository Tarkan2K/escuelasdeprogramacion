```
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '../../src/data/knowledgeBase.js';
import knowledgeBase from '../../src/data/rag_knowledge.json';

export const runtime = 'edge';

function findRelevantContext(query) {
    const terms = query.toLowerCase().split(' ').filter(t => t.length > 3);
    if (terms.length === 0) return "";

    // Simple keyword matching scoring
    const scoredChunks = knowledgeBase.map(chunk => {
        let score = 0;
        const contentLower = chunk.content.toLowerCase();
        const titleLower = chunk.title.toLowerCase();
        
        terms.forEach(term => {
            if (titleLower.includes(term)) score += 5; // Title match is valuable
            if (contentLower.includes(term)) score += 1;
        });
        
        return { ...chunk, score };
    });

    // Sort by score and take top 3
    const topChunks = scoredChunks
        .filter(chunk => chunk.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

    return topChunks.map(c => `[Source: ${ c.source } - ${ c.title }]\n${ c.content } `).join("\n\n");
}

export async function POST(req) {
  const { messages } = await req.json();
  const lastMessage = messages[messages.length - 1].content;
  
  const context = findRelevantContext(lastMessage);
  
  const augmentedSystemPrompt = `${ SYSTEM_PROMPT }

** CONTEXT FROM KNOWLEDGE BASE:**
    ${ context ? context : "No specific context found in library." }
`;

  const result = streamText({
    model: openai('gpt-4o'),
    system: augmentedSystemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
```
