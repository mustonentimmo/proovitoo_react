import styles from './Message.module.scss';

interface MessageProps {
    text: string;
}

const Message = ({ text }: MessageProps) => (
    <div className={styles['message']}>
        { text }
    </div>
)

export default Message;