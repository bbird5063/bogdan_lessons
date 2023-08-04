const newPost = (post, addedAt = Date()) => {
    return {
        ...post,
        addedAt,
    }
}
const firstPost = {
    id: 1,
    author: 'Bogdan',
}
console.table(newPost(firstPost))