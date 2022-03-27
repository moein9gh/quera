const btn = document.getElementById('submit-btn');
const question = window.location.pathname.split("/")
const questionNumber=question[question.length-1]

const loader = document.getElementById("loader")
const blur = document.getElementById("blur")


btn.addEventListener("click",(e)=>{
    const file = document.getElementById('file');

    if(file.files.length===0) {
        alert("Please choose a .cpp file")
        return
    }
    loader.style.display="block"
    blur.style.display="block"


    const reader = new FileReader();

    reader.onload =async function() {

        const arrayBuffer = this.result,
            array = new Uint8Array(arrayBuffer);

        let res = await fetch("/submit",{
            method:"POST",
            body: JSON.stringify({
                name:file.files[0].name,
                byteArray:array,
                size:file.files[0].size,
                questionNumber
            }),
            headers:{
                "content-type":"application/json"
            }
        })
        res = await res.json()
        console.log(array)

        loader.style.display="none"
        blur.style.display="none"
    }

    reader.readAsArrayBuffer(file.files[0]);


})
