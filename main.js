// ทำเกมทายคำ
// - มีคำใบ้ให้ทุกครั้งที่ตอบเสด 
// - ตอบได้ 3 ครั้งเท่านั้น
// - เฉลยเมื่อผู้เล่นพิมครบ

// - มีกำหนดสัก 3 หมวดหมู่ = แฮรี่ มาเวล โดเรม่อน


const harryPotterCat = ['harry potter', 'dobby', 'hagrid']
const marvelCat = ['thor', 'iron man','hulk']
const doraemonCat = ['gian', 'nobita', 'doraeman']

// สุ่มเลือก cat
const comAns = () => {

    const cat = Math.floor(Math.random()*3)
    const inCat = Math.floor(Math.random()*3)

    if (cat === 0) {
        return harryPotterCat[inCat]
    } else if (cat === 1) {
        return marvelCat[inCat]
    } else if (cat === 2) {
        return doraemonCat[inCat]
    } else {
        console.log('error')
    }
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
    const userAns = userInput('harry potter', comAnswer)
    checkAns()
}

run()

// รับข้อมูลมาอย่าลืมทำเป็น lowcase