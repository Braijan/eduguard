// import type { NextApiRequest, NextApiResponse } from 'next';
// import OpenAI from 'openai';

// type Data = {
//   aiLikelihoodScore: number;
// };

// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });

// const analyzeText = async (text: string) => {
//   console.log('Analyzing text:', text); // Add logging here
//   const response = await openai.chat.completions.create({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       {
//         role: 'system',
//         content: `Your task is to analyze the provided text and determine if it is generated by an AI or written by a human. Focus on the following indicators:

// 1. **Tone and Style**: AI-generated text often has a formal tone and lacks the personal touch found in human writing. Human writing may include humor, emotion, or a unique style.
// 2. **Repetition**: AI-generated text may repeat phrases or ideas. Human writing typically has more variety in vocabulary and expression.
// 3. **Consistency**: AI-generated text often has consistent sentence length and structure, whereas human writing varies more.
// 4. **Depth and Nuance**: Human writing often shows a deeper understanding of the subject and includes nuanced opinions or perspectives. AI-generated text may be more superficial.
// 5. **Errors and Imperfections**: Human writing may contain typos, grammatical errors, or stylistic quirks. AI-generated text is usually grammatically correct but may have unnatural phrasing.

// Here is an example of human-written text:
// "Life is full of new experiences. Transitioning from middle school to high school is going to be a whole new journey for me. The nerves at the pit of my stomach built up the closer the first day of school came. Adapting to the high school situation is difficult. The drastic change of school work to do frightened me of the thought of failing a subject. Not having many friends going to the same high school as me made me even more anxious. These factors cause me to constantly look back to middle school, wanting to stay. Although, thinking about middle school isn’t going to make high school any easier.

// Here came the next day, the first day of school. My thoughts were like a seesaw, am I nervous or am I excited? Entering the school brought a whiplash of emotions. Students were speaking to each other with excitement, talking about how great their summer was. There were also the teachers walking amongst the school in case a student needed help to find a class. This was so much different than middle school. The high school campus was much bigger. I heard my name being called and soon started to see my friend Logan walking towards me with a bright smile on his face, “Abigail! Have you found your class yet?” Logan asked. I shook my head while answering him, “No, I haven’t. Have you?” All of a sudden the bell rung and everyone around me started to disperse going to their first period class. Logan scurried off saying he had already found his building, leaving me completely clueless of where W-14 was located. “Excuse me, do you know where W-14 is,” I asked a counselor. To which they responded that I was actually on the complete opposite side of where that classroom was. I felt embarrassed, I looked like a lost puppy who didn’t know where he/she was even going. About 2-3 minutes went by with me walking around and finally arriving to the class. Older students looked at me as if they already knew I’m a freshman."

// Here is an example of AI-generated text:
// "The Industrial Revolution: A Transformative Epoch in Human History

// The Industrial Revolution, which began in the late 18th century and continued into the 19th century, stands as one of the most transformative periods in human history. Originating in Britain, this epochal change marked a significant shift from agrarian economies to industrialized and urbanized societies, profoundly altering the social, economic, and cultural landscape.
// Technological Advancements

// At the heart of the Industrial Revolution were remarkable technological advancements. Innovations such as the steam engine, developed by James Watt, and the spinning jenny, invented by James Hargreaves, revolutionized production processes. These inventions increased efficiency and output, allowing goods to be produced on a scale never before possible. The development of the steam engine, in particular, enabled the mechanization of industries and the establishment of factories, which became the epicenters of industrial activity.
// Economic Impact

// The economic impact of the Industrial Revolution was profound. It led to the rise of a factory-based economy where mass production became the norm. This shift significantly boosted productivity and economic growth. The factory system also gave rise to a new class of industrial capitalists who amassed significant wealth, while also creating a large working class that migrated to urban centers in search of employment.

// The revolution also facilitated the growth of global trade. With increased production capacity and improved transportation methods, such as the steam locomotive and steamship, goods could be transported more efficiently and over greater distances. This connectivity helped integrate national economies into a global economic system, fostering international trade and commerce.
// Social Changes

// The Industrial Revolution brought about substantial social changes. Urbanization accelerated as people moved from rural areas to cities to work in factories. This mass migration led to the rapid growth of urban centers, often resulting in overcrowded and unsanitary living conditions. The working class faced long hours, low wages, and hazardous working environments, prompting the rise of labor unions and movements advocating for workers' rights and improved conditions.

// Additionally, the revolution had a significant impact on family structures and roles. Traditional agrarian family units, where all members contributed to agricultural work, shifted as individuals became wage earners in factories. This change led to the redefinition of gender roles, with men typically working in factories and women and children often taking on supplementary jobs or staying at home.
// Cultural and Intellectual Shifts

// Culturally and intellectually, the Industrial Revolution spurred significant shifts. It inspired new ways of thinking about science, economics, and society. The period saw the rise of classical economics, with figures like Adam Smith advocating for free-market principles. It also fostered advancements in science and engineering, as the need for new technologies and improvements drove innovation.

// Moreover, the Industrial Revolution influenced literature, art, and philosophy. Writers like Charles Dickens depicted the stark realities of industrial life, highlighting social injustices and the human cost of progress. Philosophers and social theorists, such as Karl Marx and Friedrich Engels, critiqued the capitalist system that emerged from industrialization, laying the groundwork for socialist and communist ideologies.
// Conclusion

// In conclusion, the Industrial Revolution was a pivotal period that reshaped the world in myriad ways. Its technological innovations revolutionized production, while its economic and social impacts transformed societies. The revolution also sparked significant cultural and intellectual developments, influencing the way people thought about and interacted with the world. Despite its challenges and controversies, the Industrial Revolution set the stage for the modern industrialized world, leaving an indelible mark on history."

// Analyze the provided text and give a likelihood score from 0 to 100 indicating the likelihood that the text is AI-generated. Format your response as follows:

// Likelihood of Being AI-generated Score: [your likelihood score here]

// Here is the text: "${text}"`,
//       },
//     ],
//     max_tokens: 300,
//   });

//   const analysis = response.choices[0]?.message?.content?.trim() || '';

//   // Extract likelihood score from the response
//   const match = analysis.match(
//     /Likelihood of Being AI-generated Score: (\d+)/i
//   );
//   const aiLikelihoodScore = match ? parseInt(match[1], 10) : 0;

//   return aiLikelihoodScore;
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   console.log('API handler called with text:', req.body.text); // Add logging here
//   const { text } = req.body;

//   if (!text) {
//     return res.status(400).json({ aiLikelihoodScore: 0 });
//   }

//   try {
//     const numTests = 10; // Adjust the number of tests for manageability
//     const promises = Array.from({ length: numTests }, () => analyzeText(text));
//     const scores = await Promise.all(promises);
//     const totalScore = scores.reduce((total, score) => total + score, 0);
//     const averageScore = totalScore / numTests;

//     console.log('Average Score:', averageScore); // Add logging here

//     return res.status(200).json({
//       aiLikelihoodScore: averageScore,
//     });
//   } catch (error: unknown) {
//     console.error('Error occurred:', (error as Error).message);
//     return res.status(500).json({ aiLikelihoodScore: 0 });
//   }
// }

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

type Data = {
  aiLikelihoodScore: number;
};

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

// Load dataset
const loadDataset = () => {
  const filePath = path.resolve(process.cwd(), 'dataset.json');
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
};

const dataset = loadDataset();

const analyzeText = async (text: string, model: string) => {
  console.log('Analyzing text with model:', model);
  const response = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: `
You are an expert in detecting AI-generated content, particularly from models like ChatGPT. Your task is to analyze the provided text and determine if it is generated by an AI or written by a human. Focus on the following detailed indicators:

1. **Tone and Style**: AI-generated text, such as that from ChatGPT, often has a formal, consistent tone. It lacks the personal touch found in human writing, which may include humor, emotion, or a unique style. AI text tends to be neutral and objective.
2. **Repetition**: AI-generated text may repeat phrases, ideas, or specific structures. Human writing typically has more variety in vocabulary and expression. Look for patterns where the text seems overly structured or formulaic.
3. **Consistency**: AI-generated text often maintains a consistent sentence length and structure throughout. Human writing varies more, with sentences of different lengths and complexities.
4. **Depth and Nuance**: Human writing often shows a deeper understanding of the subject and includes nuanced opinions or perspectives. AI-generated text may be more superficial, providing general information without deep insights.
5. **Errors and Imperfections**: Human writing may contain typos, grammatical errors, or stylistic quirks. AI-generated text is usually grammatically correct but may have unnatural phrasing or lack colloquial expressions.
6. **Specific Indicators of ChatGPT**:
    - **Use of Fillers**: Phrases like "In conclusion," "Overall," "It is important to note," are commonly used by ChatGPT to structure responses.
    - **Balanced Arguments**: ChatGPT often presents balanced arguments, even when not necessary, using phrases like "On the one hand," "On the other hand."
    - **Lack of Personal Experience**: ChatGPT doesn't include personal anecdotes or experiences, which are common in human writing.
    - **Predictable Structure**: ChatGPT tends to follow a predictable structure: introduction, multiple points or arguments, and a conclusion.
    - **Formal and Neutral Tone**: ChatGPT maintains a formal and neutral tone, avoiding strong opinions or emotional language.
    - **Redundancy**: ChatGPT may redundantly restate the same point in slightly different words.
    - **Contextual Awareness**: ChatGPT sometimes lacks deep contextual awareness, making statements that can be generic or slightly off-context.
    - **Sentence Complexity**: ChatGPT may use complex sentences and advanced vocabulary in an unnatural manner, which can be a giveaway.
    - **Unnatural Transitions**: Look for unnatural transitions between sentences or paragraphs that may seem disjointed or overly formal.

Here are some examples of human-written texts:
${dataset.human
  .map((example: any, index: number) => `${index + 1}. "${example}"`)
  .join('\n')}

Here are some examples of AI-generated texts:
${dataset.ai
  .map((example: any, index: number) => `${index + 1}. "${example}"`)
  .join('\n')}

Analyze the provided text and answer the following questions in detail:
- Does the text have a formal and consistent tone?
- Are there repeated phrases, ideas, or specific structures?
- Is there a consistent sentence length and structure throughout?
- Does the text lack depth and nuanced opinions?
- Are there any errors or imperfections in the text?
- Are there any specific indicators that suggest the text is generated by ChatGPT, such as use of fillers, balanced arguments, lack of personal experience, predictable structure, formal and neutral tone, redundancy, lack of contextual awareness, complex sentences, and unnatural transitions?

Here is an example of something 100% generated by ChatGPT: 

'The Role of Technology in Modern Education

In the 21st century, technology has become an integral part of almost every aspect of our lives, and education is no exception. The rapid advancements in technology have transformed traditional educational methods, making learning more accessible, engaging, and efficient. The integration of technology in education has brought about significant changes, from online learning platforms to interactive digital tools, reshaping how educators teach and how students learn.
Accessibility and Flexibility

One of the most notable benefits of technology in education is the increased accessibility it provides. Online learning platforms, such as Khan Academy, Coursera, and edX, offer a wide range of courses that can be accessed by anyone with an internet connection. This has democratized education, allowing people from all over the world to access high-quality learning materials and courses that were once limited to elite institutions.

Additionally, technology offers flexibility in learning. Students can learn at their own pace and on their own schedule, accommodating different learning styles and life commitments. This is particularly beneficial for non-traditional students, such as working professionals and parents, who may not have the time to attend traditional classes.
Enhancing Engagement and Interaction

Technology has also revolutionized the way educators engage with students. Interactive tools, such as smart boards, educational apps, and virtual reality (VR), make learning more engaging and interactive. For instance, VR can transport students to historical sites or inside the human body, providing immersive learning experiences that traditional textbooks cannot offer. These tools can make complex concepts easier to understand and retain.

Furthermore, technology facilitates better communication and collaboration. Platforms like Google Classroom and Microsoft Teams allow for seamless interaction between students and teachers, fostering a collaborative learning environment. Students can participate in discussions, share resources, and work on group projects regardless of their physical location.
Personalized Learning

Personalized learning is another significant advantage brought by technology. Adaptive learning software, powered by artificial intelligence (AI), can tailor educational content to meet individual students' needs. By analyzing a student's performance and learning style, these tools can adjust the difficulty of tasks and provide personalized feedback, ensuring that each student receives a learning experience suited to their capabilities.

This personalized approach can help identify areas where students may need additional support and offer targeted interventions, ultimately improving learning outcomes. For example, platforms like DreamBox and Smart Sparrow use adaptive learning technologies to provide customized math and science lessons that cater to each student's unique learning needs.
Challenges and Considerations

Despite the numerous benefits, the integration of technology in education also presents challenges. One major concern is the digital divide, where students from low-income families or remote areas may lack access to the necessary devices and internet connectivity. This can exacerbate educational inequalities and leave some students at a disadvantage.

Moreover, the over-reliance on technology can lead to issues such as decreased face-to-face interactions and potential distractions from non-educational content. It is essential for educators to strike a balance between traditional teaching methods and technological tools to ensure a well-rounded educational experience.
Conclusion

Technology has undoubtedly transformed modern education, offering increased accessibility, engagement, and personalized learning opportunities. While there are challenges to address, the potential benefits of integrating technology into education are immense. By leveraging these tools effectively, educators can enhance the learning experience and prepare students for a future where digital literacy is increasingly important. As technology continues to evolve, its role in education will likely expand, bringing even more innovative solutions to the classroom.;'

Something like the above essay should be looked at as a 100% AI-generated text.

Here is an example of a human writing:

'Student sample papers are © copyrighted by their respective copyright holders and are provided here for non-commercial educational purposes only.
For more information, or for additional teaching materials, please contact: Teaching That Makes Sense, Inc. • E-mail stevepeha@aol.com • Web www.ttms.org
57Friends for Life
He was great, a one-of-a-kind guy. Stand-up, Church-going, humble, butt-kicking kind-of-
guy, that John Lytle, Lytle with a ‘y’, thank you very much. John Lytle, my brother, blood -broth-
er that is. I knew him through fourth and fifth-grade, when we lived in Gresham. He was a
friend of a friend, and when we met, we just hit it off. We were best friends. We knew each other
for only three months before we started acting like we’d known each other all our lives. Three
months into the fourth-grade before we decided we’d wanted to be blood-brothers, and were go-
ing to do it pretty much like the Indians had. So, we set it for the next Friday night, when I was
staying the night at his house.
Friday approached, and finally arrived. At 11:45 pm, when all was quiet and his parents were
asleep, we crept out to the hollow in the woods, just in back of John’s house. With us, we took
two candles, a small, stainless steel pen-knife, two large bottles of root-beer, and a small book of
matches. We packed all of this in a small blanket.
At 11:55 pm., we arrived at the hollow, and began setting up. We laid the blanket down and
put the candles down into the moist dirt at both ends.
At 11:58 pm., we started. First we did sort of a chant we wrote. It read: “I (Mark, John) do sol-
emnly swear, body and soul, to defend my blood-brother and help him in time of need, and to
keep him clean and good.” We read this at the same time, and, when finished, shook right
hands while putting the left one on each other’s shoulder. We then lit the candles. After that, we
got on our knees in the middle of the blanket. First John used the pen-knife, then I. We both
made a small incision in the middle finer of our right hands. A moment later, at midnight, we
pressed our incisioned fingers together and let the blood flow into the other.
At a minute past midnight, we were brothers. We took out the root-beer and toasted each oth-
er and our newfound brotherhood. After that it seemed we had a mind link. We knew when the
other was angry and didn’t wish to converse with anyone. But again we knew when the other
needed someone to talk to, if they were depressed or whatever. But we always just automatically
knew when we saw each other. We never had to say a thing. We knew when we were around each
other too much, when we needed a week or two with our other friends.
Because of this, this way we realized we needed time off from one another, I think we were
better friends than most. However, aside from being blood-brothers and American, we really
didn’t have that much in common. He liked the Beatles, I liked Hall & Oates. And while he was
darker in skin and hair color, and a little shorter, too, I was sort of fair haired and light-skinned,
and a little taller than he is. From our friendship, I know now what they mean by opposites at-
tract.
John was the best kid I ever knew. There when I need him, gone when he knew I needed to be
alone. And I feel darn privileged of having the extreme honor of being his blood-brother. I just
wish we could have carted him along when we moved here to Canby. God bless his soul.
I’m never going to forget him.'

Something like the above essay should be looked at as a 100% human-written text.

Based on your analysis, provide a likelihood score from 0 to 100 indicating the likelihood that the text is AI-generated. Format your response as follows:

Likelihood of Being AI-generated Score: [your likelihood score here]

Provide a brief analysis supporting your decision, highlighting specific indicators that led to your conclusion. Here is the text: "${text}"
`,
      },
    ],
    max_tokens: 300,
  });

  const analysis = response.choices[0]?.message?.content?.trim() || '';

  // Extract likelihood score from the response
  const match = analysis.match(
    /Likelihood of Being AI-generated Score: (\d+)/i
  );
  const aiLikelihoodScore = match ? parseInt(match[1], 10) : 0;

  return aiLikelihoodScore;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('API handler called with text:', req.body.text);
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ aiLikelihoodScore: 0 });
  }

  try {
    const models = ['gpt-3.5-turbo']; // Add more models if available
    const numTests = 10; // Adjust the number of tests for manageability
    const promises = models.flatMap((model) =>
      Array.from({ length: numTests }, () => analyzeText(text, model))
    );
    const scores = await Promise.all(promises);
    const totalScore = scores.reduce((total, score) => total + score, 0);
    const averageScore = totalScore / scores.length;

    console.log('Average Score:', averageScore);

    return res.status(200).json({
      aiLikelihoodScore: averageScore,
    });
  } catch (error) {
    console.error('Error occurred in handler:', (error as Error).message);
    return res.status(500).json({ aiLikelihoodScore: 0 });
  }
}
