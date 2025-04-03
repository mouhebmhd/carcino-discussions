import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

const SuggestionsS = () => {
  const suggestions = [
    { 
      name: "Tvs Srichakra Ltd.", 
      date: "August 25, 2021", 
      avatar: "avat.jpg"
    },
    { 
      name: "Vaibhav Shinde", 
      date: "August 25, 2021", 
      avatar: "avat2.jpg"
    },
    { 
      name: "Sanjeev Kumar Singh", 
      date: "July 16, 2021", 
      avatar: "avat4.jpg"
    },
    { 
      name: "Zee Business", 
      date: "August 25, 2021", 
      avatar: "avat3.jpg"
    }
  ];

  return (
    <div className="card border-0 mb-4">
      <div className="card-body pb-0">
        <h5 className="card-title mb-3 text-center fw-bold">Suggestions For You</h5>
        <ul className="list-group list-group-flush">
          {suggestions.map((user, index) => (
            <li key={index} className="list-group-item border-0 px-0 py-2 d-flex align-items-center">
              <div className="d-flex align-items-center" style={{width: "100%"}}>
                <img 
                  src={
                    
                    
                user.avatar} 
                  alt={user.name} 
                  className="rounded-circle me-2" 
                  width="40" 
                  height="40" 
                />
                <div className="flex-grow-1">
                  <div className="fw-bold">{user.name}</div>
                  <small className="text-muted">{user.date}</small>
                </div>
                <button className="btn btn-outline-danger rounded-pill px-4">Follow</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="text-center mt-2 mb-3">
          <a href="#" className="text-decoration-none">See More</a>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsS;