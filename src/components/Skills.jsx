import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "./globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, Server, Terminal, Shield } from "lucide-react"; // Added Server, Terminal and Shield icons
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaGolang,
} from "react-icons/fa6";
import { DiGroovy } from "react-icons/di";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiTerraform,
  SiAnsible, // Added Ansible icon
  SiChef,    // Added Chef icon
  SiPulumi,  // Added Pulumi icon
} from "react-icons/si";
import { TbBrandVscode, TbBrandPowershell } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";
import { SiGithubactions, SiPacker, SiKubernetes, SiGooglecloud, SiOwasp, SiSonarqube, SiVagrant } from "react-icons/si";
import { LiaJenkins } from "react-icons/lia";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-4 h-4 text-white" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
        {
          name: "GraphQL",
          icon: <SiGraphql className="w-4 h-4 text-[#E10098]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Wireframing",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "Prototyping",
          icon: <MdAnimation className="w-4 h-4 text-[#F59E0B]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#2496ED]" />,
        },
        { 
          name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        {
          name: "Kubernetes",
          icon: <SiKubernetes className="w-4 h-4 text-[#5391FE]" />,
        },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
        { name: "GitHub Actions", icon: <SiGithubactions className="w-4 h-4 text-[#2088FF]" /> },
        { name: "Jenkins", icon: <LiaJenkins className="w-4 h-4 text-[#D33833]" /> },
        { name: "Azure", icon: <VscAzure className="w-4 h-4 text-[#0078D4]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Azure DevOps", icon: <VscAzureDevops className="w-4 h-4 text-[#0078D4]" /> },
      ],
    },
    {
      icon: Server, // Added Server icon for Infrastructure as Code
      title: "Infrastructure as Code",
      color: "text-teal-400", // Changed color to teal for distinction
      skills: [
        {
          name: "Terraform",
          icon: <SiTerraform className="w-4 h-4 text-[#7B42BC]" />,
        },
        {
          name: "Pulumi",
          icon: <SiPulumi className="w-4 h-4 text-[#8A3391]" />,
        },
        {
          name: "Azure",
          icon: <VscAzure className="w-4 h-4 text-[#0078D4]" />,
        },
        {
          name: "Terragrunt",
          icon: <SiTerraform className="w-4 h-4 text-[#7B42BC]" />,
        },
        {
          name: "Vagrant",
          icon: <SiVagrant className="w-4 h-4 text-[#1563FF]" />,
        },
        {
          name: "Ansible",
          icon: <SiAnsible className="w-4 h-4 text-black" />,
        },
        {
          name: "Chef",
          icon: <SiChef className="w-4 h-4 text-[#F09820]" />,
        },
        {
          name: "CloudFormation",
          icon: <FaAws className="w-4 h-4 text-[#FF9900]" />,
        },
        {
          name: "Bicep",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#0078D4]" />,
        },
        {
          name: "Packer",
          icon: <SiPacker className="w-4 h-4 text-[#02A8EF]" />,
        },
      ],
    },
    {
      icon: Terminal,
      title: "Scripting & Automation",
      color: "text-yellow-400",
      skills: [
        {
          name: "Bash",
          icon: <FaLinux className="w-4 h-4 text-[#4EAA25]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "PowerShell",
          icon: <TbBrandPowershell className="w-4 h-4 text-[#5391FE]" />,
        },
        {
          name: "Groovy",
          icon: <DiGroovy className="w-4 h-4 text-[#4298B8]" />,
        },
        {
          name: "Golang",
          icon: <FaGolang className="w-4 h-4 text-[#00ADD8]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        { name: "Jest", icon: <SiJest className="w-4 h-4 text-[#C21325]" /> },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-4 h-4 text-[#8DD6F9]" />,
        },
        { name: "Redux", icon: <SiRedux className="w-4 h-4 text-[#764ABC]" /> },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" />,
        },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-4 h-4 text-[#646CFF]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "UI Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "SVG Animation",
          icon: <MdAnimation className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "3D Modeling",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Motion Graphics",
          icon: <MdAnimation className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      color: "text-red-400",
      skills: [
        {
          name: "OWASP Top 10",
          icon: <SiOwasp className="w-4 h-4 text-[#000000]" />,
        },
        {
          name: "Penetration Testing",
          icon: <Terminal className="w-4 h-4 text-[#FF6B6B]" />,
        },
        {
          name: "Security Audits",
          icon: <Database className="w-4 h-4 text-[#FF6B6B]" />,
        },
        {
          name: "GDPR Compliance",
          icon: <Shield className="w-4 h-4 text-[#4C51BF]" />,
        },
        {
          name: "HIPAA Compliance",
          icon: <Shield className="w-4 h-4 text-[#4299E1]" />,
        },
        {
          name: "PCI DSS",
          icon: <Shield className="w-4 h-4 text-[#48BB78]" />,
        },
        {
          name: "SonarQube",
          icon: <SiSonarqube className="w-4 h-4 text-[#4E9BCD]" />,
        },
      ],
    }
    // {
    //   icon: FcWorkflow,
    //   title: "CI/CD Pipelines",
    //   color: "text-blue-400",
    //   skills: [
    //     {
    //       name: "Jenkins",
    //       icon: <SiJenkins className="w-4 h-4 text-[#D24939]" />,
    //     },
    //     {
    //       name: "Azure Pipelines",
    //       icon: <SiMicrosoftazure className="w-4 h-4 text-[#0089D6]" />,
    //     },
    //     {
    //       name: "GitHub Actions",
    //       icon: <FaGithub className="w-4 h-4 text-[#181717]" />,
    //     },
    //     {
    //       name: "CircleCI",
    //       icon: <SiCircleci className="w-4 h-4 text-[#343434]" />,
    //     },
    //     {
    //       name: "GitLab CI",
    //       icon: <SiGitlab className="w-4 h-4 text-[#FC6D26]" />,
    //     },
    //     {
    //       name: "Travis CI",
    //       icon: <SiTravisci className="w-4 h-4 text-[#3EAAAF]" />,
    //     },
    //   ],
    // },
  ];

  return (
    <main
      className="pt-15 lg:pt-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90
 text-white min-h-screen"
    >
      <section className="container mx-auto px-4 py-11">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;