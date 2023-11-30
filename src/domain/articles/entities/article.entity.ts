import { Mutable } from "src/utils/types";

export type Article = {
    id: number;
    title: string;
    description: string;
    body: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type MutableArticle = Mutable<Article>;
