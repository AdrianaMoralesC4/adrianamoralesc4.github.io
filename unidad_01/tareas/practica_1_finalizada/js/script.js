const input = document.querySelector("input");
input.oninput = () => {
    document.body.style.backgroundColor = input.value;
};