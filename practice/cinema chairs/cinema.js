var selectedList = [];
        var count = 0;
        var row = 0;
        var col = 0;
        var intervals = [];

        function setClick(id){
            const index = selectedList.indexOf(id);
            var td = document.getElementById(id);

            if(index == -1){ 
                td.style.background = "red";
                selectedList.push(id);
                count++;
                var time = 0;
                var intervalId = setInterval(() => {
                    time++;
                    if(time>5){
                        clearInterval(intervalId);
                        td.style.background = "white";
                        selectedList.splice(index,1);
                        intervals.splice(index,1);
                        count--;
                        document.getElementById('count').innerText = count;
                        td.innerText = id;
                    }else{
                        td.innerText = time;
                    }
                },1000);
                intervals.push(intervalId);

                if(count>8){
                    intervals.splice(index,1);
                    selectedList.splice(index,1);
                    td.style.background = "white";
                    count--;
                    document.getElementById('count').innerText = count;
                    td.innerText = id;
                    clearInterval(intervalId);
                    alert('نمیتوانید بیشتر از 8 صندلی انتخاب کنید')
                }

            }else{
                td.style.background = "green";
                clearInterval(intervals[index]);
                td.innerText = id;
                td.onclick = null;  
            }
            document.getElementById('count').innerHTML = count;
            if(count === row*col){
                alert('ظرفیت تکمیل شده است')
            }
            
            console.log(selectedList);
            console.log(intervals);
        }


        function createHall(){
            row = document.getElementById('row').value;
            col = document.getElementById('col').value;
            var table = document.createElement("table");
            table.classList.add("table1");

            for(let i=0;i<row;i++){
                var tr = document.createElement("tr");
                for(let j=1;j<=col;j++){ 
                    var tdId = String.fromCharCode(i+65)+j;
                    var td = document.createElement("td");
                    var txt = document.createTextNode(tdId);
                    td.appendChild(txt);
                    tr.appendChild(td);
                    td.classList.add("td1");
                    td.setAttribute("id",tdId);
                    td.setAttribute("onclick",'setClick(this.id)');
                }
                table.appendChild(tr);
            }
            document.body.appendChild(table);
        }