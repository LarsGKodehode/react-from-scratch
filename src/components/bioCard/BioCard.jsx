const BioCard = (props) => {
  const { name, title, funFact } = props;

  if(name && title && funFact) {
    return(
      <div>
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{funFact}</p>
      </div>
    );
  } else {
    return(
      <h4>Employee not found</h4>
    );
  };
};


export default BioCard;