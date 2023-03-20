

const creatingPost = async function () {

    const posts = [{title: "posts"}]

    const createPost = new Promise((res,rej) => {
        setTimeout(() => {
            posts.push({ title: `POST1` })
            res(posts)
        }, 2000);
    })

    let updateLastUserActivityTime = new Promise((res) => {
        setTimeout(() => {
            let updateTime = new Date();
            res(`last updated time: ${updateTime}`)
        }, 5000);
    })

    const deletePost =  new Promise((res, rej) => {
            if (posts.length!=0) {
                posts.pop()
                res()
            } else{
                rej("ERROR")
            }
        })

    function printPost() {
        return posts

    }

 let post1 = await createPost;
    console.log(post1);
    let time = await updateLastUserActivityTime;
    console.log(time);
    // let deletepo = await deletePost;
    let print = printPost();
    console.log(print)

    return post1
}

creatingPost()
