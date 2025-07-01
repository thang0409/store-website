import classNames from 'classnames/bind';
import 'boxicons';

import styles from './Header.module.scss';
import {
    dataIcon,
    dataMenu
} from '~/component/Layout/DefaultLayout/Header/constants';

import Logo from '~/assets/image/Logo-retina.webp';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('main')}>
            <div className={cx('wrapper')}>
                {/* Khối Trái */}
                <div className={cx('leftBox')}>
                    <div className={cx('iconBox')}>
                        {dataIcon.slice(0, 3).map((icon, index) => {
                            return (
                                <div className={cx('iconItem')} key={index}>
                                    <i className={icon.type}></i>
                                </div>
                            );
                        })}
                    </div>

                    <div className={cx('navBox')}>
                        {dataMenu.slice(0, 3).map((menu, index) => {
                            return (
                                <div className={cx('navItem')} key={index}>
                                    {menu.content}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Khối giữa */}
                <div className={cx('centerBox')}>
                    <img src={Logo} />
                </div>

                {/* Khối Phải */}
                <div className={cx('rightBox')}>
                    <div className={cx('navBox')}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((menu, index) => {
                                return (
                                    <div className={cx('navItem')} key={index}>
                                        {menu.content}
                                    </div>
                                );
                            })}
                    </div>
                    <div className={cx('iconBox')}>
                        {dataIcon
                            .slice(3, dataIcon.length)
                            .map((icon, index) => {
                                return (
                                    <div key={index}>
                                        <i className={icon.type}></i>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
