import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary, Workflow } from "lucide-react";
import { VscAzureDevops } from "react-icons/vsc";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: VscAzureDevops,
      title: "DevOps Consultant",
      company: "Kristom Technologies",
      period: "2022-01 - 2022-06",
      description:
        "Provided DevOps consulting services, implementing CI/CD pipelines and infrastructure automation.",
    },
    {
      icon: VscAzureDevops,
      title: "DevOps and Cloud Engineer",
      company: "Redtech Limited",
      period: "2021-07 - 2021-12",
      description:
        "Designed and implemented cloud infrastructure solutions with a focus on automation and scalability.",
    },
    {
      icon: VscAzureDevops,
      title: "DevOps Engineer",
      company: "Jive Software",
      period: "2021-07 - 2021-12",
      description:
        "Managed Kubernetes clusters and implemented GitOps workflows for application deployments.",
    },
    {
      icon: Network,
      title: "Technical Solutions Engineer",
      company: "Crossover for Work",
      period: "2019-06 - 2021-01",
      description:
        "Provided technical solutions and support for cloud-based applications and infrastructure.",
    },
    {
      icon: Network,
      title: "Cloud Technical Lead (Level 3)",
      company: "Microsoft (Tek Experts)",
      period: "2019-06 - 2021-01",
      description:
        "Led technical support team for Microsoft Azure services, focusing on identity and access management.",
    },
    {
      icon: Network,
      title: "Cloud Support Engineer (Level 2)",
      company: "Microsoft (Tek Experts)",
      period: "2018-10 - 2019-06",
      description:
        "Provided technical support for Microsoft Azure services, specializing in identity management.",
    },
    {
      icon: Binary,
      title: "Information Security Analyst (SOC)",
      company: "First Bank Nigeria Limited",
      period: "2017-03 - 2017-12",
      description:
        "Monitored and analyzed security events, implemented security controls, and responded to incidents.",
    },
    {
      icon: Activity,
      title: "IT Support",
      company: "First Bank Nigeria Limited",
      period: "2017-12 - 2018-04",
      description:
        "Provided technical support and troubleshooting for enterprise IT systems and applications.",
    },
    {
      icon: Cpu,
      title: "Remote Monitoring Systems Analyst",
      company: "Amaduke Geo-Resources",
      period: "2016-05 - 2017-04",
      description:
        "Monitored and maintained remote systems for geological data collection and analysis.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b  relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90"
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
