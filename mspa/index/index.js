// 搜索框
const soso = document.querySelector('.soso')
const soBtn = document.querySelector('.soBtn')
soso.addEventListener('input', function () {
  if (soso.value != '') {
    soso.classList.add('sosoX')
    soBtn.classList.add('soBtnX')
  } else {
    soso.classList.remove('sosoX')
    soBtn.classList.remove('soBtnX')
  }
})
// 目录
const boxs = document.querySelectorAll('.boxs')
const boxm = document.querySelectorAll('.boxm')
const boxDisplay = document.querySelectorAll('.disNone')
for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener('click', function () {
    if (document.querySelector('.boxall .boxmX').className === boxm[i].className) {
      boxm[i].classList.remove('boxmX')
      boxDisplay[i].classList.remove('disBlock')
      boxDisplay[i].classList.add('disNone')
      document.querySelector('.bag').classList.add('boxmX')
      document.querySelector('.bag1').classList.add('disBlock')
    } else {
      document.querySelector('.boxall .boxmX').classList.remove('boxmX')
      document.querySelector('.boxm .disBlock').classList.add('disNone')
      document.querySelector('.boxm .disBlock').classList.remove('disBlock')
      boxm[i].classList.add('boxmX')
      boxDisplay[i].classList.add('disBlock')
      boxDisplay[i].classList.remove('disNone')
    }
  })
}

//底部按键
  //返回顶部
  const tops = document.querySelector('#top')
  const tops1 = document.querySelector('#top1')
  function toTop(){
    document.documentElement.scrollTop=0
  }
  tops.addEventListener('click',toTop)
  tops1.addEventListener('click',toTop)
  //分享
  const share = document.querySelector('.share')
  const shareBox = document.querySelector('.shareBox')
  let shareing = false
  share.addEventListener('click',function(){
    if(shareing===false){
      share.classList.add('shareClick')
      shareBox.classList.add('shareBoxClick')
      shareing = true 
    }else{
      share.classList.remove('shareClick')
      shareBox.classList.remove('shareBoxClick')
      shareing = false 
    }
  })
  //夜间模式
  const nightSty = document.querySelector('#nightSty')
  nightSty.addEventListener('click',function(){
    if(nightSty.className==='sun'){
      nightSty.className='night'
    }else{nightSty.className='sun'}
  })
  //设置
  const set = document.querySelector('.seting')
  const setBox = document.querySelector('.setingBox')
  const edit = document.querySelector('.edit')
  let seting = false
  set.addEventListener('click',function(){
    if(seting===false){
      set.classList.add('setingClick')
      setBox.classList.add('setingBoxClick')
      edit.classList.add('editSet')
      seting = true 
    }else{
      set.classList.remove('setingClick')
      setBox.classList.remove('setingBoxClick')
      edit.classList.remove('editSet')
      seting = false 
    }
  })
  const testw = document.querySelector('.testw')
  let editing = false
  edit.addEventListener('click',function(){
    if(editing === false){
      testw.classList.add('testEdit')
      testw.onfocus=''
      edit.innerHTML='完成'
      editing=true
    }else{
      testw.classList.remove('testEdit')
      testw.onfocus=this.blur()
      edit.innerHTML='编辑'
      editing=false
    }
  })
//收起
const rightBoxDown = document.querySelector('.rightBoxDown')
const rightBox = document.querySelector('.rightBox')
const rightTD = document.querySelector('.rightTD')
const rightDisplay = document.querySelector('.rightDisplay')
rightBoxDown.addEventListener('click',function(){
  rightBox.classList.add('rightBoxNone')
  rightTD.classList.add('rightTDX')
})
rightDisplay.addEventListener('click',function(){
  rightBox.classList.remove('rightBoxNone')
  rightTD.classList.remove('rightTDX')
})