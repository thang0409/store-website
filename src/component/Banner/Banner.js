import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import Button from '~/component/Button/Button';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div>
                    <h1 className={cx('title')}>XStore Marseille04 Demo</h1>
                    <p className={cx('des')}>
                        Make yours celebrations even more special this years
                        with beautiful.
                    </p>
                    <Button
                        content={'Go to shop'}
                        className={cx('btn primaryBtn')}
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
