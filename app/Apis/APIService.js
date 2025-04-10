export default class APIService {
    // http://127.0.0.1:5328
    // https://next-template-pi-kohl.vercel.app/api/recycle
    // Insert an article
    // static recycle(body) {
    //     return fetch(`http://127.0.0.1:5328/api/sentiment`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(body)
    //     })
    //     .then(response => response.json())
    //     .catch(error => console.log(error))
    // }
    static sentiment() {
        return fetch(`https://campguide-tawny.vercel.app/api/sentiment`, {
            method: 'GET'
        })
        .then(response => response.json())
        .catch(error => console.log(error));
    }
    
    static chat(body) {
        return fetch(`https://campguide-tawny.vercel.app/api/chat`, {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => response.json())
        .catch(error => console.log(error))
    }

}