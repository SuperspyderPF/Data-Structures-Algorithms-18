/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, result = [])  { if (root === null) return result; const queue = [root];  while (queue.length !== 0) { const row = queue.length; const cur = queue.pop(); if (cur.right != null) queue.push(cur.right); if (cur.left != null) queue.push(cur.left); result.push(cur.val)}  for(let i=0;i<result.length;i++) for(let j=i+1;j<result.length;j++) if(result[i]+result[j]===k) return true; return false };
    
    
    
    
    
    
   
        
        
        
        
        
        
        
        
    
    
    
