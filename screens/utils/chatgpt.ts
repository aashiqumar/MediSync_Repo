const OPENAI_KEY = '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';

export async function generateResponse(message: string) {
  const response = await fetch(
    'https://api.openai.com/v1/chat/completions', // Use the chat completions endpoint
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {role: 'system', content: 'You are a helpful assistant.'},
          {role: 'user', content: message},
        ],
      }),
    },
  );

  const data = await response.json();

  // Extract the generated response message
  const generatedResponse = data.choices[0].message.content;

  return generatedResponse;
}