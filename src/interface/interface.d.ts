export interface Advantages {
	id: number;
	icon: string;
	title: string;
	description: string;
}

export interface Nav {
	id: number;
	label: string;
}

export interface Shop {
	id: number;
	img: string;
	title: string;
	price?: string;
}

export interface Services {
	id: number;
	icon: string;
	title: string;
	description: string;
}

export interface Categories {
	id: number;
	icon: string;
	title: string;
}

export interface News {
	id: number;
	title: string;
	description: string;
	date: string;
}

export interface Faq {
	id: number;
	label: string;
}
