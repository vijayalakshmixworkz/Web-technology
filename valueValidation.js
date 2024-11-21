
let formData={};

function validation(event){
    const {name,value}=event.target;
    formData={
        ...formData,[name]:value
    };
    console.log("name is"+name+""+"value is"+value)
    if(name=="fullName"&&value.length>4&&value.trim()=\
            {
            console.log(value+" name is valid");

    }else if(name=="fullName"&&value.length<4&&value.trim()){
        console.log(value+"name is invalid");
    }
    

    if(name=="email"&&value.includes("gmail.com")){
        console.log(value+"email is valid");
    }
    else if(name=="email"&&!value.includes("gmail.com")){
        console.log(value+"email is invalid");
    }

    if(name="password"&&value.length==4){
        console.log(value+"password is valid");
    }
    else  if(name="password"&&value.length<4){
        console.log(value+"password is invalid");
    }
    if(name="cfmpassword"&&value.length==4){
        console.log(value+"password is valid");
    }
    else  if(name="cfmpassword"&&value.length<4){
        console.log(value+"password is invalid");
    }
    console.log(formData)
    if(formData.cfmpassword===formData.password)
    {
        console.log("password is matching")
    }
    else if(formData.cfmpassword!=formData.password)
        {
            console.log("password is not matching")
        }
        const button=document.getElementById("button");
        if(
            formData.cfmpassword.length>4&&
            formData.password>4&&
            formData.cfmpassword===formData.password&&
            formData.fullName.length>4
        ){
            button.removeAttribute("disabled");
        }
        else{
            button.setAttribute("disabled","");
        }

       
}
