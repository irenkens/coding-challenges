module.exports=(a,b,d)=>[...a,...b].sort((a,b)=>d=='asc'?a-b:b-a)