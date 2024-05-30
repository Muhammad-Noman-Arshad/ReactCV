import"./App.css"
function App() {
  return (
    <div className="container">
     <p>   <h1 className="ms-2"> Chaudhary Noman Arshad  </h1>   
  
<img  className="ms-1"  src="FB_IMG_15895729352405234.jpg" 
alt="Chaudhary Noman Arshad" width="300" height="300" >
</img>
</p>
<hr></hr>
</div>
  );
}
export default App;  



// import React from 'react';

// function PersonalInfo(props) {
//   return (
//     <div>
//         <p>Image: {props.image}</p>
//       <h2>{props.name}</h2>
//       <p>Email: {props.email}</p>
//       <p>Phone: {props.phone}</p>
//       <p>Address: {props.address}</p>
//     </div>
//   );
// }

// function Education(props) {
//   return (
//     <div>
//       <h2>Education</h2>
//       <ul>
//         {props.education.map((edu, index) => (
//           <li key={index}>
//             <p>{edu.degree}</p>
//             <p>{edu.institution}</p>
//             <p>{edu.year}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Experience(props) {
//   return (
//     <div>
//       <h2>Experience</h2>
//       <ul>
//         {props.experience.map((exp, index) => (
//           <li key={index}>
//             <p>{exp.title}</p>
//             <p>{exp.company}</p>
//             <p>{exp.duration}</p>
//             <p>{exp.description}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Skills(props) {
//   return (
//     <div>
//       <h2>Skills</h2>
//       <ul>
//         {props.skills.map((skill, index) => (
//           <li key={index}>{skill}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Resume(props) {
//   return (
//     <div>
//       <PersonalInfo
//         name={props.personalInfo.name}
//         email={props.personalInfo.email}
//         phone={props.personalInfo.phone}
//         address={props.personalInfo.address}
//       />
//       <Education education={props.education} />
//       <Experience experience={props.experience} />
//       <Skills skills={props.skills} />
//     </div>
//   );
// }

// // Example usage:
// const resumeData = {
//   personalInfo: {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//     address: "123 Main St, Anytown, USA",
//     image : <img  className="ms-1"  src="FB_IMG_15895729352405234.jpg" 
//     alt="Chaudhary Noman Arshad" width="300" height="300" > </img> 
//   },
//   education: [
//     {
//       degree: "Bachelor of Science in Computer Science",
//       institution: "University of XYZ",
//       year: "2018",
//     },
//     // Add more education entries as needed
//   ],
//   experience: [
//     {
//       title: "Software Engineer",
//       company: "ABC Corp",
//       duration: "2018 - Present",
//       description: "Developed web applications using React.js",
//     },
//     // Add more experience entries as needed
//   ],
//   skills: ["React.js", "JavaScript", "HTML", "CSS", "Node.js"],
// };

// function App() {
//   return (
//     <div>
//       <h1>My Resume</h1>
//       <Resume {...resumeData} />
//     </div>
//   );
// }

// export default App;


















