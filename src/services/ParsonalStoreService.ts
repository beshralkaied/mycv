export let parsonalFormData : any[] =[]
export let finish: any[] = []
export default function (){
    function get(){
        return parsonalFormData
    }
    function set(data:any){
        parsonalFormData.push(data)
    }
    function getById(i:number) {
      return parsonalFormData[i]
    }
    function setById(i:number, data:any) {
        parsonalFormData[i] = data
    }

    function getFinish() {

        return finish
    }
    
    function setFinish(data:any) {
        finish.push(data)
    }

    return {
        get,
        set,
        getById,
        setById,
        getFinish,
        setFinish,

        
    }
}