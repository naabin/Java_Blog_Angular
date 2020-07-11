import { ImageResponse } from '../shared/services/image-service/image.service';

export class Blog {
    id: number;
    title: string;
    content: string;
    createdDate: string;
    tags: Tag[];
    user: User
    published: boolean;
    image: ImageResponse;
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