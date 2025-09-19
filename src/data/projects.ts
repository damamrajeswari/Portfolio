export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  
  {
    id: 1,
    title: "AI Conversational Tutor Chatbot",
    description: "An AI-powered chatbot designed to provide personalized tutoring and interactive learning assistance.",
    longDescription: "Developed an intelligent conversational chatbot that helps students learn in an interactive way by answering queries, explaining concepts, and providing examples. Built using LangChain, Google Gemini, and Streamlit with session-based chat history management and user authentication. Integrated natural language understanding, memory, and contextual responses to enhance user experience.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["LangChain", "Google Gemini", "Streamlit", "Python", "SQLite/Firebase"],
    githubUrl: "https://github.com/damamrajeswari/AI-Conversational-tutor-chatbot",
    liveUrl: "https://ai-conversational-data-science-tutor-chatbot.streamlit.app/home",
    featured: true
},

  {
  id: 2,
  title: "Laptop Price Prediction",
  description: "A machine learning model with a Streamlit app to estimate laptop prices from specifications.",
  longDescription: "Developed a regression pipeline in Python to predict laptop prices based on specs like company, processor, RAM, storage, and GPU. Trained the model in Jupyter Notebook, exported it as a serialized pipeline, and built an interactive Streamlit app for real-time predictions. Deployed on Streamlit Cloud with a user-friendly interface.",
  image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Streamlit", "Jupyter Notebook"],
  githubUrl: "https://github.com/damamrajeswari/LaptopPricePrediction",
  liveUrl: "https://laptoppricepredictionml.streamlit.app/",
  featured: false
}


,
  {
  id: 3,
  title: "Search Engine Relevance for Video Subtitles",
  description: "Improved video subtitle search relevance using embeddings and similarity search.",
  longDescription: "Developed a prototype system to enhance search in video subtitles. Used Jupyter notebooks for embedding generation and similarity-based retrieval experiments, then created a Python demo app (`app.py`) to query and visualize results. The project focuses on improving subtitle relevance ranking by combining embeddings with retrieval techniques.",
  image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
  technologies: ["Python", "Jupyter Notebook", "scikit-learn", "Sentence Embeddings", "Similarity Search","ChromaDB","Sentence Transformers"],
  githubUrl: "https://github.com/damamrajeswari/Enhancing-Search-Engine-Relevance-For-Video-Subtitles-Cloning-Shazam",
  liveUrl: "",
  featured: false
},
  {
  id: 4,
  title: "Quiz App",
  description: "A basic interactive quiz using vanilla JavaScript and HTML.",
  longDescription: "Built a client-side quiz application with JavaScript and HTML. Loads questions, accepts user responses, and shows a score. No backend — everything runs in browser. Ideal for practicing JS event handling, DOM manipulation, and basic UX.",
  image: "https://images.pexels.com/photos/273238/pexels-photo-273238.jpeg?auto=compress&cs=tinysrgb&w=800",
  technologies: ["JavaScript", "HTML", "Node (for dev setup)"],
  githubUrl: "https://github.com/damamrajeswari/Quiz-app",
  liveUrl: "",
  featured: false
}

,
  
  {
  id: 5,
  title: "Personal Portfolio Website",
  description: "A responsive portfolio to showcase projects, skills, and experience.",
  longDescription: "Built with TypeScript, Vite, and Tailwind CSS, this portfolio highlights projects, skills, and contact details in a modern single-page design. Deployed seamlessly on Vercel for fast and reliable access.",
  image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
  technologies: ["TypeScript", "React", "Vite", "Tailwind CSS", "Vercel"],
  githubUrl: "https://github.com/damamrajeswari/Portfolio",
  liveUrl: "https://rajeswaridamam.vercel.app/",
  featured: true
}


];