const navlinks = document.getElementById('navlinks');
const show = () => navlinks.style.top = "0px";
const hide = () => navlinks.style.top = "-1000px";

const copy = document.querySelector('#copy');
const copyRight = ` copyright ${new Date().getFullYear()} `;
copy.append(copyRight);