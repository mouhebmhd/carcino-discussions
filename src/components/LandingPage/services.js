import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Services() {
  return (
    <div className="container bootstrap snippets bootdey">
      <section id="services" className="current text-center">
        <div className="services-top">
          <div className="container bootstrap snippets bootdey">
            <div className="row text-center">
              <div className="col-sm-12 col-md-12">
                <h2 style={{
                  fontSize: "36px",
                  lineHeight: "48px",
                  marginBottom: "10px",
                }}>
                  Espace sécurisé pour la guérison
                </h2>
                <h2 style={{
                  fontSize: "50px",
                  lineHeight: "60px",
                  marginBottom: "20px",
                }} >
                 <p className='display-4 mainTextColor'> Nos services de soutien</p>
                </h2>
                <p className='fs-3 mainColorText'>
                Notre plateforme offre <span className="highlight">dédié</span>  salles de discussion où les patients confrontés à <strong>cancer</strong>  et d'autres défis de santé peuvent se connecter, partager et se soutenir mutuellement.
                </p>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-md-offset-1 col-sm-12 col-md-10">
                <div className="services-list">
                  <div className="row">
                    {[
                      {
                        icon: "fa-users",
                        name: "Community Support",
                        info: "Talk with others who understand",
                        text: "Join groups for specific health conditions, and connect with people who truly get what you're going through."
                      },
                      {
                        icon: "fa-comments",
                        name: "Discussion Rooms",
                        info: "Speak openly, anytime",
                        text: "24/7 moderated chat rooms for open discussions, emotional support, or just someone to talk to."
                      },
                      {
                        icon: "fa-heart",
                        name: "Emotional Wellbeing",
                        info: "You are not alone",
                        text: "Guided conversations to help you cope with the emotional side of illness, anxiety, and recovery."
                      },
                      {
                        icon: "fa-stethoscope",
                        name: "Medical Guidance",
                        info: "Reliable health advice",
                        text: "FAQs and discussions facilitated by certified experts to help clarify doubts and medical concerns."
                      },
                      {
                        icon: "fa-user-md",
                        name: "Ask a Professional",
                        info: "Periodic Q&A sessions",
                        text: "Join live Q&A sessions with doctors, psychologists, and wellness coaches."
                      },
                      {
                        icon: "fa-shield",
                        name: "Safe & Confidential",
                        info: "Privacy-first platform",
                        text: "Your data is protected. We foster a judgment-free, confidential environment."
                      }
                    ].map((service, index) => (
                      <div className="col-sm-6 col-md-4" key={index}>
                        
                        <div className="service-block" style={{ visibility: "visible" }}>
                        <div className="iconCircularContainer bg-warning">
                            <div className={`ico fa ${service.icon} highlight`} style={{ fontSize: "28px", marginBottom: "10px" }}></div>

                            </div>
                          <div className="text-block">
                            <div className="name" style={{ fontWeight: "bold" }}>{service.name}</div>
                            <div className="info">{service.info}</div>
                            <div className="text">{service.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
