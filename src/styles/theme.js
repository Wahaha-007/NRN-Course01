// เดี๋ยวนี้มันง่ายขนาดนี้แล้วเหรอ เอาเป็นว่าคิดว่าเป็น css ละกันอย่าไปยุ่งกับมันมาก เดี๋ยวไม่สวย

import { DefaultTheme } from 'react-native-paper';

export const BlackTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#1f1f1f',
		background: '#000000',
		text: '#ffffff',
		surface: '#121212',
	},
};
