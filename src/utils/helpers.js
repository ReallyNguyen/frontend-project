export function filter(list, own = false, like = false) {
    if (own) {
        return list.filter((p) => p.own === true);
    }
    else if (like) {
        return list.filter((p) => p.like === true);
    }

    return list;
}