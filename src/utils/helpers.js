
const urlHandler =(e)=>{

    const files=e.target.files
    console.log(files)
    const url=[]
    for (let i=0;i<files.length;i++){
      const fr= new FileReader()
      fr.onload=()=>{
        console.log(fr.result)
        url.push(fr.result)

      }
      fr.readAsDataURL(files[i])
    }
    
   }
   export {urlHandler}