const correctAns=['A','B','B','B','A'];
const form=document.querySelector('body > div.form.bg-warning.mt-5 > div > form');
const result=document.querySelector('.result');
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAns=[form.q1.value , form.q2.value , form.q3.value , form.q4.value , form.q5.value];
    // check ans
    userAns.forEach((answer,index)=>{
        if(answer===correctAns[index]){
            score+=20;
        }
        
    });
    scrollTo(0,0);
    // result.querySelector('h1').textContent=`Your Result is ${score}%`;
    result.classList.remove('d-none');

    let output=0;
    const timer=setInterval(()=>{
        result.querySelector('h1').textContent=`Your Result is ${output}%`
        if(output===score){
            clearInterval(timer);
        }
        else{
            output++;
        }
    },30)
});


