export const skills = {
  languages: [
    {
      id: 1,
      name: "Java",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      id: 2,
      name: "Python",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      id: 3,
      name: "HTML",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      id: 4,
      name: "CSS",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      id: 5,
      name: "JavaScript",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      id: 6,
      name: "TypeScript",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      id: 7,
      name: "Golang",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",
    },
    {
      id: 8,
      name: "GraphQL",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    },
  ],
  frameworks: [
    {
      id: 1,
      name: "Spring Boot",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      id: 2,
      name: "React",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      id: 3,
      name: "Nodejs",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 4,
      name: "Nestjs",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    },
    {
      id: 5,
      name: "Scikit Learn",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    },
    {
      id: 6,
      name: "PostgreSQL",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      id: 7,
      name: "MongoDB",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 8,
      name: "Redis",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    },
  ],
  devops: [
    {
      id: 1,
      name: "Git",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      id: 2,
      name: "Docker",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      id: 3,
      name: "Kubernetes",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    },
    {
      id: 4,
      name: "AWS",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      id: 5,
      name: "Terraform",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    },
    {
      id: 6,
      name: "Jenkins",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    },
    {
      id: 7,
      name: "RabbitMQ",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg",
    },
  ],
  testing: [
    {
      id: 1,
      name: "Jest",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      id: 2,
      name: "Vitest",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg",
    },
    {
      id: 3,
      name: "Cypress",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
    },
    {
      id: 4,
      name: "Postman",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      id: 5,
      name: "JUNIT",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-plain.svg",
    },
    {
      id: 6,
      name: "Prisma",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    },
    {
      id: 7,
      name: "Mongoose",
      imgUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    },
  ],
};

export const projects = [
  {
    imgSrc: "/quick-tube.png",
    title: "QuickTube",
    description:
      "An AI-powered YouTube knowledge extractor — ask any question about a video, and get real-time, context-aware answers. Powered by LangChain + Pinecone + DeepSeek LLM, this full-stack RAG app chunks transcripts, embeds them into a vector DB, and generates intelligent responses on demand. <br /> <br /> Supports JWT auth, persistent chat history, and lets users download full transcripts via AWS S3. Deployed with Terraform for full infra-as-code control.",
    links: [
      {
        name: "Live Demo",
        url: "https://drive.google.com/file/d/1zucRpNzQs78sCudGpequOUWLi_pnbaCp/view?usp=sharing",
      },
      {
        name: "Github",
        url: "https://github.com/tarun-veeraraghavan-mv/QuickTube",
      },
    ],
    skills: [
      "Nextjs",
      "TypeScript",
      "Django",
      "Langchain",
      "Postgres",
      "AWS S3",
      "Terraform",
    ],
  },
  {
    imgSrc: "/ai-code-review.png",
    title: "Reviewey",
    description:
      "AI-powered code review assistant that slashes review time and enforces custom coding standards — all in one click. Upload code files, select your language/editor, and let DeepSeek LLM generate detailed, intelligent quality reports instantly.",
    links: [
      {
        name: "Live Demo",
        url: "https://drive.google.com/file/d/1Vosmw7GXFgtmHh9cSGoeg_-zSQrJSJKT/view?usp=sharing",
      },
      {
        name: "Github",
        url: "https://github.com/tarun-veeraraghavan-mv/Reviewey",
      },
    ],
    skills: ["React", "Express", "MongoDB", "DeepSeek LLM"],
  },
  {
    imgSrc: "/startify-1.png",
    title: "Stratify",
    description:
      "A student-first planner designed to simplify college life. Manage courses, track assignments, set academic goals, and store important files—all in one place. Stay organized, boost productivity, and take control of your studies with an intuitive, distraction-free experience.",
    links: [
      {
        name: "Demo Video",
        url: "https://drive.google.com/file/d/1CoUCX3tUduFrlXlwAqAmZ8vnihwm6ipC/view",
      },
      {
        name: "Github",
        url: "https://github.com/tarun-veeraraghavan-mv/Stratify",
      },
      {
        name: "DB Diagram",
        url: "https://drive.google.com/file/d/1IwtmqZZxZeMgUa2cu2eVfP4zB-AEoH3v/view?usp=sharing",
      },
    ],
    skills: [
      "Nextjs",
      "TypeScript",
      "Spring Boot",
      "Postgres",
      "AWS S3",
      "Terraform",
    ],
  },
  {
    imgSrc: "/heart-disease-1.png",
    title: "CardioRisk AI",
    description:
      "A full-stack machine learning web application that predicts the risk of heart disease based on clinical features such as age, cholesterol, resting blood pressure, and more. Built with a React frontend and a Flask backend, this project demonstrates an end-to-end ML deployment pipeline, complete with real-time predictions, data analysis, and model evaluation.",
    links: [
      {
        name: "Demo Video",
        url: "https://drive.google.com/file/d/1uuXDWiDkxNa4TvIvRuBGSQn9shw7LH0h/view?usp=sharing",
      },
      {
        name: "Github",
        url: "https://github.com/tarun-veeraraghavan-mv/Heart-Disease-Predictor",
      },
    ],
    skills: ["React", "Python", "Scikit-Learn", "Flask", "Netlify", "Railway"],
  },
];