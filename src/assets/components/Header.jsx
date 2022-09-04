import React from "react";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

import Logo from "../img/Logo.png";
import Home from "../img/HomeIc.png";
import Chat from "../img/Cross.png";
import Settings from "../img/setting.png";
import profile from "../img/photo.png";

function Header() {
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="" href="">
                            <img src={Home} alt="nav" className="nav__icons" />
                        </a>
                    )
                }, {
                    key: '2',
                    label: (
                        <a target="_blank" rel="" href="">
                            <img src={Chat} alt="nav" className="nav__icons" />
                        </a>
                    ),
                    disabled: true
                }, {
                    key: '3',
                    label: (
                        <a target="_blank" rel="" href="">
                            <img src={Settings} alt="nav" className="nav__icons" />
                        </a>
                    ),
                    disabled: true
                }
            ]} />
    );

    return (
        <div className="header-container">
            <nav className="header">
                <div className="logo">
                    <img src={Logo} alt="logo" className="logoImg" />
                </div>
                <div className="nav">
                    <div className="nav__menu">
                        <img src={Home} alt="nav" className="nav__icons" />
                        <img src={Chat} alt="nav" className="nav__icons" />
                        <img src={Settings} alt="nav" className="nav__icons" />
                    </div>
                    <div className="nav__dropdown">
                        <Dropdown overlay={menu}>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    &#9776;
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>

                    <img src={profile} alt="nav" className="nav__icons" />
                    <select name="" className="nav__language">
                        <option value="eng">ENG</option>
                        <option value="rus">RUS</option>

                    </select>
                </div>
            </nav>
        </div>
    );
}

export default Header;