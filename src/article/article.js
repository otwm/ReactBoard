import {Record} from "immutable";

export const Article = new Record({
    id: 0,
    title: "article title",
    content: "content",
    createDate: new Date(),
    updateDate: null,
    hit: 0
});
