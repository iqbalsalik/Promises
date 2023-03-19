const posts = []

let updateLastUserActivityTime = new Promise((res) => {
    setTimeout(() => {
        let updateTime = new Date();
        res(updateTime)
    }, 1000);
})

let count = 1
let createPost = new Promise((res) => {
    setTimeout(() => {
        posts.push({ title: `POST ${count}` })
        count++
        res()
    }, 2000);
})

function printPost() {
    console.log(posts)

}

function deletePost(){
    return new Promise((res,rej)=>{
        if(posts.length){
            posts.pop()
            res()
        }else{
            rej("ERROR")
        }
    })
}

Promise.all([createPost, updateLastUserActivityTime]).then((msg) => {
    printPost()
    console.log(msg)
    deletePost().then(()=>{
        printPost()
    })
})