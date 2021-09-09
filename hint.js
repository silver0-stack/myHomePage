
    function me_hint(){
        let hint=document.getElementById("me_demo") ;
        if(hint.innerHTML===''){//힌트 버튼 클릭할때
            hint.innerHTML='나: 대학생 3학년 ';
        }else{ //힌트 닫을때
            hint.innerHTML='';
        }
    }
    function father_hint(){
        let hint=document.getElementById("father_demo") ;
        if(hint.innerHTML===''){//힌트 버튼 클릭할때
            hint.innerHTML='아빠: 직장인';
        }else{ //힌트 닫을때
            hint.innerHTML='';
        }
    }
    function mother_hint(){
        let hint=document.getElementById("mother_demo") ;
        if(hint.innerHTML===''){//힌트 버튼 클릭할때
            hint.innerHTML='엄마: 직장인';
        }else{ //힌트 닫을때
            hint.innerHTML='';
        }
    }
    function sis_hint(){
        let hint=document.getElementById("sis_demo") ;
        if(hint.innerHTML===''){//힌트 버튼 클릭할때
            hint.innerHTML='여동생: 대학생 2학년';
        }else{ //힌트 닫을때
            hint.innerHTML='';
        }
    }
    function br_hint(){
        let hint=document.getElementById("br_demo") ;
        if(hint.innerHTML===''){//힌트 버튼 클릭할때
            hint.innerHTML='남동생: 고등학생 1학년';
        }else{ //힌트 닫을때
            hint.innerHTML='';
        }
    }
