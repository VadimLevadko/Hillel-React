export const getParentAttr = (target, parentSelector, attrName) => {
    return target.closest(parentSelector).getAttribute(attrName);
}

export const copyArr = (arr) => {
    return [...arr]
}