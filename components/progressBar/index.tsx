import React from 'react';
import styles from './index.module.scss';

type ProgressBarProps = {
    value: number;
    title: string;
};

function progressBar({ value, title }: ProgressBarProps) {
    return (
        <div className={styles.meter}>
            <span style={{ width: `${value}%` }}>
                <span className={styles.progress}>
                    <div className={styles.progressText}>
                        <span>{title}</span>
                        <span>{value}%</span>
                    </div>
                </span>
            </span>
        </div>
    );
}

export default progressBar;
