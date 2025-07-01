import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ content, isPrimary = true }) {
    return (
        <button
            className={cx('btn', {
                primaryBtn: isPrimary,
                seconBtn: !isPrimary
            })}
        >
            {content}
        </button>
    );
}

export default Button;
