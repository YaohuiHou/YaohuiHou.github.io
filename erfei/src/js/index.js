~(function() {
  // 语录
  var remarks = [
      '要冒一险！整个生命就是一场冒险，走得最远的人常是愿意去做、愿意去冒险的人。',
      '一个人，如果你不逼自己一把，你根本不知道自己有多优秀。',
      '没有一种不通过蔑视、忍受和奋斗就可以征服的命运',
      '地球是运动的，一个人不会永远处在倒霉的位置。',
      '拥有梦想只是一种智力，实现梦想才是一种能力',
      '只有一条路不能选择——那就是放弃的路；只有一条路不能拒绝，那就是成长的路。',
      '征服畏惧、建立自信的最快最确实的方法，就是去做你害怕的事，直到你获得成功的经验',
      '如果失去了顽强的意志，困难就会给你戴上枷锁。',
      '在世界的历史中，每一伟大而高贵的时刻都是某种热忱的胜利。',
      '人生就是体验的过程，很多时候你后悔的往往是那些你该做但却没有完成的事情。',
      '生活不是等待风暴过去，而是学会在雨中翩翩起舞。',
      '孤独并不可怕，每个人都是孤独的，可怕的是害怕孤独。',
      '我不去想是否能够成功，既然选了远方,便只顾风雨兼程。',
      '现实的压力压的我们喘不过气也压的我们走向成功。',
      '你愿意做渴望拥抱的刺猬还是逢伤必躲的蜗牛。',
      '不能强迫别人来爱自己，只能努力让自己成为值得爱的人。',
      '当你被压力压得透不过气来的时候,记住,碳正是因为压力而变成闪耀的钻石。',
      '现实会告诉你，不努力就会被生活给踩死。无需找什么借口，一无所有，就是拼的理由。',
      '人生道路，绝大多数人，绝大多数时候，人都只能靠自己。',
      '人生舞台的大幕随时都可能拉开，关键是你愿意表演，还是选择躲避。',
      '能把在面前行走的机会抓住的人，十有八九都会成功。',
      '谁，执我之手，消我半世孤独；谁，扶我之肩，驱我一世沉寂。',
      '一个繁华的城市，一条热闹的大街，希望，在那里，永远都会有我们的身影。',
      '岁月漫长，时光短暂，一个人守候，一个人默默等待，清楚注定悲哀的结局，可是还是在等待，这是爱，卑微地落寞在尘埃里。',
      '你错失了夏花绚烂，必将会走进秋叶静羌。任何事，任何人，都会成为过去，不要跟它过不去。',
    ]
    // 音频
  var audioArr = [
    'https://fes.qyerstatic.com/lhTYAseoKV3-ZeCtFowKgdau2Wk9',
    'https://fes.qyerstatic.com/lv1kGDghJppp8cc4g8iP7PjAPq8E',
    'https://fes.qyerstatic.com/lo9530CZaeE2KTdL4U2gilFbVDps'
  ]

  // 图片
  // var backImgArr = [changeBackImage(26, 1)]
  var loadingView = document.querySelector('#loading');
  var Body = document.querySelector('body');
  var remarksH1 = document.querySelector('#remarks');
  var changenew = document.querySelector('.changenew');
  var audio = document.querySelector('#audio');
  var audioBtn = document.querySelector('.audio-btn');
  var searchBtn = document.querySelector('.search');
  var searchView = document.querySelector('.search-view');
  var inputBox = document.querySelector('#input');
  var schoolId = document.querySelector('#school_id');
  var layer = document.querySelector('.layer');
  var allSchollHtml = ''
  var allScholl = []
  var changeScholl = []
  var allNameScholl = {}

  // 刷新
  changenew.addEventListener('click', function() { init() })
    // 音乐播放
  audioBtn.addEventListener('click', function() {
      if (audioBtn.classList.contains('pause')) {
        audio.play()
        audioBtn.innerHTML = '播'
        audioBtn.classList.remove('pause')
      } else {
        audio.pause()
        audioBtn.innerHTML = '禁'
        audioBtn.classList.add('pause')
      }
    })
    // m 搜索
  searchBtn.addEventListener('click', function() {
    form.classList.add('visible')
  })

  // 获取焦点
  inputBox.addEventListener('focus', function() {
    searchView.classList.add('visible')
    layer.classList.add('visible')
  })

  inputBox.addEventListener('input', function(e) {
    if (e.target.value.trim() == '') {
      changeScholl = []
      searchView.innerHTML = allSchollHtml
    } else {
      clearTimeout(inputBox.time);
      setTimeout(function() {
        changeOption(e.target.value)
      }, 500);
    }
  })

  // 选择学校
  searchView.addEventListener('click', function(e) {
    var target = e.target;
    if (target.tagName == 'SPAN') {
      inputBox.value = target.innerHTML
      schoolId.value = target.dataset['id']
    }
    searchView.classList.remove('visible')
    layer.classList.remove('visible')
  })

  // 关闭弹窗
  layer.addEventListener('click', function() {
    searchView.classList.remove('visible')
    layer.classList.remove('visible')
    form.classList.contains('visible') && form.classList.remove('visible')
  })

  // 提交学校
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(form.data);

  })


  function init() {
    Body.style.cssText = 'background-image: url(../img/e' + changeBackImage(26, 1) + '.jpg);'
    remarksH1.innerHTML = remarks[changeBackImage(remarks.length, 0)]

    // backImgArr.push(changeBackImage(26, 1))
    if (!init.play) {
      init.play = true
      audio.src = audioArr[changeBackImage(audioArr.length, 0)]
      audio.play()
    }
  }

  // 加载图片
  function loadImgs(i, n) {
    var img = new window.Image()
    img.onload = img.onerror = function() {
      loadImgs.loadedCount++
        loadingView.querySelector('em').style.cssText = "height:" + 2.7 * loadImgs.loadedCount + "px"
      if (loadImgs.loadedCount == n) {
        loadingView.classList.remove('visible')
      }
    }
    img.src = '../img/e' + i + '.jpg'
  }

  // 随机数
  function changeBackImage(num, c) {
    var random = Math.random() * num
    var i = c ? Math.ceil(random) : Math.floor(random)
    return i
  }

  // 获取所有学校
  function getAllScholl() {
    $.ajax({
      url: 'https://yaohuihou.github.io/erfei/school.json',
      async: false,
      success: function(res) {
        allScholl = res
        res.forEach(function(item, i) {
          allSchollHtml += '<span data-id=' + item.id + '>' + item.name + '</span>'
          var o = {
            index: i,
            name: item.name,
            id: item.id
          }
          if (!allNameScholl[item.add]) {
            allNameScholl[item.add] = []
          }
          allNameScholl[item.add].push(o)
        })
        searchView.innerHTML = allSchollHtml
      },
      error: function(err) {
        console.log(err)
      }
    })
  }

  // 筛选学校
  function changeOption(val) {
    // 城市
    var arr = []
    if (allNameScholl[val]) {
      allNameScholl[val].forEach(function(item) {
        arr.push(allScholl[item.index])
      })
      changeOption.length = val.length
    } else {
      // 全部筛取
      if (changeScholl.length > 0 && changeOption.length && val.length > changeOption.length) {
        // 在之前基础上筛选
        changeScholl.forEach(function(item) {
          if (item.name.indexOf(val) != -1) {
            arr.push(item)
          }
        })
      } else {
        allScholl.forEach(function(item) {
          if (item.name.indexOf(val) != -1) {
            arr.push(item)
          }
        })
      }
    }

    schollHtml(arr)

  }

  // 渲染
  function schollHtml(arr) {
    changeScholl = arr
      // 插入数据
    var _html = ''
    changeScholl.forEach(function(item, i) {
      if (item) {
        _html += '<span data-id=' + item.id + '>' + item.name + '</span>'
      } else {
        _html = '<div>没有找到你想要</div>'
      }
    })
    searchView.innerHTML = _html
  }

  window.onload = function() {
    // 加载图片
    loadImgs.loadedCount = 0
    for (var i = 1; i <= 26; i++) {
      loadImgs(i, 26)
    }
    // 初始化
    init()
      // 请求数据
    getAllScholl()
  }

})()