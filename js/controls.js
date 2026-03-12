

function stopInterval(id) {
    if(botWorkInterval[id]){
        clearInterval(botWorkInterval[id]);
        console.log(`INTERVAL CLEARED of id: ${id}`);
        
    }
}

// object to run multiple objects simultaneously and add with ID's as keys
let botWorkInterval = {};

function startBotWork(bot) {
    botWorkInterval[bot.id] = setInterval(() => {
                           const result = bot.work();


                           if(result === 'ERROR'){
                            stopInterval(bot.id);
                            robotDiv.classList.remove('working-border')
                            robotDiv.classList.add('critical-power');
                            shiftBtn.remove();
                            alert(`Battery is ${bot.battery}`)
                           }
                        }, 3000)

    }

export function handleShiftToggle(shiftBtn, bot, robotDiv) {

    if(shiftBtn.innerText === 'Start'){
                        shiftBtn.innerText = 'End';
                        robotDiv.classList.add('working-border');
                        startBotWork(bot)
                    }
                    else {
                        // shiftBtn.innerText = 'Start';
                        stopInterval(bot.id)
                        robotDiv.classList.remove('working-border')
                        shiftBtn.remove();
                    }
}