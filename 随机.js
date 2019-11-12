// 随机生成  区间[n-m) 整数
function fn(n,m) {
    let r = Math.random();
r = r * (m-n+1) + n;
r = Math.floor(r);
alert(r)
}
fn(0,10)



// 随机生成颜色
function fn(n,m) {
    let r = Math.floor(Math.random()*(m-n+1)+n);
    return r;
}
let r = fn(0,255);
let g = fn(0,255);
let b = fn(0,255);
let rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
alert(rgb)



// 随机生成color   ---十六进制
function sj() {
      var s = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
      var color = ["#"];
      for(var i = 0; i < 6; i++){
        var r = Math.random();
        r = r * s.length;
        r = Math.floor(r);
        color.push(s[r]);
      }
      return color.join('');
    }
    alert(sj());