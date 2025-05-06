document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault(e);

    const vouchers = parseInt(document.getElementById('vouchers').value);
    const amount = parseFloat(document.getElementById('amount').value);

    const voucher0 = "";
    const voucher1 = 100;
    const voucher2 = 300;
    const voucher3 = 500;

    const code1 = "GHSAUB3445JFN88"
    const code2 = "GHSLZGHD8785998"
    const code3 = "GHSEFEBGD677988"

    const result = document.getElementById('result');

    if(amount == voucher0){
        result.innerHTML = `
            <p>
                Please enter the amount proceed 
            </p>
        `
    } else if(amount == voucher1){
        result.innerHTML = `
            <p>
                Congrats your voucher code is ${code1}
            </p>
        `
    } else if(amount == voucher2){
        result.innerHTML = `
            <p>
                Congrats your voucher code is ${code2}
            </p>
        `
    } else if(amount == voucher3){
        result.innerHTML = `
            <p>
                Congrats your voucher code is ${code3}
            </p>
        `
    } else{
        result.innerHTML = `
            <p>
                Invalid Amount!, try again...
            </p>
        `
    }

})