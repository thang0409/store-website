import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Info from '~/component/Info/Info';
import Banner from '~/component/Banner/Banner';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div>
            <div className={cx('container')}>
                <Banner />
            </div>
            <Info />
        </div>
    );
}

export default Home;
