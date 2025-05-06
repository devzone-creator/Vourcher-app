document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();

    const vouchers = parseFloat(document.getElementById('vouchers').value);
    const amount = parseFloat(document.getElementById('amount').value);
    const voucher1 = 100;
    const voucher2 = 200;
    const voucher3 = 500;

    const code1 = 'GHSBDU211XXCUYV'
    const code2 = 'GHSAUB3445JFN88'
    const code3 = 'GHS5IFHFB4JRJNN'

    const result = vouchers;

    if(amount == " "){
        document.getElementById('result').innerHTML = `
            <p>
                Fill in the inputs. 
            </p>
        `
    } else if(amount == voucher1){
        document.getElementById('result').innerHTML = `
            <p>
                You have successfully bought a 50% voucher, valid for 33 days. 
            </p>
            <p>copy code ${code1}</p>
        `
    } else if(amount == voucher2){
        document.getElementById('result').innerHTML = `
            <p>
                You have successfully bought a 70% voucher, valid for 66 days. 
            </p>
            <p>copy code ${code2}</p>
        `
    } else if(amount == voucher3){
        document.getElementById('result').innerHTML = `
            <p>
                You have successfully bought a 100% voucher, valid for 130 days. 
            </p>
            <p>copy code ${code3}</p>
        `
    }
    else{
        document.getElementById('result').innerHTML = `
            <p>
                Invalid Amount !
            </p>
        `
    }

})