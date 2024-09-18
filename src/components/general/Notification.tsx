import React, {useState, useEffect} from 'react';
import './Notification.css';

type NotificationProps = {
    type: "error" | "success" | "info";
    message: string;
}

const Notification: React.FC<NotificationProps> = (props: NotificationProps) => {

    // set timer to remove notification after 3 seconds
    
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className={`notification ${props.type}`}>
            <div className="body">
                <p>{props.message}</p>
            </div>
        </div>
    );
}

export default Notification;