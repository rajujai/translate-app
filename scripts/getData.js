export default async function (url){
    try{
        let res = await fetch(url);
        let data = await res.json();
        return data;
    }catch (err){
        console.log(err.message);
    }
}