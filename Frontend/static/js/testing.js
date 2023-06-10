function list_friends() {
    fetch("/data", {
        method: "GET",
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let list = document.getElementById("friends_list");
        let html = "";
        for (let i = 0; i < data.length; i++) {
            html += "<li>" + data[i] + "</li>";
        }
        list.innerHTML = html;
    });
}

document.getElementById("add_friends").addEventListener("click", () => {
    fetch("/data", {
        method: "POST",
    }).then((response) => {
        console.log(response); });
});