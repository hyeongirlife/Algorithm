function solution(s,n) {
    let large = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
    let small = "abcdefghijklnmopqrstuvwxyz"
    let result = "";
        for(let i=0; i<s.length; i++){
            let text = s[i];
            if(text === " "){
                result += " ";
                continue
            }
            let textArea = large.includes(text) ? large : small;
            let index = textArea.indexOf(text)+n
            if(index >= textArea.length) index -= textArea.length
            result += textArea[index]
        }
        return result
    }