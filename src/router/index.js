import VueRouter from 'vue-router';

import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

export default new VueRouter({
	routes: [
		{ path: '/about', component: About },
		{
			path: '/home',
			component: Home,
			children: [
				{
					name: 'news',
					path: 'news',
					component: News,
				},
				{
					path: 'message',
					component: Message,
					children: [
						{
							name: 'detail',
							path: 'detail',
							component: Detail,
							// 連續解構賦值: 將傳遞過來的 $route 解構
							props({ query: { id, title } }) {
								return { id, title };
							},
						},
					],
				},
			],
		},
	],
});
