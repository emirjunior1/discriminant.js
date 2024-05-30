 let a = document.getElementById('input2')
 let b = document.getElementById('input3')
 let c = document.getElementById('input4')
 let disc =document.getElementById('discriminant')
 let result =document.getElementById('result')
 let btnCalc = document.getElementById('btnCalc')

 function calcutationsdisc(inp1,inp2,inp3) {
    const num1 = Number(inp1.value)
    const num2 = Number (inp2.value)
    const num3 = Number (inp3.value)
    const dis = b.value ** 2-4 * a.value * c.value
    disc.textContent=dis

    if (dis> 0) {
        const x1 = (-b.value + Math.sqrt (dis)) / (2 * a.value)
        const x2 = (-b.value + Math.sqrt (dis)) / (2* a.value)
        result.textContent =` x1=${x1} x2=$ {x2}`
        
    }
    else if (dis ===0) {
        const x = -(b.value / (2 *a.value))
        result.textContent = `x=${x}`

    }
    else if (dis < 0) {
        result.textContent= `no reshenie`
    }
    else {
        result.textContent=`vvedite chisla`
    }
 }
 btnCalc.addEventListener("click",function() {
    calcutationsdisc(a,b,c)
 })
//  const a1=document.getElementById('dis')
// a1.setAttribute('style', 'color:white;background-color:green;')
// const a2=document.getElementById('div')
// a2.setAttribute('style', 'color:white;background-color:black; text-align:center; line-height:40px;')
// const a3=document.getElementById('input2')
// a3.setAttribute('style', 'border:none;border-radius:20px;padding:0 12px;')
// const a4=document.getElementById('input3')
// a4.setAttribute('style', 'border:none;border-radius:30px;padding:0 12px;')
// const a5=document.getElementById('input4')
// a5.setAttribute('style', 'border:none; border-radius:20px;padding:0 12px;')

btnCalc.style.cssText=`
width:100px; height:50px;`

input2.style.cssText=`
;
background-color:black;`
input3.style.cssText=`
 background-color:black`
 input4.style.cssText=`
 background-color:black;`
 dis.style.cssText=`
 text-align:center; background-color:green; `


