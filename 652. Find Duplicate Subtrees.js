findDuplicateSubtrees=r=>{v=new Map();w=[];x=u=>{if(!u)return'x';id=u.val+','+x(u.left)+','+x(u.right);v.set(id,(v.get(id)||0)+1);if(v.get(id)===2)w.push(u);return id;};x(r);return w;}