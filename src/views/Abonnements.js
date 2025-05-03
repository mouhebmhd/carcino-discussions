import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

export default function Subscribtion() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [subs, setSubs] = useState([]);

  const loadData = () => {
    axios.get("http://localhost:3030/Abonnement/getAbonnementsByDetails/")
      .then((response) => {
        console.log(response.data);
        setSubs(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des abonnements :", error);
      });
  };
  const warnUser=(user)=>{
    console.log(user._id)
    const message = `Your account has received a warning from the moderator. Please review your behavior on the platform.`;
    const date=new Date().toISOString()
    const title ="Warning !  "
    const waring={
      notificationDate:date,
      notificationTitle:title,
      notificationDescription:message,
      notificationReceiver:user._id,
    }
    console.log(waring)
    axios.post("http://localhost:3030/notifications/postNotifications/",waring)
    .then((response)=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  };
  const deleteSubscribe = (subscribeId) => {
    axios.delete("http://localhost:3030/Abonnement/deleteAbonnement/" + subscribeId)
      .then(response => {
        console.log(response);
        loadData();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const approveDemand = (subscribe) => {
    subscribe["abonnementStatus"]="approved"
    const {userId,dateDebutAbonnement,communityId,abonnementStatus}=subscribe;
    const data={userId,dateDebutAbonnement,communityId,abonnementStatus}
    console.log(data)
    axios.put("http://localhost:3030/Abonnement/updateAbonnement/" + subscribe._id,data)
      .then(response => {
        console.log(response);
        loadData();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const desapproveDemand = (subscribe) => {
    subscribe["abonnementStatus"]="waiting"
    const {userId,dateDebutAbonnement,communityId,abonnementStatus}=subscribe;
    const data={userId,dateDebutAbonnement,communityId,abonnementStatus}
    console.log(data)
    axios.put("http://localhost:3030/Abonnement/updateAbonnement/" + subscribe._id,data)
      .then(response => {
        console.log(response);
        loadData();
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, [user?.id]);

  return (
    <>
      <Navbar color="var(--mainColor)" />
      <div className="container mt-4">
      <div className="text-center ">
            <h6 className="section-title bg-white text-center specialText px-3">Abonnements</h6>
            <h1 className="mb-5">Gestions des Abonnements</h1>
         
          </div>
        <table className="table  ">
          <thead className="table ">
            <tr>
              <th scope="col">Utilisateur</th>
              <th scope="col">Email</th>
              <th scope="col">Communauté</th>
              <th scope="col">Date d’abonnement</th>
              <th scope="col">Statut</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((subscribe, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={subscribe.userInfo?.userAvatar}
                    alt="avatar"
                    style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
                  />
                  {subscribe.userInfo?.prenom} {subscribe.userInfo?.nom}
                </td>
                <td>{subscribe.userInfo?.email}</td>
                <td>{subscribe.communityInfo?.nomCommunaute}</td>
                <td>{new Date(subscribe.dateDebutAbonnement).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${subscribe.abonnementStatus === 'waiting' ? 'bg-warning' : 'bg-success'}`}>
                    {subscribe.abonnementStatus}
                  </span>
                </td>
                <td className='d-flex column-gap-2 p-3'>
                  <button className="btn btn-danger btn-sm" onClick={() => deleteSubscribe(subscribe._id)}>
                    Supprimer
                  </button>
                  {subscribe.abonnementStatus === 'waiting' && 
                   <button className="btn btn-primary  btn-sm" onClick={() => approveDemand(subscribe)}>
                    Approuver
                  </button>}
                  {subscribe.abonnementStatus !== 'waiting' && 
                   <button className="btn btn-dark  btn-sm" onClick={() => warnUser(subscribe.userInfo)}>
                    Avertir
                  </button>}
                  {subscribe.abonnementStatus != 'waiting' && 
                  <button className="btn btn-warning  btn-sm" onClick={() => desapproveDemand(subscribe)}>
                  Désapprouver 
                  </button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
