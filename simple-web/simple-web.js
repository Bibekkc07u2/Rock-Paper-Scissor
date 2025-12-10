 function subscribe()
    {
        const buttonElement = document.querySelector('.js-subscribe-button');
    if(buttonElement.innerText === 'Subscribe')
{
    buttonElement.innerText = 'Subscribed';
}
else{
    buttonElement.innerText = 'Subscribe';
}
    }

    function calculateTotal ()
    {
        let money = document.querySelector('.shipping-cost');
    let cost = money.value;
    cost = Number(cost)
    if(cost<40)
    {
        cost +=10;
    }
    document.querySelector('.js-cost-display')
    .innerHTML = `$${cost}`;
    }