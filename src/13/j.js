const str = "abc defffffff sdfsfd";
const re = /[a-z]{4,}/g;
const res = str.replaceAll(re, (p0) => {
  const l = p0.length;
  return Array(l).fill('*').join('');
});

console.log(res);
