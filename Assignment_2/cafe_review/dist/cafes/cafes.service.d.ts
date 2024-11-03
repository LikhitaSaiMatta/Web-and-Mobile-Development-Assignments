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
export declare class CafesService {
    private cafes;
    findAll(): Cafe[];
    findOne(id: number): Cafe | undefined;
    create(cafe: Cafe): void;
}
export {};
