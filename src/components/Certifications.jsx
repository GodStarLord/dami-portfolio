import React from "react";
import Meteors from "./ui/meteors";

const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  image,
  iconOnly = false
}) => {
  if (iconOnly) {
    return (
      <div className="group relative transform hover:-translate-y-2 transition-all duration-500 hover:duration-300 animate-float hover:animate-none">
        <div className="relative z-10 transform-style-preserve-3d group-hover:[transform:rotateY(10deg)_rotateX(-5deg)_scale(1.1)] transition-transform duration-500">
          <img
            src={image}
            alt=""
            className="w-40 h-40 object-contain drop-shadow-lg"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:duration-300 animate-float hover:animate-none">
      {/* Glass morphism effect with dynamic lighting */}
      <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg group-hover:bg-white/10 transition-all duration-500" />

      {/* Enhanced animated gradient border */}
      <div className="absolute -inset-[3px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-700" />
      <div className="absolute -inset-[1px] bg-gradient-to-r from-emerald-400 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-30 blur-sm transition-all duration-1000" />

      <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-2xl backdrop-blur-xl group-hover:shadow-[0_10px_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500">
        {/* Enhanced certification badge with parallax effect */}
        <div className="relative mb-6 flex justify-center perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-700" />
          <div className="relative z-10 transform-style-preserve-3d group-hover:[transform:rotateY(10deg)_rotateX(-5deg)_scale(1.1)] transition-transform duration-500">
            <img
              src={image}
              alt={title}
              className="w-24 h-24 object-contain drop-shadow-lg"
            />
          </div>
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-white/10 backdrop-blur-sm transition-all duration-500" />
        </div>

        {/* Enhanced content with animated typography */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-emerald-300 group-hover:to-sky-400 transition-all duration-500">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="font-semibold text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
              {issuer}
            </span>
            <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
              {date}
            </span>
          </div>
          <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed group-hover:border-cyan-400/70 group-hover:text-gray-200 transition-all duration-500">
            {description}
          </p>
        </div>

        {/* Enhanced decorative elements with animation */}
        <div className="absolute top-4 right-4 w-20 h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:w-8 transition-all duration-300" />
          <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:h-8 transition-all duration-500" />
        </div>
        <div className="absolute bottom-4 left-4 w-20 h-20 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50 group-hover:bg-purple-400 group-hover:w-8 transition-all duration-300" />
          <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50 group-hover:bg-purple-400 group-hover:h-8 transition-all duration-500" />
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CertificationsSection = () => {
  const certifications = [
    {
      image: "/src/assets/images/admin_badge.png",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
    {
      image: "/src/assets/images/actions_badge.png",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
    {
      image: "/src/assets/images/foundation_badge.webp",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
    {
      image: "/src/assets/images/azureadmin_badge.png",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
    {
      image: "/src/assets/images/devopsengineer_badge.png",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
    {
      image: "/src/assets/images/terraform_badge.png",
      title: "",
      issuer: "",
      date: "",
      description: "",
      iconOnly: true
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Background elements and shooting stars */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>
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

        {/* Content */}
        <div className="relative container mx-auto px-6 mt-10">
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Certifications
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Validating expertise through industry-recognized credentials"
            </p>
          </div>

          <div className="relative w-full h-[600px] max-w-7xl mx-auto">
            {certifications.map((cert, index) => {
              const row = Math.floor(index / 3);
              const col = index % 3;
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    top: `${20 + row * 30}%`,
                    left: `${15 + col * 30}%`,
                    transform: `rotate(${-5 + (index % 3) * 5}deg)`
                  }}
                >
                  <CertificationCard {...cert} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificationsSection;