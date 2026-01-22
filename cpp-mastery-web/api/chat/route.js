import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { SYSTEM_PROMPT } from '../../src/data/knowledgeBase.js';

export const runtime = 'edge';

export async function POST(req) {
    const { messages } = await req.json();

    const result = streamText({
        model: openai('gpt-4o'), // Or 'gpt-3.5-turbo' depending on budget/key
        system: SYSTEM_PROMPT,
        messages,
    });

    return result.toDataStreamResponse();
}
