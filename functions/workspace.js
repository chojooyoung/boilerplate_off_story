const axios = require('axios')
// exports.handler = async(event) => {
    //     const options = JSON.parse(event.body)
    //     const { id = '', method, body } = options
    //     const {data} = await axios({
        //         netlify 의  serverless function을 이용해도, 본 코드 작성문을 통해서 보안이 필요한 데이터에 접근 가능.
        //         그러므로, 환경 변수를 통해서 이러한 약점도 보안한다
        //         url: `https://kdt.roto.codes/documents/${id}`,
        //         method,
        //         headers: {
            //             'Content-Type': 'application/json',
            //             'x-username': 'leon'
            //         },
            //         // axios는 body대신 data사용 및 메서드 체이닝 필요 없음
            //         data: body
            //     })
            
//     return {
    //         statusCode: 200,
//         body: JSON.stringify(data)
//     }
// }

require('dotenv').config() // 현재 프로젝트의 .env파일을 읽어서, process.env라는 전역 변수로 넣어줌
const { API_ENDPOINT, API_KEY } = process.env

exports.handler = async(event) => {
    const options = JSON.parse(event.body)
    const {method, movieName, page, movieId, plot } = options
    const requestParam = movieName ? `&s=${movieName}&page=${page}` : `&i=${movieId}&plot=${plot}`
    const url = `${API_ENDPOINT}${API_KEY}` + requestParam
    const {data} = await axios({
        url,
        method,
    })

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}