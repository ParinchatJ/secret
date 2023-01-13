// ทำเกมทายคำ
// - มีคำใบ้ให้ทุกครั้งที่ตอบเสด 
// - ตอบได้ 3 ครั้งเท่านั้น
// - เฉลยเมื่อผู้เล่นพิมครบ

// - มีกำหนดสัก 3 หมวดหมู่ = แฮรี่ มาเวล โดเรม่อน




// สุ่มเลือก cat
const comAns = () => {
    const harryPotterCat = ['harry potter', 'dobby', 'hagrid']
    const marvelCat = ['thor', 'iron man','hulk']
    const doraemonCat = ['gian', 'nobita', 'doraeman']

    const cat = Math.floor(Math.random()*3)
    const inCat = Math.floor(Math.random()*3)

    if (cat === 0) {
        console.log('harryPotterCat')
    } else if (cat === 1) {
        console.log('marvelCat')
    } else if (cat === 2) {
        console.log('doraemonCat')
    }


        // switch (i) {
        //     case 0:
        //         return 'harryPotterCat'
        //         break
        //     case 1:
        //         return 'marvelCat'
        //         break
        //     case 2:
        //         return 'doraemonCat'
        //         break
        // }

        // if (i===0) {
        //     ranHary = Math.floor(Math.random()*3)
        //     for (let j=0; j<harryPotterCat.length; j++) {
        //         return ranHary === j ? harryPotterCat[j] : console.log('error!') 
        //     }
            
        // } else if (i===1) {
        //     ranMar = Math.floor(Math.random()*3)
        //     for (let k=0; k<marvelCat.length; k++) {
        //         return ranMar === k ? marvelCat[k] : console.log('error!') 
        //     }
            
        // } else if (i===2) {
        //     ranDo = Math.floor(Math.random()*3)
        //     for (let m=0; m<doraemonCat.length; m++) {
        //         return ranDo === m ? doraemonCat[m] : console.log('error!') 
        //     }
            
        // }
    }

// console.log(catagory())


const userInput = (userAns, comAns) => {

    // ค่อยมาหาว่าans ตรงตามประเภทไหม และถูกต้องไหม?
  



    // return ans != catCom[i] ? console.log(`คุณทายผิดเรื่อง กรุณาทายเรื่อง ${catCom}`) : ans
}

const checkAns = (ans) => {
    // เช็คว่าคำตอบนี้ตรงไหม ถ้าไม่ตรงให้ไปถามหา ans2 
}

const run = () => {
    const comAnswer = comAns()
    console.log(comAnswer)
    // const userAns = userInput('harry potter', comAnswer)
    // checkAns()
}

run()

// รับข้อมูลมาอย่าลืมทำเป็น lowcase