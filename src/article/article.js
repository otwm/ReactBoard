import {Record} from "immutable";

export const Article = new Record({
    id: 0,
    title: "",
    content: "",
    createDate: null,
    updateDate: null,
    hit: 1,
    author: null
});
