export let Data: any[] = []

export default function () {
    function getDataServer(resource:string) {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener("readystatechange", () => {
              console.log("im in readystat");
              if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
              } else if (request.readyState === 4) {
                reject("coud not fetch data");
              }
            });
            request.open("GET", resource);
            request.send();
            
          });
    }

    return {
        getDataServer
    }
}