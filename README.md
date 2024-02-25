# StudyBudy: The AI-Powered ~~Study~~ Life Planner
Learn smarter, not harder!
Input anything you want to learn and get a custom study plan in an interactive beautiful calendar.
Your AI study planner in a snap! 

## Getting Started
- Install the dependencies:
```bash
npm install
```
- Create .env file in the root directory and add OPENAI API key

-First, run backend server using :

```bash
node server.js
```

- Then run frontend using the following command:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



### Inspiration
Being a student often means juggling between studying and life's many demands. The idea for StudyBudy stemmed from my personal experiences with the overwhelming nature of managing academic and personal life. We wanted to create a tool that not only simplifies study planning but also adapts to the unique needs of each student.

### What it does
StudyBudy is an AI assistant that helps students with study planning. Users input details like deadlines, syllabus, and course structure, and the app generates a detailed study plan. This plan is displayed on an interactive calendar, making it easy to visualize and follow.

### How we built it
StudyBudy was built using Next.js, React, MongoDB, Mongoose, and an Express server. This tech stack was chosen for its robustness and flexibility. The front end was developed with React for its efficiency in updating and rendering components, while Next.js was used to enhance React's capabilities. MongoDB and Mongoose formed our database solution, with Express handling server-side logistics. We also used openai api to resolve complex tasks breakdown into achievable sub-tasks and display them in an interactive beautiful calendar using FullCalendar React library.

### Challenges we ran into
One major challenge was adopting Next.js for the first time. Having previous experience with React, we faced hurdles when many familiar React libraries were not compatible with Next.js. This required us to explore alternative solutions and adapt our development approach.

### Accomplishments that we're proud of
I am particularly proud of building a full-stack application in a single night, which I can personally use as a student. The ability to transform an idea into a functioning product in such a short time frame was immensely satisfying.

### What we learned
This project was a valuable learning experience, both in terms of technical and soft skills. Technically, we gained deeper insights into Next.js and how it differs from standard React development. On the soft skills front, I improved my problem-solving abilities and adaptability, especially when dealing with incompatible libraries and new technologies.

### What's next for StudyBudy
The next step is to deploy app on the cloud and make it available to other students for feedback. Also, plan is to further suggesting microtasks for a single day into specific timelines for a sub-task. Additionally, we plan to expand its features to make the app more interactive and enhance its ability to resolve time conflicts between multiple tasks more effectively.



