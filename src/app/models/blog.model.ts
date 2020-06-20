export class Blog {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    tags: Tag[];
    user: User
}

export class Tag {
    id: number;
    name: string;
}

export class User {
    id: number;
    name: string;
    email: string;
    providerId: string;
    imageUrl: string;
    resetPin: string;
    createdDate: string;
}