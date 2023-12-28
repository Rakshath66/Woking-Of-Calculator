const input=document.getElementById("number-input");
const res=document.getElementById("res");

function handleClick(val)
{
    const exp=`${input.value}${val.innerText}`;//existing value + clicked value
    input.value=exp;
    if(["+","-","*","/"].includes(val.innerText)) return;//operators should not evaluate
    res.value=eval(exp);//eval automatically evaluates in BODMAS rule
}

function reset()
{
    input.value="";

    res.value="";
}