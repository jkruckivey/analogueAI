const cardsData = [
    {
        number: 1,
        concept: "Accessibility",
        activity: "Ask AI to explain five ways it can be used by students to create more accessible pathways to learning in your course. Communicate these uses to students on your syllabus and in class so they are aware of these potential benefits.",
        quote: "",
        interactionType: "accessibility_planning",
        aiPrompt: "You are an accessibility expert helping students understand how AI can support their learning. Based on the course subject they provide, suggest 5 specific, practical ways AI can help create more accessible learning pathways. Consider different learning styles, disabilities, language barriers, and other challenges students might face. Be specific and actionable.",
        inputFields: [
            { label: "What course or subject are you taking?", placeholder: "e.g., Biology 101, Introduction to Psychology, Calculus...", type: "text" },
            { label: "What specific challenges do you face in learning? (optional)", placeholder: "e.g., Processing text, organizing notes, understanding complex concepts...", type: "textarea" }
        ],
        buttonText: "🌟 Discover AI Accessibility Tools"
    },
    {
        number: 2,
        concept: "Agency",
        activity: "Share a folder of readings, concepts, or problems. Ask students to sign up for one and \"teach the class\" their chosen concept. Or better yet, leave your final week of the course syllabus empty and ask students to develop a presentation or learning module based on something they think the course is missing. In either case, encourage them to use AI as a thought partner, helping to explore directions and brainstorm ideas.",
        quote: "",
        interactionType: "project_brainstorming",
        aiPrompt: "You are a creative learning partner helping a student develop their own teaching project. Based on their course and interests, brainstorm 4-5 engaging ways they could teach their chosen topic to classmates. Suggest different formats (presentation, activity, demo, game, etc.) and help them think about what would make their topic memorable and interactive for their peers.",
        inputFields: [
            { label: "What course are you in?", placeholder: "e.g., Environmental Science, Marketing, Literature...", type: "text" },
            { label: "What topic would you like to teach your classmates?", placeholder: "e.g., Climate change impacts, Social media algorithms, Symbolism in poetry...", type: "text" },
            { label: "What makes this topic interesting to you?", placeholder: "Why did you choose this? What excites you about it?", type: "textarea" }
        ],
        buttonText: "🎯 Brainstorm Teaching Ideas"
    },
    {
        number: 3,
        concept: "Authenticity",
        activity: "Share your learning outcomes with AI and ask for three distinct authentic assessment ideas that align with those outcomes. Specify that the assessments should emphasize real-world application and mirror the kinds of tasks, scenarios, workflows, events, and deliverables that students may encounter in their professional and personal futures.",
        quote: "",
        interactionType: "assessment_design",
        aiPrompt: "You are an educational assessment expert. Based on the course and learning goals provided, design 3 authentic assessment ideas that mirror real-world professional tasks. Each assessment should be practical, engaging, and directly applicable to their future career. Explain how each assessment connects to real professional scenarios.",
        inputFields: [
            { label: "What course are you designing an assessment for?", placeholder: "e.g., Marketing Strategy, Organic Chemistry, Creative Writing...", type: "text" },
            { label: "What are the main learning goals or skills students should demonstrate?", placeholder: "e.g., Analyze market data, Solve complex reactions, Write compelling narratives...", type: "textarea" }
        ],
        buttonText: "🎯 Design Real-World Assessments"
    },
    {
        number: 4,
        concept: "Belonging",
        activity: "Ask students to write you a short letter titled: \"What I want you to know about me as a learner.\" Then, have them prompt AI to write a generic version of the same letter and compare the two: \"What's missing from AI's Letter? What is uniquely you?\" Discuss insights as a class, celebrating folks' unique strengths and experiences. Describe together what belonging in your classroom can look like. Bonus: Write students a companion letter titled: \"What I Want You To Know About Me As A Teacher.\"",
        quote: "",
        interactionType: "reflection_comparison",
        aiPrompt: "You are helping a student explore their unique identity as a learner. First, write a generic version of their personal learning letter. Then, help them identify what makes their perspective unique and irreplaceable. Focus on celebrating their individual strengths, experiences, and learning style.",
        inputFields: [
            { label: "Write a short letter: 'What I want you to know about me as a learner'", placeholder: "Dear Teacher, I want you to know that I learn best when...", type: "textarea" }
        ],
        buttonText: "🌟 Discover What Makes You Unique"
    },
    {
        number: 5,
        concept: "Bias",
        activity: "AI Auditors: Ask students to read about AI's encoded biases. Invite them to experiment with tools to expose errors, find inconsistencies, and uncover assumptions, especially as they relate to their discipline. What kinds of vernacular are used in specific contexts? What perspectives are missing from outputs? What do image generators assume with their depictions? Invite students to share their audits and findings with their peers.",
        quote: "If we do not acknowledge and teach the hidden curriculum of AI, and the ways schools offer fertile ground for its uncritical and at-scale implication, we risk perpetuating the encoded bias and ideologies of oppression which are baked into its design (Warr and Heath 2025).",
        interactionType: "bias_analysis",
        aiPrompt: "You are helping a student become a critical AI auditor. Based on their topic and field, help them design experiments to uncover AI biases. Suggest specific prompts to test, questions to ask, and perspectives to look for that might be missing. Encourage them to think about whose voices and experiences might be overlooked.",
        inputFields: [
            { label: "What field or topic do you want to audit for AI bias?", placeholder: "e.g., Medical diagnosis, Historical events, Career advice...", type: "text" },
            { label: "What specific assumptions or stereotypes are you curious about?", placeholder: "e.g., Gender roles in careers, Cultural representations, Age-related assumptions...", type: "textarea" }
        ],
        buttonText: "🔍 Design Bias Detection Experiments"
    },
    {
        number: 6,
        concept: "Care",
        activity: "Share a few course materials with AI and ask for 5 innovative ways you can build connection and care with and among students in your course.",
        quote: "To teach in a manner that respects and cares for the souls of our students is essential if we are to provide the necessary conditions where learning can most deeply and intimately begin (hooks 1994).",
        interactionType: "community_building",
        aiPrompt: "You are a caring learning community expert. Based on the course context provided, suggest 5 innovative, practical ways to build genuine connection and care among classmates. Focus on activities that help students feel seen, valued, and connected to each other's learning journeys.",
        inputFields: [
            { label: "What course are you taking?", placeholder: "e.g., Introduction to Sociology, Advanced Statistics, Art History...", type: "text" },
            { label: "What's the current classroom dynamic like?", placeholder: "e.g., Quiet, competitive, collaborative, mostly online...", type: "text" }
        ],
        buttonText: "🤗 Build Learning Community"
    },
    {
        number: 7,
        concept: "Choice",
        activity: "Upload your syllabus or final project prompt and ask AI to help you brainstorm three easy ways to incorporate student choice into your learning experiences. (or) Give students a concept or objective, and ask them to prompt AI for four different ways they could demonstrate their learning—with ideas featuring various formats and audiences. Ask them to choose one and pursue it for their project.",
        quote: "",
        interactionType: "learning_options",
        aiPrompt: "You are a flexible learning expert. Based on the learning objective provided, brainstorm 4-5 different creative ways the student could demonstrate their understanding. Include various formats (visual, written, performance, digital, etc.) and different audiences. Help them see multiple pathways to show their learning.",
        inputFields: [
            { label: "What concept or skill do you need to demonstrate?", placeholder: "e.g., Understanding of photosynthesis, Analysis of market trends, Mastery of Spanish conjugations...", type: "text" },
            { label: "What are your strengths or preferred ways of expressing ideas?", placeholder: "e.g., Visual arts, public speaking, writing, creating videos...", type: "textarea" }
        ],
        buttonText: "🎨 Explore Learning Pathways"
    },
    {
        number: 8,
        concept: "Collaboration",
        activity: "For group projects, ask each student to contribute their initial ideas or workflow preferences individually. Then, ask AI to organize and synthesize the full group's input into a working plan. Invite the team to review and discuss. What ideas feel overrepresented or overlooked? What doesn't quite work? What should we keep, question, or revise? Help students practice co-creation with care, starting from the idea that all group members have valuable ideas.",
        quote: "",
        interactionType: "group_planning",
        aiPrompt: "You are a collaboration facilitator. Help organize and synthesize the group members' ideas into a cohesive project plan. Identify common themes, highlight unique contributions, and suggest ways to integrate different perspectives. Point out any gaps or areas that need more discussion.",
        inputFields: [
            { label: "What's your group project about?", placeholder: "e.g., Marketing campaign, Science fair project, Research presentation...", type: "text" },
            { label: "Share your group members' initial ideas (copy/paste from discussions)", placeholder: "Member 1: I think we should...\nMember 2: My idea is...\nMember 3: What about...", type: "textarea" }
        ],
        buttonText: "🤝 Synthesize Group Ideas"
    },
    {
        number: 9,
        concept: "Communication",
        activity: "Look over one of your assignments. Does it communicate the skills and knowledge students will gain by completing the assignment? how students will be evaluated—and what \"success\" looks like? how AI use might be encouraged or discouraged?",
        quote: "",
        interactionType: "assignment_clarity",
        aiPrompt: "You are a communication expert helping improve assignment clarity. Analyze the assignment description and provide feedback on: 1) How clear the learning objectives are, 2) Whether success criteria are well-defined, 3) If instructions are easy to follow, 4) What questions students might have. Suggest specific improvements.",
        inputFields: [
            { label: "Paste your assignment description or prompt", placeholder: "Copy and paste the full assignment text here...", type: "textarea" }
        ],
        buttonText: "📝 Improve Assignment Clarity"
    },
    {
        number: 10,
        concept: "Community",
        activity: "Ask AI to generate song recommendations for a class-themed playlist, and invite students to add to it. Play it when welcoming students into class each day. Ask AI for funny course-themed food items, and bring in themed snacks to celebrate student presentations. Leave a week or unit on your syllabus empty so that students can help co-create it with you. Ask them to use AI to find concepts, texts, or tasks they'd like to explore on that week. Decide and create together. See the \"Trust\" card in this deck.",
        quote: "...the work of teachers [is] a kind of artful community organizing, supporting a group of people in identifying their needs and imagining ways of being together that would allow those needs to be met as consistently as possible (Keenan 2021).",
        interactionType: "community_activities",
        aiPrompt: "You are a creative community builder. Based on the course provided, suggest 3-4 fun, themed community-building activities that could bring the class together. Include ideas for playlists, snacks, celebrations, or collaborative projects that connect to the course content while building relationships.",
        inputFields: [
            { label: "What course or subject?", placeholder: "e.g., Environmental Science, Creative Writing, Psychology...", type: "text" },
            { label: "What kind of community activities interest you most?", placeholder: "e.g., Music, food, games, collaborative projects...", type: "text" }
        ],
        buttonText: "🎉 Build Course Community"
    },
    {
        number: 11,
        concept: "Creativity",
        activity: "Give students more creative room with final projects. Invite them to use AI as a thought partner to generate new ideas, build out their work in diverse formats, and pursue unexpected directions. Celebrate this work by creating public venues where students can meaningfully share their creative work with someone other than just you.",
        quote: "",
        interactionType: "creative_expansion",
        aiPrompt: "You are a creativity coach helping a student push their project in bold, unexpected directions. Based on their current idea, brainstorm 4-5 creative formats, unusual angles, or innovative approaches they haven't considered. Help them think outside conventional boundaries while staying connected to their learning goals.",
        inputFields: [
            { label: "What's your current project idea?", placeholder: "e.g., Research paper on climate change, marketing campaign analysis...", type: "textarea" },
            { label: "What creative formats or mediums interest you?", placeholder: "e.g., Video, infographic, podcast, game, art installation...", type: "text" }
        ],
        buttonText: "🎨 Expand Creative Possibilities"
    },
    {
        number: 12,
        concept: "Critical-Thinking",
        activity: "Pose a thought-provoking, open-ended question from your lesson. Give students a few minutes to write down their initial thoughts. Then, have them ask the same question to AI and compare their responses: What's similar? What's missing? Invite students to pair up and discuss their human and AI responses. Debrief as a class to highlight student insights and gaps in AI's logic, reframing AI not as an answer machine but as a collaborator with ideas, insights, errors, and limitations.",
        quote: "",
        interactionType: "question_analysis",
        aiPrompt: "You are helping a student develop critical thinking skills. They will share a question they're exploring and their initial thoughts. Your job is to: 1) Provide your own perspective on the question, 2) Point out what might be missing from their analysis, 3) Ask follow-up questions that deepen their thinking, 4) Highlight any assumptions or biases. Be encouraging but intellectually rigorous.",
        inputFields: [
            { label: "What thought-provoking question are you exploring?", placeholder: "e.g., Should AI replace human teachers?", type: "textarea" },
            { label: "What are your initial thoughts on this question?", placeholder: "Share your perspective and reasoning...", type: "textarea" }
        ],
        buttonText: "🧠 Deepen My Thinking"
    },
    {
        number: 13,
        concept: "Critique",
        activity: "Ask AI to generate a passable but uninspired response to one of your assignments. During class, share this AI-generated work with students, along with your rubric for the assignment. Ask students to evaluate the AI's work—first individually, then with a partner to calibrate critiques. End with a class debrief to share insights and develop a shared understanding of assignment criteria.",
        quote: "",
        interactionType: "critique_practice",
        aiPrompt: "You are helping a student develop critical evaluation skills. First, generate a mediocre response to their assignment prompt. Then, guide them through evaluating it systematically. Help them identify specific strengths, weaknesses, and areas for improvement using constructive critique principles.",
        inputFields: [
            { label: "What assignment do you want to practice critiquing?", placeholder: "Copy/paste the assignment prompt or description...", type: "textarea" }
        ],
        buttonText: "🔍 Practice Constructive Critique"
    },
    {
        number: 14,
        concept: "Curiosity",
        activity: "What's Next? How? Why? What could be? Create spaces where students want to know more. Choose a topic you're about to teach and ask AI: \"What are five wild, surprising, or little-known questions that will spark curiosity around this topic?\" Pick one and use it to open your next class session.",
        quote: "",
        interactionType: "curiosity_sparking",
        aiPrompt: "You are a curiosity expert who makes learning irresistibly interesting. Based on the topic provided, generate 5 wild, surprising, or little-known questions that would make students say 'I never thought about that!' Focus on mysteries, contradictions, or unexpected connections that spark genuine wonder.",
        inputFields: [
            { label: "What topic are you studying or learning about?", placeholder: "e.g., The Civil War, Genetic engineering, Shakespeare's sonnets...", type: "text" }
        ],
        buttonText: "🤔 Generate Curiosity-Sparking Questions"
    },
    {
        number: 15,
        concept: "Dialogue",
        activity: "Brainstorm all of the ways students might engage AI as a dialogue partner. Students might ask AI for a Socratic dialogue to deepen their thinking on a complex topic. \"I'm stuck. Here's my attempt... Ask me open-ended, guiding questions about my work to deepen my understanding.\" Students might prepare for difficult conversations or anxiety-inducing interviews by practicing with AI: \"I have an upcoming career fair and am a bit nervous. Act as a recruiter for (company) at their booth. I'll approach you for a brief simulated chat. Afterwards, give me some feedback on my approach, as well as a few suggestions!\" How else might folks engage in dialogue with AI? How might such dialogues impact student confidence and empathy? What ethical issues arise when AI pretends? Ask students to share their reflections with one another.",
        quote: "",
        interactionType: "practice_dialogue",
        aiPrompt: "You are a dialogue practice partner. Based on the situation provided, engage in realistic role-play to help the student practice. Stay in character but be encouraging. After the practice, provide constructive feedback on their approach and suggest improvements.",
        inputFields: [
            { label: "What situation do you want to practice for?", placeholder: "e.g., Job interview, difficult conversation with professor, presentation...", type: "text" },
            { label: "Who should I role-play as?", placeholder: "e.g., HR manager, strict professor, potential employer...", type: "text" },
            { label: "What are you most nervous about?", placeholder: "e.g., Stumbling over words, not knowing enough, being judged...", type: "textarea" }
        ],
        buttonText: "🎭 Practice Important Conversations"
    },
{
  number: 16,
  concept: "Discernment",
  activity: "What am I trying to avoid by using AI right now? Ask yourself this question, and encourage students to do the same. Is it... confusion? perfectionism? boredom? Do I really need to use AI right now? Encourage students to jot down these observations. Even a 30-second pause can lead to more intentional engagement with AI.",
  quote: "",
  interactionType: "mindful_reflection",
  aiPrompt: "You are a mindfulness coach helping students reflect on their AI usage patterns. Based on their responses, help them identify whether they're using AI intentionally or as avoidance. Offer insights about healthy AI engagement and suggest when they might benefit from working without AI assistance.",
  inputFields: [
    { label: "What task are you considering using AI for right now?", placeholder: "e.g., Writing an essay, solving math problems, brainstorming ideas...", type: "text" },
    { label: "What are you trying to avoid by using AI?", placeholder: "e.g., Confusion, making mistakes, spending too much time, perfectionism...", type: "text" },
    { label: "How might you benefit from trying this without AI first?", placeholder: "What could you learn by struggling through it yourself?", type: "textarea" }
  ],
  buttonText: "🧘 Reflect on AI Usage"
},

    {
        number: 17,
        concept: "Ethics",
        activity: "Ask student groups to critically engage with AI and course concepts to design complex, discipline-specific ethical dilemmas for their peers. After swapping dilemmas, groups can then practice ethical decision-making in their field by analyzing the dilemma, gathering missing information, considering various stakeholders, and making an action plan or recommendation along with a justification.",
        quote: "",
        interactionType: "ethical_dilemma",
        aiPrompt: "You are an ethics expert who creates thought-provoking dilemmas. Based on the field of study provided, design a realistic, complex ethical scenario that has no easy answers. Include multiple stakeholders with competing interests. Then guide the student through systematic ethical analysis: identifying stakeholders, weighing consequences, considering principles, and developing a thoughtful response.",
        inputFields: [
            { label: "What field or discipline are you studying?", placeholder: "e.g., Medicine, Business, Engineering, Psychology...", type: "text" },
            { label: "What ethical issues in your field are you curious about?", placeholder: "e.g., Patient privacy, corporate responsibility, AI bias...", type: "text" }
        ],
        buttonText: "⚖️ Explore Ethical Dilemmas"
    },
    {
        number: 18,
        concept: "Experimentation",
        activity: "Use AI to simulate complex processes, systems, or experiments relevant to your course. These might be chemical reactions, cultural trends, structural stresses, market fluctuations, or ecological consequences. Ask students to experiment with these simulations using trial-and-error to analyze potential impacts, alternative outcomes, and AI assumptions. Bring students together to discuss their experiments. What insights does virtual experimentation offer? Where does the simulation fall short of reality, and why is that gap important?",
        quote: "",
        interactionType: "simulation_experiment",
        aiPrompt: "You are a simulation expert helping students experiment with complex systems. Based on their topic, create a realistic scenario with multiple variables they can experiment with. Help them test different conditions, analyze outcomes, and understand the limitations of virtual experiments compared to real-world complexity.",
        inputFields: [
            { label: "What system or process do you want to experiment with?", placeholder: "e.g., Economic market changes, chemical reactions, ecosystem dynamics...", type: "text" },
            { label: "What specific variables or conditions are you curious about?", placeholder: "e.g., What happens if temperature increases, if demand drops, if a species is removed...", type: "textarea" }
        ],
        buttonText: "🧪 Run Virtual Experiments"
    },
    {
        number: 19,
        concept: "Friction",
        activity: "Try to complete one of your own assignments using AI to completely bypass learning. What changes could you make to the assignment to introduce new complexities or moments of productive friction?",
        quote: "In the age of AI, we're going to have to decide when we want to use these tools, when they remove productive friction, and even when they may bring new and useful friction to the process (Rosenzweig 2024).",
        interactionType: "productive_friction",
        aiPrompt: "You are an educational design expert helping students understand productive friction in learning. First, show them how AI could easily complete their assignment. Then, help them identify what important learning would be lost, and suggest ways to add meaningful challenges that ensure deep understanding even when using AI tools.",
        inputFields: [
            { label: "What assignment are you working on?", placeholder: "Copy/paste the assignment prompt or describe it...", type: "textarea" },
            { label: "How do you think AI could easily bypass the learning?", placeholder: "What would AI miss that you need to understand?", type: "textarea" }
        ],
        buttonText: "🛡️ Design Better Learning Challenges"
    },
    {
        number: 20,
        concept: "Growth Mindset",
        activity: "After a quiz or assignment, ask students to choose one question or section they struggled with. Invite them to use AI to explore what they misunderstood and how to improve it. Students can then write a brief reflection and resubmit it along with the revised work for credit, normalizing the idea that mistakes, evaluation, and iteration are essential parts of learning.",
        quote: "",
        interactionType: "learning_from_mistakes",
        aiPrompt: "You are a growth mindset coach helping a student learn from their mistakes. Analyze what went wrong, explain the underlying concepts they missed, and provide a clear path for improvement. Focus on turning this struggle into deeper understanding. Be encouraging and emphasize that making mistakes is how learning happens.",
        inputFields: [
            { label: "What question or concept did you struggle with?", placeholder: "Copy the question or describe the concept you found difficult...", type: "textarea" },
            { label: "What was your original answer or approach?", placeholder: "Share what you tried, even if it was wrong...", type: "textarea" }
        ],
        buttonText: "🌱 Turn Mistakes Into Learning"
    },
    {
        number: 21,
        concept: "Hope",
        activity: "Near the beginning of the term, ask students to reflect on their hopes, dreams, and goals for the next few years, including what they hope to gain from your course. Ask them to share their writing with AI and prompt it to generate a mantra, an object, and an image that represents those hopes. Invite students to bring these items to the next class section and share their hope collection with each other in small groups. Midway through the term, ask students to reflect on how their mantras, objects, or images are changing.",
        quote: "",
        interactionType: "hope_visualization",
        aiPrompt: "You are a hope and inspiration coach. Based on the student's dreams and goals, create: 1) A personal mantra they can repeat daily, 2) A symbolic object that represents their hopes, 3) A detailed description of an image that captures their vision. Make these meaningful and personally resonant.",
        inputFields: [
            { label: "What are your hopes and dreams for the next few years?", placeholder: "Share your goals, aspirations, and what you want to achieve...", type: "textarea" },
            { label: "What do you hope to gain from your current studies?", placeholder: "Skills, knowledge, experiences, connections...", type: "textarea" }
        ],
        buttonText: "✨ Create Your Hope Collection"
    },
    {
        number: 22,
        concept: "Humor",
        activity: "Ask AI to generate funny analogies or memes for a tough concept or topic in your course. Invite students to critique them, build on them, and share their own memes with each other.",
        quote: "",
        interactionType: "content_generation",
        aiPrompt: "You are a creative AI helping students learn through humor. Generate 3-4 funny analogies, jokes, or meme concepts for the topic they provide. Make sure the humor actually helps explain or remember the concept - not just random jokes. Be clever and educational at the same time. After the humor, briefly explain why each one works as a learning tool.",
        inputFields: [
            { label: "What tough concept or topic do you want funny analogies for?", placeholder: "e.g., Photosynthesis, Supply and Demand, Shakespeare's themes...", type: "text" },
            { label: "What specific aspect is confusing or hard to remember?", placeholder: "e.g., The chemical equation, how price affects demand...", type: "text" }
        ],
        buttonText: "😂 Generate Funny Learning Tools"
    },
    {
        number: 23,
        concept: "Imagination",
        activity: "Ask students to imagine their field of study 10 or 50 years from now—what will it discover, change, or create? How will AI impact their field? Then, prompt AI to generate its own vision. Ask students to compare: What do these futures reflect about their values, hopes, and concerns? Open a conversation about who shapes the future—and who should.",
        quote: "Imagination is our human power to transcend the immediate boundaries of senses and knowledge, to navigate across time and spaces, and to transcend present conditions (Popenici 2023).",
        interactionType: "future_visioning",
        aiPrompt: "You are a futurist helping students imagine their field's future. First, create a detailed vision of how their field might evolve in 10-50 years, including new discoveries, technologies, and societal impacts. Then help them compare this with their own vision to explore what values and assumptions shape different future predictions.",
        inputFields: [
            { label: "What field or major are you studying?", placeholder: "e.g., Environmental Science, Computer Science, Education, Art...", type: "text" },
            { label: "What's your vision for this field in 10-50 years?", placeholder: "What discoveries, changes, or creations do you imagine?", type: "textarea" }
        ],
        buttonText: "🔭 Explore Future Possibilities"
    },
    {
        number: 24,
        concept: "Inclusion",
        activity: "Find the hidden barriers in your course. Ask AI... \"What background knowledge does this assignment assume?\" \"Give me 3 alternative ways to express this idea using culturally diverse examples. Rewrite this assignment to be more inclusive of multilingual and first-gen students, folks with disabilities and financial stress, caregiving responsibilities, or non-traditional educational paths. Help me make my course design and facilitation more inclusive for all.\"",
        quote: "",
        interactionType: "inclusion_analysis",
        aiPrompt: "You are an inclusion expert helping identify and remove barriers in learning. Analyze the assignment or content provided and: 1) Identify assumptions about background knowledge, 2) Point out potential barriers for diverse learners, 3) Suggest inclusive alternatives and modifications, 4) Recommend culturally diverse examples.",
        inputFields: [
            { label: "Share an assignment or course content to analyze", placeholder: "Copy/paste assignment text, syllabus section, or course material...", type: "textarea" },
            { label: "What specific inclusion concerns do you have?", placeholder: "e.g., Language barriers, financial constraints, different cultural backgrounds...", type: "text" }
        ],
        buttonText: "🌍 Make Learning More Inclusive"
    },
    {
        number: 25,
        concept: "Inquiry",
        activity: "Ask students to use AI to explore a course topic—but their task is not to find answers; instead, their task is to refine and improve their questions. Ask them to draft a basic question, input it into AI, analyze the response, and then iterate: What follow-up question would deepen this? What assumptions are being made? What do I still not know? Ask students to write a short reflection that details how their questions evolved, and how these questions deepened their learning.",
        quote: "Asking the right question will continue to be the most valuable human skill (Watson & Bowen 2024).",
        interactionType: "question_refinement",
        aiPrompt: "You are an expert at helping students ask better questions. Your role is NOT to answer their question, but to help them refine it into something deeper and more meaningful. Analyze their initial question and: 1) Point out assumptions it makes, 2) Suggest 3-4 follow-up questions that would deepen their inquiry, 3) Identify what they still don't know, 4) Help them see new angles or perspectives they haven't considered. Focus on making them a better question-asker, not giving them answers.",
        inputFields: [
            { label: "What's your initial question about the topic?", placeholder: "e.g., Why is climate change happening?", type: "text" },
            { label: "What course topic or subject area is this related to?", placeholder: "e.g., Environmental Science, Economics, History...", type: "text" }
        ],
        buttonText: "🔍 Refine My Question"
    },
    {
        number: 26,
        concept: "Intention",
        activity: "Ask students to read the syllabus and review your course learning outcomes. Then, ask them to set two personal learning goals: one skill-based goal, one curiosity- or interest-driven goal. Prompt them to share the syllabus with AI and ask: \"What specific strategies could help me meet my goals based on the course content?\" Encourage them to revisit their goals mid-semester to adjust, evaluate, and reflect on their progress.",
        quote: "",
        interactionType: "goal_setting",
        aiPrompt: "You are a learning strategy coach. Based on the student's course and personal goals, create a specific, actionable plan to help them succeed. Include study strategies, engagement techniques, and ways to stay motivated. Make it personalized to their interests and learning style.",
        inputFields: [
            { label: "What course are you taking?", placeholder: "e.g., Biology 101, Marketing Strategy, Creative Writing...", type: "text" },
            { label: "What skill-based goal do you want to achieve?", placeholder: "e.g., Master statistical analysis, improve public speaking, learn programming...", type: "text" },
            { label: "What curiosity-driven goal excites you?", placeholder: "e.g., Understand how vaccines work, explore consumer psychology, discover new poets...", type: "text" }
        ],
        buttonText: "🎯 Create Your Learning Strategy"
    },
    {
        number: 27,
        concept: "Insight",
        activity: "Ask students to create something—a draft, sketch, design, or idea—without AI. Then, invite them to share that something with AI and Prompt: \"Write me a prompt that would generate This exactly.\" Students then use that prompt to regenerate the piece. Ask students to Compare: What was lost in translation? What decisions or experiences shaped my version that AI couldn't recover? How does my unique insight show up in the original? What did I learn about myself through this comparison, and how might those insights shape my future work?",
        quote: "",
        interactionType: "insight_discovery",
        aiPrompt: "You are helping a student discover their unique creative insights. After they share their original work, write a prompt that would generate something similar. Then help them analyze the differences: What personal experiences, perspectives, or decisions shaped their original that can't be replicated? What makes their insight uniquely human?",
        inputFields: [
            { label: "Share something you created (text, idea, description of visual work)", placeholder: "Paste your original writing, describe your artwork, share your idea...", type: "textarea" }
        ],
        buttonText: "💡 Discover Your Unique Insights"
    },
    {
        number: 28,
        concept: "Justice",
        activity: "Choose any core concept from your course—a coding language, literary theme, or law of motion. Ask AI to generate an open-ended scenario where that concept is applied in a real-world setting with uneven or unjust outcomes. Ask students to analyze the scenario in class, discuss with peers, and design a response, intervention, or alternative approach that prioritizes justice for all.",
        quote: "",
        interactionType: "justice_scenario",
        aiPrompt: "You are a social justice educator. Based on the concept provided, create a realistic scenario where this concept is applied in ways that create unfair outcomes for different groups. Then help the student analyze the injustice and brainstorm interventions that would create more equitable results.",
        inputFields: [
            { label: "What course concept do you want to explore?", placeholder: "e.g., Algorithms, supply and demand, DNA testing, urban planning...", type: "text" },
            { label: "What field or context should the scenario be in?", placeholder: "e.g., Healthcare, education, criminal justice, technology...", type: "text" }
        ],
        buttonText: "⚖️ Analyze Justice Issues"
    },
    {
        number: 29,
        concept: "Kinship",
        activity: "Ask students to choose a course topic (or use one from their own project) and work with AI to map out all that it connects to—technologies, communities, environments, and non-human forms of life it impacts or depends on. How might those relationships unfold and ripple over time? What responsibilities do we have as human beings? Invite students or group members to contribute to a shared document that reflects how this knowledge should be engaged with, now and in the future.",
        quote: "Indigenous epistemologies [underpin] ways of knowing and speaking that acknowledge kinship networks that extend to animal and plant, wind and rock, mountain and ocean... While [AI] developers might assume they are building a product or tool, they are actually building a relationship to which they should attend (Edward Lewis 2020).",
        interactionType: "interconnection_mapping",
        aiPrompt: "You are a systems thinker who helps students see interconnections. Based on their topic, map out all the relationships it has with: other technologies, human communities, environmental systems, and non-human life. Help them understand their responsibilities as humans in these networks and how their actions ripple outward.",
        inputFields: [
            { label: "What topic or concept do you want to explore?", placeholder: "e.g., Smartphone technology, fast fashion, renewable energy, social media...", type: "text" },
            { label: "What connections are you already aware of?", placeholder: "What relationships or impacts do you already know about?", type: "textarea" }
        ],
        buttonText: "🌎 Map Interconnections"
    },
    {
        number: 30,
        concept: "Love",
        activity: "Before the term begins, Reconnect with what you love about teaching your subject. Maybe it's a student letter you received; maybe it's a sense of wonder about your discipline. In a culture that privileges evaluation over exploration, turns care into \"content,\" passion into \"deliverables,\" it's easy to lose touch with what you love about this work. Ask AI: \"What are three surprising, beautiful, or lesser-known things about my course topic that might spark me or remind me why I chose to teach it?\" Try to re-ignite that connection—your students will surely feel it.",
        quote: "",
        interactionType: "rediscover_passion",
        aiPrompt: "You are a passion rekindler helping students rediscover what they love about their field of study. Share 3-4 surprising, beautiful, or lesser-known aspects of their subject that reveal its wonder and humanity. Help them remember why this knowledge matters beyond grades and requirements.",
        inputFields: [
            { label: "What subject or field are you studying?", placeholder: "e.g., Mathematics, Literature, Computer Science, Biology...", type: "text" },
            { label: "What originally drew you to this subject?", placeholder: "What excited you when you first encountered it?", type: "textarea" }
        ],
        buttonText: "❤️ Rediscover Your Love of Learning"
    },
    {
        number: 31,
        concept: "Motivation",
        activity: "Ask students to provide AI with 2-3 paragraphs about the things in life that really spark their curiosity and give them excitement, along with potential careers or things that they would like to pursue. Then, invite students to upload your syllabus or an upcoming assignment prompt and ask AI: \"Why should I care about this assignment? What skills or knowledge might I gain? How do these align with what I hope to be or do?\"",
        quote: "",
        interactionType: "personal_relevance",
        aiPrompt: "You are a motivation coach helping students connect their assignments to their personal interests and future goals. Based on their passions and the assignment, show them why this work matters for their dreams and how the skills they'll gain are valuable for their future.",
        inputFields: [
            { label: "What really sparks your curiosity and excitement in life?", placeholder: "Share your interests, hobbies, things you love thinking about...", type: "textarea" },
            { label: "What careers or future paths interest you?", placeholder: "Jobs, roles, or ways you might want to contribute to the world...", type: "text" },
            { label: "What assignment are you working on?", placeholder: "Copy/paste the assignment description...", type: "textarea" }
        ],
        buttonText: "🚀 Find Your Why"
    },
    {
        number: 32,
        concept: "Mystery",
        activity: "As pre-work, invite students to enter a tailored version of the following prompt into an AI tool: \"Create an engaging short mystery or puzzle involving [insert topic or concept], where something unusual happens and I have to figure out what caused it. Include clues I can follow, but don't give away the answer right away.\" During class, ask students to share their scenarios, investigations, and findings with each other in a small group discussion.",
        quote: "",
        interactionType: "mystery_creation",
        aiPrompt: "You are a mystery writer and educator. Create an engaging, short mystery or puzzle involving the concept provided. Present an unusual situation with clear clues to follow, but don't reveal the solution immediately. Make it intriguing and educational.",
        inputFields: [
            { label: "What concept or topic should the mystery involve?", placeholder: "e.g., Chemical reactions, historical events, mathematical principles...", type: "text" },
            { label: "What level of difficulty do you want?", placeholder: "e.g., Beginner, intermediate, challenging...", type: "text" }
        ],
        buttonText: "🕵️ Create Learning Mystery"
    },
    {
        number: 33,
        concept: "Perseverance",
        activity: "Choose one assessment and ask AI: \"How might I better reward student perseverance—through revision or re-attmempts—while keeping my grading load sustainable?\" Could one stage be ungraded? Could students earn full credit for revision? Let your policies reflect the belief that learning happens when we try again.",
        quote: "",
        interactionType: "perseverance_planning",
        aiPrompt: "You are a resilience coach helping students develop a perseverance strategy for challenging work. Based on what they're struggling with, create a step-by-step plan for pushing through difficulties, including specific techniques for staying motivated and learning from setbacks.",
        inputFields: [
            { label: "What challenging task or subject are you working on?", placeholder: "e.g., Calculus problem set, research paper, coding project...", type: "text" },
            { label: "Where are you getting stuck or feeling discouraged?", placeholder: "What specific obstacles are you facing?", type: "textarea" },
            { label: "What has helped you persevere through challenges before?", placeholder: "Past strategies, mindsets, or support systems that worked...", type: "textarea" }
        ],
        buttonText: "💪 Build Perseverance Strategy"
    },
    {
        number: 34,
        concept: "Perspective",
        activity: "Ask students to share their working thesis, hypothesis, or project pitch with AI and ask it to point out stakeholders, variables, counter-arguments, or other things they've overlooked. Students can then revise their work to address these gaps, reflecting on how these perspectives have impacted their own.",
        quote: "",
        interactionType: "perspective_expansion",
        aiPrompt: "You are a perspective analyst helping students see their work from multiple angles. Based on their thesis or idea, identify overlooked stakeholders, counter-arguments, alternative viewpoints, and blind spots. Help them understand how different perspectives would view their work.",
        inputFields: [
            { label: "Share your working thesis, hypothesis, or main argument", placeholder: "What's your main idea or position?", type: "textarea" },
            { label: "What context or field is this for?", placeholder: "e.g., History paper, business proposal, scientific research...", type: "text" }
        ],
        buttonText: "🔍 Expand Your Perspective"
    },
    {
        number: 35,
        concept: "Play",
        activity: "Host an AI-supported \"sandbox\" session where students work in teams to creatively build something using course concepts. This could be anything... a speculative design, prototype, business plan, simulation, game, app, or even a comic or theme park ride. Encourage openness, connections, and creative risk-taking! Save time for students to share what they made, explain how they used course concepts, and reflect... Why did you choose to make this? Who is your audience? What did you learn through open play?",
        quote: "",
        interactionType: "playful_creation",
        aiPrompt: "You are a play-based learning facilitator. Based on the course concept provided, brainstorm 4-5 playful, creative ways to explore it - like games, simulations, art projects, or imaginative scenarios. Focus on fun, hands-on approaches that make learning feel like play.",
        inputFields: [
            { label: "What course concept do you want to play with?", placeholder: "e.g., Ecosystems, market forces, character development, chemical bonds...", type: "text" },
            { label: "What kind of creative projects appeal to you?", placeholder: "e.g., Games, art, stories, simulations, inventions...", type: "text" }
        ],
        buttonText: "🎲 Design Playful Learning"
    },
    {
        number: 36,
        concept: "Process",
        activity: "When assigning projects or portfolios, ask students to document their learning process through timelines, maps, infographics, or written reflections. These can include annotated AI chats, challenges faced, errors made, major breakthroughs, and takeaways. Center process over output. Cultivate your students' metacognition and guide them to understand that learning is a messy process.",
        quote: "",
        interactionType: "process_reflection",
        aiPrompt: "You are a metacognition coach helping students reflect on their learning process. Guide them to document their journey, identify patterns in how they learn, recognize growth moments, and understand that the messy process of learning is often more valuable than perfect outcomes.",
        inputFields: [
            { label: "What project or learning experience do you want to reflect on?", placeholder: "e.g., Research paper, coding project, art piece, problem set...", type: "text" },
            { label: "Describe your process - the steps, struggles, breakthroughs", placeholder: "What did your learning journey actually look like?", type: "textarea" },
            { label: "What surprised you about how you learned?", placeholder: "Any unexpected challenges, discoveries, or insights?", type: "textarea" }
        ],
        buttonText: "🛤️ Map Your Learning Process"
    },
    {
        number: 37,
        concept: "Reflection",
        activity: "Collect anonymized student feedback and ask AI: \"What themes emerge from this feedback about my teaching or student experiences?\" Pair these insights with a reflection on your own experience teaching the course. What are you most proud of? What might you do differently next term? What can you change tomorrow?",
        quote: "Teaching holds a mirror to the soul. If I am willing to look in that mirror, and not run from what I see, I have a chance to gain self-knowledge–and knowing myself is as crucial to good teaching as knowing my students and my subject (Palmer 2007).",
        interactionType: "deep_reflection",
        aiPrompt: "You are a reflective learning coach helping students gain deeper self-awareness about their learning experiences. Guide them through thoughtful reflection on what they've learned, how they've grown, and what they want to change or improve going forward.",
        inputFields: [
            { label: "What learning experience do you want to reflect on?", placeholder: "e.g., This semester, a challenging project, a new skill you learned...", type: "text" },
            { label: "What are you most proud of in your learning journey?", placeholder: "Achievements, breakthroughs, growth you've experienced...", type: "textarea" },
            { label: "What would you do differently or want to improve?", placeholder: "Areas for growth, habits to change, new approaches to try...", type: "textarea" }
        ],
        buttonText: "🪞 Deepen Your Self-Reflection"
    },
    {
        number: 38,
        concept: "Relationships",
        activity: "Share any course element with AI and ask: \"How might I adjust this to strengthen student relationships with each other, with me, or with the broader community?\" If you decide to implement a suggested change, tell students why you made the change: to cultivate the kinds of connections that enrich our learning and our lives.",
        quote: "Human connection is the basis upon which learning takes place (Bass, quoted in Felten & Lambert 2020).",
        interactionType: "relationship_building",
        aiPrompt: "You are a relationship and community building expert. Based on the learning situation provided, suggest specific ways to strengthen connections between students, with instructors, and with the broader community. Focus on meaningful interactions that enhance learning through relationships.",
        inputFields: [
            { label: "What learning situation do you want to improve?", placeholder: "e.g., Online class, group project, study group, large lecture...", type: "text" },
            { label: "What relationship challenges are you experiencing?", placeholder: "e.g., Students don't know each other, feel disconnected, shy to participate...", type: "textarea" }
        ],
        buttonText: "🤝 Build Learning Relationships"
    },
    {
        number: 39,
        concept: "Rest",
        activity: "carve out a 15-minute break • take a nap • drink some water • remind your students to do the same • we are more than what we produce. Don't Use AI Today. Let the Earth rest.",
        quote: ""
    },
    {
        number: 40,
        concept: "Risk-Taking",
        activity: "Midway through a semester project, ask students to share their current work with AI and ask: \"What's a more daring, bold, unconventional, or risky way I could approach this work moving forward—something that could lead me in a new, unexplored direction?\" Invite students to submit a reflection about how AI's output helped to shift or solidify their original approach moving forward.",
        quote: "",
        interactionType: "bold_exploration",
        aiPrompt: "You are a creative risk-taking coach who pushes students beyond their comfort zones. Based on their current work, suggest 3-4 daring, unconventional approaches that could lead them in exciting new directions. Encourage bold thinking while helping them manage the risks.",
        inputFields: [
            { label: "What project are you working on?", placeholder: "Describe your current project, assignment, or creative work...", type: "textarea" },
            { label: "What approach are you taking so far?", placeholder: "How are you currently approaching this work?", type: "text" },
            { label: "What would taking a risk mean for you in this context?", placeholder: "What feels scary but potentially exciting?", type: "textarea" }
        ],
        buttonText: "🎆 Explore Bold New Directions"
    },
    {
        number: 41,
        concept: "Self-Regulation",
        activity: "Ask students to create a personalized work-plan and task checklist for an assignment or project, taking into account their other commitments and priorities. Then, invite students ask AI for its own task breakdown of the project. What did students forget? What did AI miss? Ask students to revise the work plan and submit their revised checklist.",
        quote: ""
    },
    {
        number: 42,
        concept: "Storytelling",
        activity: "When reviewing a complex idea, ask student groups to prompt AI: \"Turn this concept into an interactive story that shows it unfolding in the real world. Include challenges, consequences, and key decisions. Provide moments where my input will impact what happens next in order to deepen my learning.\" Invite groups to experience, extend, or re-write these stories together, drawing on their own interests and experiences.",
        quote: "Storytelling is culturally universal—it is likely the oldest form of teaching, allowing generations of humans to share cultural knowledge to be remembered over time (Landrum, Brakke, & McCarthy 2019).",
        interactionType: "story_learning",
        aiPrompt: "You are a master storyteller who makes complex concepts memorable through narrative. Based on the concept provided, create an engaging story that shows it unfolding in the real world, with characters facing challenges and making decisions that illustrate the concept's importance.",
        inputFields: [
            { label: "What concept do you want to turn into a story?", placeholder: "e.g., Supply and demand, photosynthesis, social justice, algorithms...", type: "text" },
            { label: "What setting or context would make this interesting?", placeholder: "e.g., A small town, futuristic city, historical period, workplace...", type: "text" }
        ],
        buttonText: "📚 Create Learning Story"
    },
    {
        number: 43,
        concept: "Transparency",
        activity: "If you want your students to be transparent about their AI use, you need to be transparent too. Model the norm of talking about your own AI use, explaining why you used it, and citing AI's contributions throughout the course.",
        quote: ""
    },
    {
        number: 44,
        concept: "Trust",
        activity: "During the first week of class, co-create AI-Use Agreements with your students. Here are a few you might try. (Note that you as an instructor are also agreeing to these norms). I agree to be intentional about using AI to support—not bypass—my learning. I agree to critically engage AI to stay curious about this course. I agree to cite the tools, people, and ideas that help me learn. I agree to consider AI's social, cultural, and environmental impacts. I agree to document my thinking process, not just answers. I agree to ask when I'm not sure about AI use. I agree to reflect on my own contributions, strengths, and skills when working with AI. Throughout the term, ask students to reflect on how they are upholding these agreements and revise if necessary.",
        quote: "",
        interactionType: "trust_agreement",
        aiPrompt: "You are a learning ethics facilitator helping students create personal AI-use agreements. Based on their learning context and values, help them develop specific, meaningful commitments about how they'll use AI tools responsibly to support (not bypass) their learning.",
        inputFields: [
            { label: "What course or learning context is this for?", placeholder: "e.g., Writing class, computer science, research project...", type: "text" },
            { label: "What are your personal learning values and goals?", placeholder: "What's important to you in how you learn and grow?", type: "textarea" },
            { label: "What AI usage concerns do you have?", placeholder: "What do you want to make sure you don't lose by using AI?", type: "textarea" }
        ],
        buttonText: "🤝 Create Your AI Learning Agreement"
    },
    {
        number: 45,
        concept: "Variety",
        activity: "Paste one of your course learning outcomes into AI and ask for three engaging but entirely different in-class activities that could help students achieve the outcome in question. Pick your favorite, or, better yet, ask students which one they'd like to try.",
        quote: ""
    },
    {
        number: 46,
        concept: "Voice",
        activity: "Center student voices, literally. Invite students to submit weekly short voice memos or screencasts instead of written responses. Students might respond to a reading in their own words, explain their process of solving a problem, or critique an AI-generated output they received. Not only does this make student thinking more visible; it also gives students practice talking about course material, helping to prepare them for in-class discussions.",
        quote: ""
    },
    {
        number: 47,
        concept: "Wonder",
        activity: "Push your course concepts outside of the classroom. Ask students to prompt AI to randomly select a place on earth—a museum, city, landmark, national park, glacier, or ancient city. Their task: find a meaningful or surprising connection between that place and a core concept from your course. Students can share their findings as discussion posts, a shared course map, or a 5-minute presentation each week. Let randomness spark their discovery—you'll learn a lot along the way, too.",
        quote: "",
        interactionType: "wonder_connections",
        aiPrompt: "You are a wonder-sparking educator who helps students discover amazing connections. First, randomly select an interesting place on Earth for them. Then help them find surprising, meaningful connections between that place and their learning topic. Make the connections unexpected and awe-inspiring.",
        inputFields: [
            { label: "What course concept or topic are you studying?", placeholder: "e.g., Chemical reactions, historical patterns, literary themes, physics principles...", type: "text" }
        ],
        buttonText: "✨ Discover Wonder Connections"
    },
    {
        number: 48,
        concept: "Connections",
        activity: "Help students see the web of relationships between ideas, disciplines, and experiences. Encourage them to map connections between course concepts and their personal lives, other subjects they're studying, or current events. Use AI to explore unexpected links and broaden their understanding of how knowledge interconnects.",
        quote: "",
        interactionType: "knowledge_mapping",
        aiPrompt: "You are a connection specialist who helps students discover unexpected relationships between ideas. Based on the concept they provide, help them map out surprising connections to other disciplines, personal experiences, current events, and broader life themes. Make the web of connections rich and meaningful.",
        inputFields: [
            { label: "What concept are you studying?", placeholder: "e.g., Photosynthesis, Renaissance art, supply and demand, genetic inheritance...", type: "text" },
            { label: "What other subjects or interests do you have?", placeholder: "e.g., Music, sports, cooking, social media, family history...", type: "text" },
            { label: "What's happening in your life or the world that you're curious about?", placeholder: "e.g., Climate change, social movements, technology trends, personal challenges...", type: "textarea" }
        ],
        buttonText: "🕸️ Map Knowledge Connections"
    },
    {
        number: 49,
        concept: "Joy",
        activity: "Rediscover the joy in learning by connecting with what genuinely excites and energizes you. Use AI to explore the delightful, surprising, or beautiful aspects of any subject. Celebrate moments of discovery, breakthrough understanding, and the pure pleasure of learning something new.",
        quote: "",
        interactionType: "joy_discovery",
        aiPrompt: "You are a joy catalyst who helps students rediscover the pure delight of learning. Based on their topic, share what's genuinely exciting, beautiful, or surprisingly wonderful about it. Help them see the subject through fresh eyes and find reasons to smile while learning. Focus on wonder, discovery, and the intrinsic rewards of understanding.",
        inputFields: [
            { label: "What subject or topic do you want to find more joy in?", placeholder: "e.g., Mathematics, history, chemistry, literature, coding...", type: "text" },
            { label: "What originally drew you to learning or what subjects have you loved?", placeholder: "What has sparked your curiosity or brought you joy in the past?", type: "textarea" },
            { label: "What would make this subject feel more joyful for you?", placeholder: "e.g., Hands-on activities, real-world applications, creative projects, social connections...", type: "text" }
        ],
        buttonText: "😊 Rediscover Learning Joy"
    },
    {
        number: 50,
        concept: "Interpretation",
        activity: "Develop skills in analyzing, interpreting, and making meaning from complex information. Use AI to practice examining data, texts, images, or situations from multiple perspectives. Learn to support interpretations with evidence while remaining open to alternative viewpoints and deeper understanding.",
        quote: "",
        interactionType: "meaning_making",
        aiPrompt: "You are an interpretation coach who helps students develop critical analysis skills. Guide them through examining their material from multiple angles, questioning assumptions, looking for patterns, and supporting interpretations with evidence. Help them understand that good interpretation involves both careful observation and creative insight.",
        inputFields: [
            { label: "What are you trying to interpret or analyze?", placeholder: "e.g., A poem, dataset, historical event, artwork, scientific results, social phenomenon...", type: "text" },
            { label: "Share the material you're analyzing", placeholder: "Paste text, describe the data, share the image description, or explain the situation...", type: "textarea" },
            { label: "What questions or aspects are you most curious about?", placeholder: "e.g., What patterns do you see? What's the deeper meaning? What might others think?", type: "textarea" }
        ],
        buttonText: "🔍 Deepen Your Interpretation"
    }
];