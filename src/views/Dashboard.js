import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import "../styles/dashboardStyle.css";
import axios from 'axios';
 
function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3030/stats/getStats')
      .then(response => setStats(response.data))
      .catch(error => console.error("Error fetching stats:", error));
  }, []);

  if (!stats) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  const { users, publications, commentaires, interactions, abonnements, communautes, topUsers } = stats;

  return (
    <>
      <NavBar />
      <div className="text-center mt-3">
        <h6 className="section-title text-center specialText px-3">Statistiques</h6>
        <h1 className="">Dashboard</h1>
      </div>

      <section className="dashboard">
        <div className="container-fluid d-flex flex-wrap justify-content-center">

          {/* Total Publications */}
          <StatCard title="Total Posts" value={publications.total} icon="fas fa-newspaper" />

          {/* Total Users */}
          <StatCard title="Total Users" value={users.total} icon="fas fa-users" />

          {/* Moderators */}
          <StatCard title="Total Moderators" value={
            users.byRole.find(r => r._id === 'moderateur')?.count || 0
          } icon="fas fa-user-shield" />

          {/* Interactions */}
          <StatCard title="Interactions Made" value={interactions.total} icon="fas fa-hand-pointer" />

          {/* Commentaires */}
          <StatCard title="Total Comments" value={commentaires} icon="fas fa-comments" />

          {/* Abonnements */}
          <StatCard title="Total Abonnements" value={abonnements} icon="fas fa-user-plus" />

          {/* Communautés */}
          <StatCard title="Communautés créées" value={communautes.total} icon="fas fa-layer-group" />

          {/* Active Users */}
          <StatCard title="Active Accounts" value={users.active} icon="fas fa-user-check" />

        </div>

        {/* Optional: Top Users */}
        

      </section>
    </>
  );
}

// Reusable Card Component
function StatCard({ title, value, icon }) {
  return (
    <div className="card col-12 col-md-5 col-lg-3 mx-2 my-2 border-left-primary shadow h-100 py-2 custom-card">
      <div className="card-body">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className="text-xs font-weight-bold text-uppercase mb-1">
              {title}
            </div>
            <div className="h1 mb-0 font-weight-bold text-gray-800">{value}</div>
          </div>
          <div className="col-auto iconStat">
            <i className={`${icon} fa-2x text-gray-300`}></i>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Dashboard;
