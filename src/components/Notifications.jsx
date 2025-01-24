import React, { useState } from "react";
import Header from "./Header";
import "../styles/Notifications.css"; // Add styles for this page

const Notifications = () => {
  const handleSubmitBlotter = () => {
    console.log("Navigating to Blotter Form...");
  };

  const timeAgo = (timestamp) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(timestamp)) / 1000); // Time difference in seconds

    if (diff < 60) return `${diff} seconds ago`;
    else if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    else if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    else return `${Math.floor(diff / 86400)} days ago`;
  };

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Complaint Submitted",
      content:
        "A new complaint about noise pollution was submitted at Barangay 5.",
      isRead: false,
      time: "2025-01-17T10:00:00Z",
    },
    {
      id: 2,
      title: "Complaint Resolved",
      content:
        "The complaint about the broken streetlights has been marked as resolved.",
      isRead: false,
      time: "2025-01-17T09:30:00Z",
    },
    {
      id: 3,
      title: "System Maintenance",
      content:
        "The system will undergo maintenance from 12:00 AM to 2:00 AM on January 18.",
      isRead: true,
      time: "2025-01-16T15:00:00Z",
    },
    {
      id: 4,
      title: "New Announcement",
      content:
        "A new announcement regarding disaster preparedness has been posted.",
      isRead: false,
      time: "2025-01-17T08:45:00Z",
    },
    {
      id: 5,
      title: "Update on Complaint Status",
      content:
        "The complaint about waste management has been updated. Check for details.",
      isRead: false,
      time: "2025-01-17T07:15:00Z",
    },
    ...Array.from({ length: 10 }, (_, index) => ({
      id: 6 + index,
      title: `Sample Notification ${6 + index}`,
      content: `This is the content for Sample Notification ${
        6 + index
      }. Click to read more.`,
      isRead: false,
      time: new Date(Date.now() - (index + 1) * 3600000).toISOString(),
    })),
  ]);

  const [filter, setFilter] = useState("all"); // "all" or "unread"
  const [selectedNotificationId, setSelectedNotificationId] = useState(null); // Track selected notification
  const [visibleCount, setVisibleCount] = useState(5); // Limit visible notifications

  const markAsRead = (id) => {
    setSelectedNotificationId((prev) => (prev === id ? null : id));
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
    if (filter === "unread") {
      setFilter("all");
    }
  };

  const loadMoreNotifications = () => {
    setVisibleCount(notifications.length); // Show all notifications
  };

  const filteredNotifications = (
    filter === "all"
      ? notifications
      : notifications.filter((notification) => !notification.isRead)
  ).sort((a, b) => new Date(b.time) - new Date(a.time)); // Sort by time (latest first)

  return (
    <div>
      <div className="notifications-container">
        <Header />
        <div className="header-buttons">
          <button
            onClick={handleSubmitBlotter}
            className="submit-blotter-header"
          >
            Submit Blotter
          </button>
        </div>
        <div className="notifications-box">
          <h1 className="notifications-title">Notifications</h1>
          <div className="notifications-options">
            <button
              onClick={() => setFilter("all")}
              className={`notifications-btn ${
                filter === "all" ? "active" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`notifications-btn ${
                filter === "unread" ? "active" : ""
              }`}
            >
              Unread
            </button>
          </div>
          <div className="notification-list">
            {filteredNotifications
              .slice(0, visibleCount)
              .map((notification) => (
                <div
                  key={notification.id}
                  className={`notification ${
                    notification.isRead ? "read" : "unread"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <strong>{notification.title}</strong>
                  <p className="notif-time">{timeAgo(notification.time)}</p>
                  {selectedNotificationId === notification.id && (
                    <p className="notif-content">{notification.content}</p>
                  )}
                  {!notification.isRead && (
                    <span className="unread-circle"></span>
                  )}
                </div>
              ))}
          </div>
          {visibleCount < filteredNotifications.length && (
            <button className="show-more-btn" onClick={loadMoreNotifications}>
              See Previous Notifications
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
