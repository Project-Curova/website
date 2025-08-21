// import HeroLogo from "../assets/heroimgg.svg";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from "react-router-dom";
import { NAVIGATION } from "../lib/definitions";

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'Testimonials',
    // disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: 'Services',
    extra: '⌘P',
  },
];


const Navigation = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* <img src={HeroLogo} className="w-[100px] h-[50px]" alt="Hero Logo" /> */}
      <Link to={NAVIGATION.HOME} className="text-pry font-bold">Curova</Link>

      <div className="text-pry font-medium flex gap-x-2 items-center text-sm">

        <Dropdown menu={{ items }} className='cursor-pointer'>
          <a onClick={(e) => e.preventDefault()}>
            <Space className='flex items-center gap-x-1'>
              About Us
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        
        <p>Services</p>
        
        <Link to={NAVIGATION.CONTACT_US} className="text-pry">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navigation
