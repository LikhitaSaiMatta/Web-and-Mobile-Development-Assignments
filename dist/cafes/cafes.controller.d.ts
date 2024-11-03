import { CafesService } from './cafes.service';
interface Cafe {
    id: number;
    name: string;
    location: string;
    rating: number;
    reviews: Review[];
}
interface Review {
    userId: number;
    rating: number;
    comment: string;
}
export declare class CafesController {
    private readonly cafesService;
    constructor(cafesService: CafesService);
    findAll(): Cafe[];
    findOne(id: string): Cafe | undefined;
    create(cafe: {
        id: number;
        name: string;
        location: string;
        rating: number;
    }): {
        message: string;
    };
}
export {};
