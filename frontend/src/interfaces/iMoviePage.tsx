import iMovie from "interfaces/iMovie";

interface iMoviePage {
    content: iMovie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}; 

export default iMoviePage;