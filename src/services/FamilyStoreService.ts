export let familyFormData : any[] =[]


export default function (){
    function get(){
        return familyFormData

    }
    function set(data:any){
        familyFormData.push(data)
    }
    function del(i:number){
     familyFormData.splice(i, 1)
    }
    function getById(i:number){
        return familyFormData[i]
    }
    function setById(i:number, data:any){
        familyFormData[i] = data
    }
    

    return {
        get,
        set,
        del,
        getById,
        setById,
        
    }
}
