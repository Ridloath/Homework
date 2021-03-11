function Name(a = prompt("Enter your name","Name")){
    if (true != isNaN(a)){
        return Name(a=prompt("Name should only contain letters","Name"))
    }else if (a.length <= 3){
        return Name(a=prompt("Name Should be at least four letters","Name"))
    }else if (a[0]!= a[0].toLocaleUpperCase('en-US')){
        return Name(a=prompt("Name Should begin with capital letter","Name"))
    }else{
        console.log(a)
        return a
    }
}

Name()
