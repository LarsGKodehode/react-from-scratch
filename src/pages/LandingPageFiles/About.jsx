// Components
import React from "react";
import BioCard from "../../components/bioCard/BioCard";

// Data
import PeopleList from "../../data/PeopleList";

// Create JSX list from imported data
const PeopleListJSX = PeopleList.map((person) => {
  return(<BioCard {...person}/>)
});

const About = () => {
  const BioLars = {
    name: "Lars",
    title: "Teacher",
    funFact: "Likes reading"
  };

  return(
    <main>
      <h1 style={{"backgroundColor": "yellow"}}>About</h1>
      <BioCard {...BioLars}/>

      <BioCard 
        name="Georg"
        title="Student"
        funFact="Knows a lot"
      />

      {React.Children.toArray(PeopleListJSX)}
    </main>
  );
};


export default About;