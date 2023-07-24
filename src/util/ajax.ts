export const http={
    get <T>(url:string):Promise<T>{
        return new Promise((reslove)=>{
            const xhr=new XMLHttpRequest()
            xhr.open('GET',url)
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4&&xhr.status==200){
                    setTimeout(() => {
                        reslove(JSON.parse(xhr.responseText))
                    }, 1000);
                }
            }
            xhr.send(null)
        })
    }
}