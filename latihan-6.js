var n = 9;

for (x = 0; x < n; x++){
    for (y = 0; y < n; y++){
        if(x < y){
            document.write('✕ ','&nbsp')
        }else if(x < n - y - 1){
            document.write('✕ ','&nbsp')
        }else{
            document.write('✚ ','&nbsp')
        }
    }
    document.write('<br>')
}