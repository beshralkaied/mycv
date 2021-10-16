let workFormData : any[] =[]


export default function (){
    function get(){
        return workFormData
    }
    function set(data:any){
        workFormData.push(data)
    }
    function popdata(){
        workFormData.pop()
    }

    return {
        get,
        set,
        popdata,
    }
}