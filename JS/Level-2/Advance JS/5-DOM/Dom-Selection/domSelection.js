    // console page work-------------------------------------->

        // let header=document.getElementById('head')      //h1 element will show on console
        // console.log(header);

        // let header2=document.getElementsByClassName('head2')    //HTML collection by class name
        // console.log(header2);
        
        // let header3=document.getElementsByTagName('h1')     //HTML collection by tag name
        // console.log(header3);
        

        let paras=document.querySelectorAll('p')    //Nodelist by querySelctorAll
        // console.log(paras);
        // or by using loop
        // for(let i=0;i<paras.length;i++){        //shows element separately
        //     console.log(paras[i]);
            
        // }

    // functions------------------------------------>

        let btn=document.querySelector('button')        
        function red(){
            btn.style.backgroundColor='red'
        }


        let btn2=document.getElementById('blu')
        function blue(){
            btn2.style.backgroundColor='blue'
        }

        