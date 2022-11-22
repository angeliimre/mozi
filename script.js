let k=0;
for(let i=0;i<20;i++){
    for(let j=0;j<10;j++){
        document.getElementById("mozi").innerHTML+='<input type="button" data-number="'+k+'" width="20" height="20" value="."/>';
        k++;
    }
    document.getElementById("mozi").innerHTML+='<br/>';
}
document.getElementById("mozi").innerHTML+='<br/><input type="submit" width="40" height="20" value="Küldés"/>';

document.querySelectorAll("input[type='button']").forEach(
    elem=>{
        elem.addEventListener("click",function(){
            if(elem.style.backgroundColor=="green"){
                alert("Ez a hely foglalt!");
            }
            else{
                elem.style.backgroundColor="yellow";
            }
        })
    }
)

document.querySelector("input[type='submit']").addEventListener("click",function(ev){
	ev.preventDefault();
    let tomb=[];
    document.querySelectorAll("input[type='button']").forEach(
        elem=>{
            if(elem.style.backgroundColor=="yellow"){
                tomb.push(elem.dataset.number);
            }
        }
    )
    const setting={
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(tomb)
    }
    fetch("feldolgoz.php?fetch",setting).then(function(ertek){
        return ertek.json();
    }).then(function(ertek){
		ertek.forEach(function(item){
			document.querySelector('[data-number="'+item+'"]').style.backgroundColor="green";
		})
    })
})
fetch("feldolgoz.php").then(function(ertek){
    return ertek.json();
}).then(function(ertek){
		ertek.forEach(function(item){
			document.querySelector('[data-number="'+item+'"]').style.backgroundColor="green";
		})
    })