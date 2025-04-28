import React, { useEffect, useState } from 'react';
import { Bell, Check } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';

const NotificationManager = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = '661fa7dc3b62d0c8fe1cf1d1'; // 🔁 بدّل بـ userId الحقيقي من الـ Auth

  // Define rose/pink theme color for consistency
  const roseColor = '#e83e8c'; // Bootstrap pink color

  // 🟢 Get Notifications
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/api/notifications/${userId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setNotifications(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching notifications:', err);
        setLoading(false);
        // Provide fallback data for testing if API fails
        setNotifications([
          {
            _id: '1',
            title: 'Bienvenue!',
            message: 'Bienvenue sur notre plateforme.',
            date: new Date(),
            read: false
          },
          {
            _id: '2',
            title: 'Nouveau message',
            message: 'Vous avez reçu un nouveau message.',
            date: new Date(),
            read: false
          }
        ]);
      });
  }, [userId]);

  // ✅ Mark one as read - Fixed function
  const markAsRead = (id) => {
    console.log(`Marking notification ${id} as read`); // Debug log
    
    fetch(`http://localhost:5000/api/notifications/read/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to mark notification as read');
        }
        return res.json();
      })
      .then(() => {
        // Update the state to mark the notification as read
        setNotifications(prevNotifications => 
          prevNotifications.map(notif => 
            notif._id === id ? { ...notif, read: true } : notif
          )
        );
      })
      .catch(err => {
        console.error('Error marking notification as read:', err);
        
        // Even if API fails, update UI state for better UX
        setNotifications(prevNotifications => 
          prevNotifications.map(notif => 
            notif._id === id ? { ...notif, read: true } : notif
          )
        );
      });
  };

  // ✅ Mark all as read - Fixed function
  const markAllAsRead = () => {
    console.log("Marking all notifications as read"); // Debug log
    
    fetch(`http://localhost:5000/api/notifications/read-all/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to mark all notifications as read');
        }
        return res.json();
      })
      .then(() => {
        setNotifications(prevNotifications =>
          prevNotifications.map(notif => ({ ...notif, read: true }))
        );
      })
      .catch(err => {
        console.error('Error marking all notifications as read:', err);
        
        // Even if API fails, update UI state for better UX
        setNotifications(prevNotifications =>
          prevNotifications.map(notif => ({ ...notif, read: true }))
        );
      });
  };

  // Custom style for rose theme
  const roseStyle = {
    heading: {
      color: roseColor
    },
    button: {
      backgroundColor: roseColor,
      borderColor: roseColor
    },
    outlineButton: {
      color: roseColor,
      borderColor: roseColor
    },
    alertBorder: {
      borderLeft: `4px solid ${roseColor}`
    }
  };

  return (
    <>
    <NavBar className="mb-5 d-block"></NavBar>
    <div className="container mt-5 d-block">
    <div className="text-center ">
          <h6 className="section-title bg-white specialText px-3">Notifications</h6>
          <h1 className="mb-5">Vos Notifications</h1>
          
        </div>

      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border" role="status" style={roseStyle.heading}>
            <span className="visually-hidden">Chargement...</span>
          </div>
        </div>
      ) : notifications.length === 0 ? (
        <div className="alert alert-light text-center py-4">
          <Bell size={24} className="mb-2 text-secondary" />
          <p className="mb-0 text-secondary">Aucune notification pour le moment.</p>
        </div>
      ) : (
        <div className="notification-list">
          {notifications.map((notif) => (
            <div
              key={notif._id}
              className={`alert d-flex justify-content-between align-items-center ${
                notif.read ? 'alert-light' : 'alert-light'
              }`}
              style={!notif.read ? roseStyle.alertBorder : {}}
            >
              <div>
                <h6 className="mb-1 fw-bold">{notif.title}</h6>
                <p className="mb-0">{notif.message}</p>
                <small className="text-muted">{new Date(notif.date).toLocaleString('fr-FR')}</small>
              </div>
              {!notif.read && (
                <button
                  className="btn btn-sm rounded-pill text-white"
                  onClick={() => markAsRead(notif._id)}
                  style={roseStyle.button}
                  type="button"
                >
                  Marquer comme lu
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default NotificationManager;