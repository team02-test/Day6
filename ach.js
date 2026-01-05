// posts를 받아온다
const postService = (() => {
    const getList = async (callback) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const posts = await response.json();

            if (callback) {
                callback(posts);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return { getList: getList };
})();

// userId가 7인 게시글만 조회
// 그 중 id와 title만 출력

// [조회 모듈] - userId가 7인 게시글만 가져오기

// [출력 모듈] - id과 title만 출력

// [실행]
