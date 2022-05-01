function solution(s) {
    if(s.length % 2 === 0){
        return s.slice(Math.ceil(s.length/2)-1,Math.ceil(s.length/2)+1)
    }else{
        return s.slice(Math.ceil(s.length/2)-1,Math.ceil(s.length/2))
    }
    }