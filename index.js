//Your Code here

let firstAnswer = window.prompt("Do you head left or right?");
if (firstAnswer === 'left'){
    let secondAnswer = window.prompt("You come across a stray cat. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?")
    if (secondAnswer === "follow" || secondAnswer === "follow it"){
        let thirdAnswer = window.prompt("You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsistig off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.")
        if (thirdAnswer === "stay"){
            window.alert("You live happily amongst ")
        }else if (thirdAnswer === "spread the word" || thirdAnswer === "tell the world" || thirdAnswer === "alert the world"){
            window.alert("After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend, nonetheless." )
        }
    else if(secondAnswer === "continue"){
        let thirdAnswer = window.prompt("You cpme across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up towards the light. Which do you take?")
        if(thirdAnswer === "ladder" || thirdAnswer === "take the ladder" || thirdAnswer === "the ladder"){
            window.alert("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs. Sheepish, you return home.")
        }
        else if (thirdAnswer === "stairs" || thirdAnswer === "staircase" || thirdAnswer === "the stairs" || thirdAnswer === "the staircase"){
            window.alert("After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
        }
    }
    }
}else if (firstAnswer === "right"){
    let secondAnswer = window.prompt("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. WHich path do you take?")

}