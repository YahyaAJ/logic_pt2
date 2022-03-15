var n = 9

for (var x = 0; x < n; x++) {
    for (var y = 0; y < n; y++) {
        if (x == y){
            document.write(x * 2 + 1,'&nbsp ')
        }else if (n - y - 1 == x){
            document.write(y * 2,'&nbsp ')
        }else{
            if (n - y - 1 <= x || y >= x){
                document.write('&nbsp','')
            }else{
                document.write(' A &nbsp')
            }if(x >= y || n - x - 1 >= y){
                document.write('&nbsp')
            }else{
                document.write(' B ')
            }if(x < y){
                document.write('')
            }else if(x < n - y - 1){
                document.write('')
            }else{
                document.write('✚ ')
            }if(x > y){
                document.write('')
            }else if(x > n - y - 1){
                document.write('')
            }else{
                document.write('✚ ')
            }
        }
    }
    document.write('<br>')
}        
