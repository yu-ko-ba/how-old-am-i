const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const result = document.getElementById("result");


function main() {
    // 入力欄になにかしら入力されたときの処理を定義する
    year.addEventListener("input", () => {
        year.value = year.value.replace(/[^0-9]/g, "");

        showResult();

        if (year.value.length >= 4 && isFinite(year.value)) {
            month.focus();
        }
    });

    month.addEventListener("input", () => {
        month.value = month.value.replace(/[^0-9]/g, "");

        showResult();

        if (month.value.length >= 2 && isFinite(month.value) && 1 <= month.value && month.value <= 12) {
            day.focus();
        }
    });

    day.addEventListener("input", () => {
        day.value = day.value.replace(/[^0-9]/g, "");

        showResult();
    });

    // WebAssemblyの準備が終わるまで「読み込み中...」と表示しておく
    document.getElementById("nowLoading").style.display = "none";
    document.getElementById("inputField").removeAttribute("hidden");
    document.getElementById("pleaseEnterYourDateOfBirth").removeAttribute("hidden");
    document.getElementById("result").removeAttribute("hidden");
}


function showResult() {
    result.textContent = howOldAmI(year.value, month.value, day.value);
}


// ServiceWorkerの登録をする
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('sw.js', {scope: '/how-old-am-i/'})
        .then(() => { console.log('Service Worker Registered'); });
}


mainWasLoaded = true;
if (wasmWasLoaded && mainWasloaded) {
    main();
}
