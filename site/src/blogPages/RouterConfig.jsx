import React from 'react';

import CardList from './CardList';

const RouterConfig = [
    {
        path: '/',
        key: 'home',
        name: '主页',
        component: <div>home</div>,
    },
    {
        path: '/blog',
        key: 'blog',
        name: '博客',
        component: CardList,
    },
    {
        path: '/about',
        key: 'about',
        name: '关于',
        component: <div>about</div>,
    },
    {
        path: '/contact',
        key: 'contact',
        name: '联系',
        component: <div>contact</div>,
    },
];

export default RouterConfig;
