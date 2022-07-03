import React from 'react'
import { Button, Dropdown, Menu, Space } from 'antd';

import '../resources/default-layout.css'
import { useNavigate } from 'react-router-dom';

function DefaultLayout(props){
    const user = JSON.parse(localStorage.getItem('accomplishment-tracker-user'))
    const navigate = useNavigate()
    const menu = (
        <Menu
          items={[
            {
              key: '1',
              label: (
                <li onClick={()=>{
                    localStorage.removeItem('accomplishment-tracker-user')
                    navigate("/login")
                }}>logout</li>
              ),
            },
            {
              key: '2',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                  2nd menu item
                </a>
              ),
            },
            {
              key: '3',
              label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                  3rd menu item
                </a>
              ),
            },
          ]}
        />
      );

    return (
        <div className='layout'>
            
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="logo">Accomplishment Tracker</h1>
                </div>
                <div>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <button className='primary'>user.name</button>
                    </Dropdown>
                </div>
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default DefaultLayout