export interface ResumeFeature {
  id: string;
  title: string;
  description: string;
  promptTemplate: string;
}

export const RESUME_FEATURES: ResumeFeature[] = [
  {
    id: "analyze-jd",
    title: "Analyze Job Description",
    description: "Instantly get AI-powered insights for any job posting.",
    promptTemplate: "Analyze this job description and extract key qualifications, required skills, and core responsibilities:\n\n[Paste Job Description Here]",
  },
  {
    id: "tailor-resume",
    title: "Tailor Your Resume",
    description: "Get suggestions to match your CV to the job requirements.",
    promptTemplate: "Review my resume against the target role requirements and suggest high-impact revisions and targeted bullet points:\n\n[Paste Resume & Target Role Here]",
  },
  {
    id: "prepare-interviews",
    title: "Prepare for Interviews",
    description: "Practice with AI-generated interview questions and tips.",
    promptTemplate: "Generate realistic behavioral and technical interview questions based on this role, along with STAR-method answer frameworks:\n\n[Paste Role / Industry Here]",
  },
  {
    id: "skill-gap-analysis",
    title: "Skill Gap Analysis",
    description: "Discover key skills to focus on for your target role.",
    promptTemplate: "Compare my background with industry benchmarks for this role and identify critical skill gaps and learning pathways:\n\n[Paste Skills & Target Role Here]",
  },
];
