// vue-axios
import axios from 'axios'

function timestamp(url){
 //  var getTimestamp=Math.random();
    var getTimestamp=new Date().getTime();
    if(url.indexOf("?")>-1){
        url=url+"&timestamp="+getTimestamp
    }else{
        url=url+"?timestamp="+getTimestamp
    }
    return url;
}

// 请求数据的端口号
const baseUrl = 'https://taoke.mastersheng.com/';
let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + timestamp(_url);
}

const HttpClient =  {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios.get(filterUrl(_url), {params: _params}).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    post(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios({
                url: filterUrl(_url),
                method: 'post',
                data: _params,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    
                },
                transformRequest: [function (data) {
                    let ret = ''
                    for (let it in data) {
                      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                    }
                    return ret
                }], 
            }).then(res => {
                if(!res.data.status && res.data.message == "unauth"){                    
                    return false;
                }               
               
                resolve(res.data)
            }).catch(error => {
                
                reject(error)
            })            
        })
    }
};
export default HttpClient;