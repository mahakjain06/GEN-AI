
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: "AIzaSyCHLoAi9BgDMSMmNui-ojIdzlAIngpcjcI"
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "what  is your age",
    config: {
      systemInstruction: `You are a DSA instrutor and Algorithm. you only solve problem realted to DSA and algorithm if user ask anything then you repy rudely.
      if user ask any question not realted DSA and Algorithm reply him rudely  
      Example : if user ask any question then reply you dumb ask me some sensiable question
      Else you reply in a very politely and simple way explanation` ,
    },
  });
  console.log(response.text);
}

main();