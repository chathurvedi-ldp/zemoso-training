
var content={
    "Table-1":{count:0,cost:0,item:[]},
    "Table-2":{count:0,cost:0,item:[]},
    "Table-3":{count:0,cost:0,item:[]},
    "Table-4":{count:0,cost:0,item:[]},
    "Table-5":{count:0,cost:0,item:[]},
}
//var content=JSON.parse(JSON.stringify(contenthead));
sessionStorage.setItem('Table',JSON.stringify(content));
var dish={
    'Crusty Garlic Focaccia with Melted Cheese':105,
    'French Fries':120,
    'Home Country Fries with Herbs':130,
    'French Fries with Cheese':140,
    'Chicken 65':200,
    'Panner 65':140,
    'CB':140,
    'MB':140,
    'Ice cream':40,
    'Rasagolla':40,
    'Coke':60,
    'Milkshake':80
}
function myFunction1() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("b")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function myFunction2() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL2");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("b")[0];
        b=a.className;
        txtValue = a.textContent || a.innerText;
        if (b.toUpperCase().indexOf(filter)>-1 || txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function sort() {
    var list, i, run, li, stop;
    list = document.getElementsByClassName("container-2");
    run = true;
    while (run) {
        run = false;
        li = list[0].getElementsByTagName("div");
        for (i = 0; i < (li.length - 1); i++) {
            stop = false;
            if (li[i].querySelector('b').innerHTML.toLowerCase() > 
                li[i + 1].querySelector('b').innerHTML.toLowerCase()) {
                stop = true;
                break;
            }
        }
        if (stop) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            run = true;
        }
    }
//var parent=document.getElementById("myUL");
//var c=parent.getElementsByTagName("div");
}


function drag(ev){
    //alert(ev.target.id,typeof ev.target.id)
    ev.dataTransfer.setData("text",ev.target.id);
}
function allowDrop(ev){
    ev.preventDefault();
}
function drop(ev){
    // alert(ev.target.id);
    ev.preventDefault();
    const data=ev.dataTransfer.getData("text");
    const parent1=document.getElementById(data);
    // const collection=parent.children;
    const itemname=parent1.querySelector('b').innerHTML;
    const price=parent1.querySelector('h5').innerHTML;
    // alert(itemname);
    // alert(price);
    for(const i in content){
        // alert(i+" "+typeof i);
        // alert(ev.target.id+" "+typeof ev.target.id);
        if(i==ev.target.id){
            // alert("in if"+ev.target.id);
            // alert(content[i].conunt);
            content[i].count+=1;
            // alert(content[i].count);
            content[i].cost+=parseFloat(price);
            content[i].item.push(itemname);
        }
    }
    sessionStorage.setItem('Table',JSON.stringify(content));
    var obj=JSON.parse(sessionStorage.getItem('Table'));
    //alert(ev.target.id);
    var a=ev.target.id;
    let parent2=document.getElementById(a);
    for(const i in content){
        if(i==ev.target.id){
            let cha=parent2.querySelector('h5');
            cha.textContent=`Rs.${obj[i].cost} | Total items: ${obj[i].count}`;
            
       }
    }
}
//<h2>Table-1 | Order Details</h2>
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
//var modal1 = document.getElementById("myModal1");
function bill(ev){
    if(ev.target.tagName=='B'){
        //alert(ev.target.id)
        document.getElementById("first").textContent=`${ev.target.textContent} | Order Details`;
        var table=document.getElementById(ev.target.id).textContent;
        //alert(table);
        var obj=JSON.parse(sessionStorage.getItem('Table'));
        if(obj[table].count>0){
        for(const i in content){
            //alert(i)
            if(i==table){
                let items=obj[i].item;
                var x=document.createElement('TABLE');
                x.setAttribute("id","myTable");
                x.style.textAlign="center";
                document.getElementsByClassName("modal-body")[0].appendChild(x);
                var row=x.insertRow(0);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = "S.No";
                cell2.innerHTML = "Item";
                cell3.innerHTML = "Price";
                const counts = items.reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
                  }, {});
                var total_cost=0;
                function update(value){
                    alert(value);
               }
                for(let i=0;i<Object.keys(counts).length;i++){
                    var row=x.insertRow(-1);
                    row.setAttribute("class","myRow");
                    //console.log(row.className);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    cell1.innerHTML = i+1;
                    cell2.innerHTML = Object.keys(counts)[i];
                    cell3.innerHTML = parseFloat(dish[Object.keys(counts)[i]]);
                    var input=document.createElement("input");
                    input.setAttribute("class","myInput");
                    //input.setAttribute("onch","myInput");
                    input.setAttribute("type","number");
                    input.value=Object.values(counts)[i];
                    cell4.appendChild(input);
                    var remove=document.createElement("BUTTON");
                    remove.setAttribute("class","removeit");
                    remove.textContent="remove";
                    cell5.appendChild(remove);
                    total_cost += parseFloat(input.value*dish[Object.keys(counts)[i]]);
                }
                
                var row=x.insertRow(-1);
                row.setAttribute("class","lastRow");
                var cell=row.insertCell(0);
                var cell_total=row.insertCell(1);
                var cell_totalcost=row.insertCell(2);
                var cell_bill=row.insertCell(3);
                cell_total.innerHTML='Total';
                cell_totalcost.innerHTML=total_cost;
                var button=document.createElement("button");
                cell_bill.appendChild(button);
                cell_bill.getElementsByTagName('button')[0].innerHTML="BILL";
                button.addEventListener('click',function(event) {
                    var child=x.children[0];
                    alert(`Thank You, Your bill is  : ${child.getElementsByClassName("lastRow")[0].children[2].textContent}`);
                    // document.getElementById("first1").textContent=`Thank You, Your bill is  : ${child.getElementsByClassName("lastRow")[0].children[2].textContent}`;
                    // modal1.style.display="block";
                    event.target.parentElement.parentElement.parentElement.parentElement.remove();
                    var a={count:0,cost:0,item:[]};
                    content[table]=a;
                    sessionStorage.setItem('Table',JSON.stringify(content));
                    ev.target.parentElement.parentElement.getElementsByTagName("h5")[0].innerHTML='Rs.0 | Total items: 0';
                    modal.style.display = "none";
                });
                
                
                var remove_buttons=document.getElementsByClassName("removeit");
                for(let i=0;i<remove_buttons.length;i++){
                    var button=remove_buttons[i];
                    button.addEventListener('click', function(event) {
                        var buttonclicked=event.target;
                        buttonclicked.parentElement.parentElement.remove();
                        updateBillTotal();
                    })
                }

                var inputs=document.getElementsByClassName("myInput");
                for(let i=0;i<inputs.length;i++){
                    var input=inputs[i];
                    input.addEventListener('change',function(event){
                        var inputChanged=event.target;
                        if(isNaN(inputChanged.value)||inputChanged.value<=0){
                            inputChanged.value=1;
                        }
                        updateBillTotal();
                    })
                }                

                function updateBillTotal(){
                    var rows=x.children[0].getElementsByClassName("myRow");
                    var total=0;
                    for(var i=0;i<rows.length;i++){
                        var row=rows[i];
                        row.getElementsByTagName("td")[0].textContent=i+1;
                        var cost=parseFloat(row.getElementsByTagName("td")[2].textContent);
                        //var count=parseFloat(row.getElementsByTagName("td")[3].getElementByClassName("myInput")[0].value);
                        count=parseFloat(row.getElementsByTagName("td")[3].getElementsByClassName("myInput")[0].value);
                        total+=cost*count;
                    }
                    //console.log(total);
                    var child=x.children[0];
                    child.getElementsByClassName("lastRow")[0].children[2].textContent=total;
                    
                }
           }

        }
        modal.style.display = "block";
    }
    else{
        
        var p=document.createElement("h3");
        p.setAttribute("id","para");
        p.textContent="No orders yet";
        document.getElementsByClassName("modal-body")[0].appendChild(p);
        modal.style.display = "block";
    }

    }
}

span.onclick = function()
 {
    //sessionStorage.clear();
    var element =  document.getElementById('para');
    if (typeof(element) != 'undefined' && element != null)
    {
        element.remove();
    }
    else{
        document.getElementById("myTable").remove();
    }
    modal.style.display = "none";
}
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
// var span1 = document.getElementsByClassName("close")[1];
// span.onclick = function()
//  {
    
//     modal.style.display = "none";
// }