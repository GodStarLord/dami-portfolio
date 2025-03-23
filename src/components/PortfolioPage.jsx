// import React from "react";
// import profileImage from "../assets/images/profile.png";

// const AboutMe = () => {
//   return (
//     <section
//       className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
//     >
//       <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
//         <div className="content max-w-2xl">
//           <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
//           <p className="text-lg leading-relaxed">
//             Hello! I’m Damilola Onadeinde, a passionate JavaScript developer
//             specializing in creating innovative web solutions and user-friendly
//             interfaces. As the creator of the{" "}
//             <a className="text-[#4ECCA3] px-2" href="https://olova.js.org/">
//               OlovaJS
//             </a>{" "}
//             UI Framework, I’m dedicated to simplifying development workflows and
//             pushing the boundaries of JavaScript frameworks. My focus is on
//             making web development faster, easier, and accessible to all
//             developers. Currently, I’m expanding into backend development to
//             grow as a full-stack developer and create seamless, robust web
//             applications. I’m a lifelong learner and innovator, driven by a
//             desire to contribute to the developer community with new ideas and
//             tools that deliver real value.
//           </p>
//         </div>
//         <div className="image-container">
//           <img
//             src={profileImage}
//             alt="Profile"
//             className="w-72 h-72 rounded-lg object-cover shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Damilola Onadeinde, a passionate DevOps engineer with a strong focus on automating and optimizing development and deployment processes. I specialize in building scalable, reliable, and secure infrastructure using tools like Docker, Kubernetes, Terraform, and Ansible. My expertise lies in implementing CI/CD pipelines, managing cloud platforms (AWS, Azure, GCP), and ensuring seamless collaboration between development and operations teams.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            As a DevOps advocate, I’m dedicated to streamlining workflows, reducing deployment times, and improving system reliability. I have hands-on experience with monitoring and logging tools like Prometheus, Grafana, and ELK Stack to ensure high availability and performance. My goal is to bridge the gap between development and operations, enabling faster delivery of high-quality software.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I’m a lifelong learner and problem solver, always exploring new technologies and methodologies to enhance my skill set. Whether it’s automating infrastructure, optimizing cloud costs, or implementing robust security practices, I’m driven by the desire to create efficient and resilient systems that deliver real value to businesses and end-users.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;