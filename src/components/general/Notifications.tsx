import Notification from "./Notification";
import { useEffect, useState } from "react";
import './Notifications.css';


interface notificationType {
    type: "error" | "success" | "info";
    message: string;
}

interface NotificationsProps {
    triggerNotification: number;
    notification: notificationType;
}

const Notifications: React.FC<NotificationsProps> = ({ triggerNotification, notification }) => {

    const [notifications, setNotifications] = useState<Array<notificationType>>([]);

    const addNotification = (notification:notificationType) => {
        setNotifications([...notifications, notification]);
        // setTimeout(() => {
        //     setNotifications(notifications.filter((n) => n !== notification));
        // }, 3000);
    }

    useEffect(() => {
        if (triggerNotification>0) {
            addNotification(notification);
        }
    }, [triggerNotification]);

    return (
        <div className="notifications">
            {notifications.map((notification, index) => (
                <Notification key={index} type={notification.type} message={notification.message} />
            ))}
        </div>
    );
};

export default Notifications;