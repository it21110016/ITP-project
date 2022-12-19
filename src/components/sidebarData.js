import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as ImIcons from 'react-icons/im';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Inventory',
        path: '/managePatient',
        icon: <ImIcons.ImManWoman />,
        cName: 'nav-text'
    },
    {
        title: 'customer',
        path: '/manageChannel',
        icon: <FaIcons.FaCalendarPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Staff',
        path: '/manageStaff',
        icon: <ImIcons.ImUsers />,
        cName: 'nav-text'
    },
    {
        title: 'Delevery',
        path: '/manageLab',
        icon: <ImIcons.ImLab />,
        cName: 'nav-text'
    },
    {
        title: 'Supplier',
        path: '/CovidManage',
        icon: <GiIcons.GiLoveInjection />,
        cName: 'nav-text'
    },
    {
        title: 'Order',
        path: '/managePharmacy',
        icon: <AiIcons.AiFillMedicineBox />,
        cName: 'nav-text'
    },
    {
        title: 'Finances',
        path: '/financeManage',
        icon: <AiIcons.AiOutlineDollarCircle />,
        cName: 'nav-text'
    },
    {
        title: 'sales',
        path: '/manageTransport',
        icon: <FaIcons.FaAmbulance />,
        cName: 'nav-text'
    }
];