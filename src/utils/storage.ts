export const setItem = (key:string,value:any) =>{
    if(typeof value === "object"){
        value = JSON.stringify(value);
    }
    window.localStorage.setItem(key,value)
}

export const getItem = (key:string)=>{
    const data = window.localStorage.getItem(key) as string;
    try{
        return JSON.parse(data);
    }catch(err){
        return data;
    }
}

export const removeItem = (key:string)=>{
    window.localStorage.removeItem(key);
}

export const removeAllItem = ()=>{
    window.localStorage.clear();
}