import styles from './LoadingIndicator.module.scss';

const LoadingIndicator = () => (
    <div className={styles['loading-indicator']}>
        Loading posts...
    </div>
)

export default LoadingIndicator;