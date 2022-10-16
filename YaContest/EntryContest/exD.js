function generate(cur, open, closed, n){
    if(cur.length === 2*n){
        console.log(cur)
        return cur;
    }
    if(open<n){
        generate(cur+"(",open+1,closed,n);
    }
    if(closed<open){
        generate(cur+")",open,closed+1,n);
    }
}

generate("",0,0,3)


