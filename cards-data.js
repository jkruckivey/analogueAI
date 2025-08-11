const cardsData = [
    {
        number: 1,
        concept: "Accessibility",
        activity: "Ask AI to explain five ways it can be used by students to create more accessible pathways to learning in your course. Communicate these uses to students on your syllabus and in class so they are aware of these potential benefits.",
        quote: ""
    },
    {
        number: 2,
        concept: "Agency",
        activity: "Share a folder of readings, concepts, or problems. Ask students to sign up for one and \"teach the class\" their chosen concept. Or better yet, leave your final week of the course syllabus empty and ask students to develop a presentation or learning module based on something they think the course is missing. In either case, encourage them to use AI as a thought partner, helping to explore directions and brainstorm ideas.",
        quote: ""
    },
    {
        number: 3,
        concept: "Authenticity",
        activity: "Share your learning outcomes with AI and ask for three distinct authentic assessment ideas that align with those outcomes. Specify that the assessments should emphasize real-world application and mirror the kinds of tasks, scenarios, workflows, events, and deliverables that students may encounter in their professional and personal futures.",
        quote: ""
    },
    {
        number: 4,
        concept: "Belonging",
        activity: "Ask students to write you a short letter titled: \"What I want you to know about me as a learner.\" Then, have them prompt AI to write a generic version of the same letter and compare the two: \"What's missing from AI's Letter? What is uniquely you?\" Discuss insights as a class, celebrating folks' unique strengths and experiences. Describe together what belonging in your classroom can look like. Bonus: Write students a companion letter titled: \"What I Want You To Know About Me As A Teacher.\"",
        quote: ""
    },
    {
        number: 5,
        concept: "Bias",
        activity: "AI Auditors: Ask students to read about AI's encoded biases. Invite them to experiment with tools to expose errors, find inconsistencies, and uncover assumptions, especially as they relate to their discipline. What kinds of vernacular are used in specific contexts? What perspectives are missing from outputs? What do image generators assume with their depictions? Invite students to share their audits and findings with their peers.",
        quote: "If we do not acknowledge and teach the hidden curriculum of AI, and the ways schools offer fertile ground for its uncritical and at-scale implication, we risk perpetuating the encoded bias and ideologies of oppression which are baked into its design (Warr and Heath 2025)."
    },
    {
        number: 6,
        concept: "Care",
        activity: "Share a few course materials with AI and ask for 5 innovative ways you can build connection and care with and among students in your course.",
        quote: "To teach in a manner that respects and cares for the souls of our students is essential if we are to provide the necessary conditions where learning can most deeply and intimately begin (hooks 1994)."
    },
    {
        number: 7,
        concept: "Choice",
        activity: "Upload your syllabus or final project prompt and ask AI to help you brainstorm three easy ways to incorporate student choice into your learning experiences. (or) Give students a concept or objective, and ask them to prompt AI for four different ways they could demonstrate their learning—with ideas featuring various formats and audiences. Ask them to choose one and pursue it for their project.",
        quote: ""
    },
    {
        number: 8,
        concept: "Collaboration",
        activity: "For group projects, ask each student to contribute their initial ideas or workflow preferences individually. Then, ask AI to organize and synthesize the full group's input into a working plan. Invite the team to review and discuss. What ideas feel overrepresented or overlooked? What doesn't quite work? What should we keep, question, or revise? Help students practice co-creation with care, starting from the idea that all group members have valuable ideas.",
        quote: ""
    },
    {
        number: 9,
        concept: "Communication",
        activity: "Look over one of your assignments. Does it communicate the skills and knowledge students will gain by completing the assignment? how students will be evaluated—and what \"success\" looks like? how AI use might be encouraged or discouraged?",
        quote: ""
    },
    {
        number: 10,
        concept: "Community",
        activity: "Ask AI to generate song recommendations for a class-themed playlist, and invite students to add to it. Play it when welcoming students into class each day. Ask AI for funny course-themed food items, and bring in themed snacks to celebrate student presentations. Leave a week or unit on your syllabus empty so that students can help co-create it with you. Ask them to use AI to find concepts, texts, or tasks they'd like to explore on that week. Decide and create together. See the \"Trust\" card in this deck.",
        quote: "...the work of teachers [is] a kind of artful community organizing, supporting a group of people in identifying their needs and imagining ways of being together that would allow those needs to be met as consistently as possible (Keenan 2021)."
    },
    {
        number: 11,
        concept: "Creativity",
        activity: "Give students more creative room with final projects. Invite them to use AI as a thought partner to generate new ideas, build out their work in diverse formats, and pursue unexpected directions. Celebrate this work by creating public venues where students can meaningfully share their creative work with someone other than just you.",
        quote: ""
    },
    {
        number: 12,
        concept: "Critical-Thinking",
        activity: "Pose a thought-provoking, open-ended question from your lesson. Give students a few minutes to write down their initial thoughts. Then, have them ask the same question to AI and compare their responses: What's similar? What's missing? Invite students to pair up and discuss their human and AI responses. Debrief as a class to highlight student insights and gaps in AI's logic, reframing AI not as an answer machine but as a collaborator with ideas, insights, errors, and limitations.",
        quote: ""
    },
    {
        number: 13,
        concept: "Critique",
        activity: "Ask AI to generate a passable but uninspired response to one of your assignments. During class, share this AI-generated work with students, along with your rubric for the assignment. Ask students to evaluate the AI's work—first individually, then with a partner to calibrate critiques. End with a class debrief to share insights and develop a shared understanding of assignment criteria.",
        quote: ""
    },
    {
        number: 14,
        concept: "Curiosity",
        activity: "What's Next? How? Why? What could be? Create spaces where students want to know more. Choose a topic you're about to teach and ask AI: \"What are five wild, surprising, or little-known questions that will spark curiosity around this topic?\" Pick one and use it to open your next class session.",
        quote: ""
    },
    {
        number: 15,
        concept: "Dialogue",
        activity: "Brainstorm all of the ways students might engage AI as a dialogue partner. Students might ask AI for a Socratic dialogue to deepen their thinking on a complex topic. \"I'm stuck. Here's my attempt... Ask me open-ended, guiding questions about my work to deepen my understanding.\" Students might prepare for difficult conversations or anxiety-inducing interviews by practicing with AI: \"I have an upcoming career fair and am a bit nervous. Act as a recruiter for (company) at their booth. I'll approach you for a brief simulated chat. Afterwards, give me some feedback on my approach, as well as a few suggestions!\" How else might folks engage in dialogue with AI? How might such dialogues impact student confidence and empathy? What ethical issues arise when AI pretends? Ask students to share their reflections with one another.",
        quote: ""
    },
    {
        number: 16,
        concept: "Discernment",
        activity: "\"What am I trying to avoid by using AI right now?\" Ask yourself this question, and encourage students to do the same. Is it... confusion? perfectionism? boredom? Do I really need to use AI right now? Encourage students to jot down these observations. Even a 30-second pause can lead to more intentional engagement with AI.",
        quote: ""
    },
    {
        number: 17,
        concept: "Ethics",
        activity: "Ask student groups to critically engage with AI and course concepts to design complex, discipline-specific ethical dilemmas for their peers. After swapping dilemmas, groups can then practice ethical decision-making in their field by analyzing the dilemma, gathering missing information, considering various stakeholders, and making an action plan or recommendation along with a justification.",
        quote: ""
    },
    {
        number: 18,
        concept: "Experimentation",
        activity: "Use AI to simulate complex processes, systems, or experiments relevant to your course. These might be chemical reactions, cultural trends, structural stresses, market fluctuations, or ecological consequences. Ask students to experiment with these simulations using trial-and-error to analyze potential impacts, alternative outcomes, and AI assumptions. Bring students together to discuss their experiments. What insights does virtual experimentation offer? Where does the simulation fall short of reality, and why is that gap important?",
        quote: ""
    },
    {
        number: 19,
        concept: "Friction",
        activity: "Try to complete one of your own assignments using AI to completely bypass learning. What changes could you make to the assignment to introduce new complexities or moments of productive friction?",
        quote: "In the age of AI, we're going to have to decide when we want to use these tools, when they remove productive friction, and even when they may bring new and useful friction to the process (Rosenzweig 2024)."
    },
    {
        number: 20,
        concept: "Growth Mindset",
        activity: "After a quiz or assignment, ask students to choose one question or section they struggled with. Invite them to use AI to explore what they misunderstood and how to improve it. Students can then write a brief reflection and resubmit it along with the revised work for credit, normalizing the idea that mistakes, evaluation, and iteration are essential parts of learning.",
        quote: ""
    },
    {
        number: 21,
        concept: "Hope",
        activity: "Near the beginning of the term, ask students to reflect on their hopes, dreams, and goals for the next few years, including what they hope to gain from your course. Ask them to share their writing with AI and prompt it to generate a mantra, an object, and an image that represents those hopes. Invite students to bring these items to the next class section and share their hope collection with each other in small groups. Midway through the term, ask students to reflect on how their mantras, objects, or images are changing.",
        quote: ""
    },
    {
        number: 22,
        concept: "Humor",
        activity: "Ask AI to generate funny analogies or memes for a tough concept or topic in your course. Invite students to critique them, build on them, and share their own memes with each other.",
        quote: ""
    },
    {
        number: 23,
        concept: "Imagination",
        activity: "Ask students to imagine their field of study 10 or 50 years from now—what will it discover, change, or create? How will AI impact their field? Then, prompt AI to generate its own vision. Ask students to compare: What do these futures reflect about their values, hopes, and concerns? Open a conversation about who shapes the future—and who should.",
        quote: "Imagination is our human power to transcend the immediate boundaries of senses and knowledge, to navigate across time and spaces, and to transcend present conditions (Popenici 2023)."
    },
    {
        number: 24,
        concept: "Inclusion",
        activity: "Find the hidden barriers in your course. Ask AI... \"What background knowledge does this assignment assume?\" \"Give me 3 alternative ways to express this idea using culturally diverse examples. Rewrite this assignment to be more inclusive of multilingual and first-gen students, folks with disabilities and financial stress, caregiving responsibilities, or non-traditional educational paths. Help me make my course design and facilitation more inclusive for all.\"",
        quote: ""
    },
    {
        number: 25,
        concept: "Inquiry",
        activity: "Ask students to use AI to explore a course topic—but their task is not to find answers; instead, their task is to refine and improve their questions. Ask them to draft a basic question, input it into AI, analyze the response, and then iterate: What follow-up question would deepen this? What assumptions are being made? What do I still not know? Ask students to write a short reflection that details how their questions evolved, and how these questions deepened their learning.",
        quote: "Asking the right question will continue to be the most valuable human skill (Watson & Bowen 2024)."
    },
    {
        number: 26,
        concept: "Intention",
        activity: "Ask students to read the syllabus and review your course learning outcomes. Then, ask them to set two personal learning goals: one skill-based goal, one curiosity- or interest-driven goal. Prompt them to share the syllabus with AI and ask: \"What specific strategies could help me meet my goals based on the course content?\" Encourage them to revisit their goals mid-semester to adjust, evaluate, and reflect on their progress.",
        quote: ""
    },
    {
        number: 27,
        concept: "Insight",
        activity: "Ask students to create something—a draft, sketch, design, or idea—without AI. Then, invite them to share that something with AI and Prompt: \"Write me a prompt that would generate This exactly.\" Students then use that prompt to regenerate the piece. Ask students to Compare: What was lost in translation? What decisions or experiences shaped my version that AI couldn't recover? How does my unique insight show up in the original? What did I learn about myself through this comparison, and how might those insights shape my future work?",
        quote: ""
    },
    {
        number: 28,
        concept: "Justice",
        activity: "Choose any core concept from your course—a coding language, literary theme, or law of motion. Ask AI to generate an open-ended scenario where that concept is applied in a real-world setting with uneven or unjust outcomes. Ask students to analyze the scenario in class, discuss with peers, and design a response, intervention, or alternative approach that prioritizes justice for all.",
        quote: ""
    },
    {
        number: 29,
        concept: "Kinship",
        activity: "Ask students to choose a course topic (or use one from their own project) and work with AI to map out all that it connects to—technologies, communities, environments, and non-human forms of life it impacts or depends on. How might those relationships unfold and ripple over time? What responsibilities do we have as human beings? Invite students or group members to contribute to a shared document that reflects how this knowledge should be engaged with, now and in the future.",
        quote: "Indigenous epistemologies [underpin] ways of knowing and speaking that acknowledge kinship networks that extend to animal and plant, wind and rock, mountain and ocean... While [AI] developers might assume they are building a product or tool, they are actually building a relationship to which they should attend (Edward Lewis 2020)."
    },
    {
        number: 30,
        concept: "Love",
        activity: "Before the term begins, Reconnect with what you love about teaching your subject. Maybe it's a student letter you received; maybe it's a sense of wonder about your discipline. In a culture that privileges evaluation over exploration, turns care into \"content,\" passion into \"deliverables,\" it's easy to lose touch with what you love about this work. Ask AI: \"What are three surprising, beautiful, or lesser-known things about my course topic that might spark me or remind me why I chose to teach it?\" Try to re-ignite that connection—your students will surely feel it.",
        quote: ""
    },
    {
        number: 31,
        concept: "Motivation",
        activity: "Ask students to provide AI with 2-3 paragraphs about the things in life that really spark their curiosity and give them excitement, along with potential careers or things that they would like to pursue. Then, invite students to upload your syllabus or an upcoming assignment prompt and ask AI: \"Why should I care about this assignment? What skills or knowledge might I gain? How do these align with what I hope to be or do?\"",
        quote: ""
    },
    {
        number: 32,
        concept: "Mystery",
        activity: "As pre-work, invite students to enter a tailored version of the following prompt into an AI tool: \"Create an engaging short mystery or puzzle involving [insert topic or concept], where something unusual happens and I have to figure out what caused it. Include clues I can follow, but don't give away the answer right away.\" During class, ask students to share their scenarios, investigations, and findings with each other in a small group discussion.",
        quote: ""
    },
    {
        number: 33,
        concept: "Perseverance",
        activity: "Choose one assessment and ask AI: \"How might I better reward student perseverance—through revision or re-attmempts—while keeping my grading load sustainable?\" Could one stage be ungraded? Could students earn full credit for revision? Let your policies reflect the belief that learning happens when we try again.",
        quote: ""
    },
    {
        number: 34,
        concept: "Perspective",
        activity: "Ask students to share their working thesis, hypothesis, or project pitch with AI and ask it to point out stakeholders, variables, counter-arguments, or other things they've overlooked. Students can then revise their work to address these gaps, reflecting on how these perspectives have impacted their own.",
        quote: ""
    },
    {
        number: 35,
        concept: "Play",
        activity: "Host an AI-supported \"sandbox\" session where students work in teams to creatively build something using course concepts. This could be anything... a speculative design, prototype, business plan, simulation, game, app, or even a comic or theme park ride. Encourage openness, connections, and creative risk-taking! Save time for students to share what they made, explain how they used course concepts, and reflect... Why did you choose to make this? Who is your audience? What did you learn through open play?",
        quote: ""
    },
    {
        number: 36,
        concept: "Process",
        activity: "When assigning projects or portfolios, ask students to document their learning process through timelines, maps, infographics, or written reflections. These can include annotated AI chats, challenges faced, errors made, major breakthroughs, and takeaways. Center process over output. Cultivate your students' metacognition and guide them to understand that learning is a messy process.",
        quote: ""
    },
    {
        number: 37,
        concept: "Reflection",
        activity: "Collect anonymized student feedback and ask AI: \"What themes emerge from this feedback about my teaching or student experiences?\" Pair these insights with a reflection on your own experience teaching the course. What are you most proud of? What might you do differently next term? What can you change tomorrow?",
        quote: "Teaching holds a mirror to the soul. If I am willing to look in that mirror, and not run from what I see, I have a chance to gain self-knowledge–and knowing myself is as crucial to good teaching as knowing my students and my subject (Palmer 2007)."
    },
    {
        number: 38,
        concept: "Relationships",
        activity: "Share any course element with AI and ask: \"How might I adjust this to strengthen student relationships with each other, with me, or with the broader community?\" If you decide to implement a suggested change, tell students why you made the change: to cultivate the kinds of connections that enrich our learning and our lives.",
        quote: "Human connection is the basis upon which learning takes place (Bass, quoted in Felten & Lambert 2020)."
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
        quote: ""
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
        quote: "Storytelling is culturally universal—it is likely the oldest form of teaching, allowing generations of humans to share cultural knowledge to be remembered over time (Landrum, Brakke, & McCarthy 2019)."
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
        quote: ""
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
        quote: ""
    }
];