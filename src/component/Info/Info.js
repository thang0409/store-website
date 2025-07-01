import classNames from 'classnames/bind';
import 'boxicons';

import styles from './Info.module.scss';
import { dataInfo } from '~/component/Info/constants';

const cx = classNames.bind(styles);

function Info() {
    return (
        <div className={cx('wrapper')}>
            {dataInfo.map((info, index) => {
                return (
                    <div key={index} className={cx('content')}>
                        <div className={cx('icon')}>
                            <i className={info.className}></i>
                        </div>
                        <div className={cx('mes')}>
                            <p className={cx('title')}>{info.title}</p>
                            <p className={cx('des')}>{info.des}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Info;
