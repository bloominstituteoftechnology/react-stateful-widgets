export const removeItem = (items, idx) => {
    return [...items.slice(0, idx), ...items.slice(idx + 1)]
}

export const replaceItem = (items, idx, item) => {
    return [...items.slice(0, idx), item, ...items.slice(idx + 1)]
}