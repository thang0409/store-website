import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Header from '~/component/Layout/DefaultLayout/Header/Header';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div>
            <div className={cx('header')}>
                <Header />
            </div>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default DefaultLayout;
