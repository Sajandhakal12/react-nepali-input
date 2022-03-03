function LTrim(value) {
  const re = /\s*((\S+\s*)*)/
  return value.replace(re, '$1')
}

// Removes ending whitespaces
function RTrim(value) {
  const re = /((\s*\S+)*)\s*/
  return value.replace(re, '$1')
}

// Removes leading and ending whitespaces
function trim(value) {
  return LTrim(RTrim(value))
}

const obj = {}

function setUnicode(e, fontType = 'traditional') {
  if (e.ctrlKey || e.altKey) return ''
  const unicode = e.charCode ? e.charCode : e.keyCode
  let converterInit
  if (!obj[e.target.id]) {
    obj[e.target.id] = new UnicodeConst()
    converterInit = obj[e.target.id]
  } else {
    converterInit = obj[e.target.id]
  }
  const check = true
  if (check) {
    let newValue = converterInit.toUnicode(
      String.fromCharCode(unicode),
      e.target,
      fontType
    )
    e.preventDefault()
    if (typeof newValue === 'object') {
      return newValue
    }
    if (newValue === null) return ''
    if (newValue === '') newValue = String.fromCharCode(unicode)
    // let value = converterInit.insertAtCursor(e.target, "", 0);
    const value = converterInit.insertAtCursor(e.target, newValue, 0)

    return value
  }
}

function UnicodeConst() {
  this.buffer = ''
  this.found = false
  this.buffStart = false
  this.stepBack = 0
  this.cursor_position_before_hand = 0
  this.cursor_position_after_hand = 0
  this.toUnicode = toUnicode
  this.insertAtCursor = insertAtCursor
}

function insertAtCursor(myField, myValue, backTrack) {
  if (
    myField.selectionStart ||
    myField.selectionStart === '0' ||
    myField.selectionStart === 0
  ) {
    const startPos = myField.selectionStart - backTrack
    const endPos = myField.selectionEnd
    const newEndPos = startPos + myValue.length
    const value =
      myField.value.substring(0, startPos) +
      myValue +
      myField.value.substring(endPos, myField.value.length)

    return { value, newEndPos }
  } else {
    const newEndPos = myField.value.length + myValue.length
    const value = myField.value + myValue

    return { value, newEndPos }
  }
}

/* -- End Hiding Here --> */

function caseA(val) {
  const indexCaseA = [
    'em',
    'If',
    'if',
    ')f',
    'f]',
    'f}',
    'cf',
    'cf]',
    'cf}',
    'Qm',
    'km',
    'O{',
    'qm',
    'pm'
  ]
  const valueCaseA = [
    'झ',
    'क्ष ',
    'ष',
    'ण',
    'ो',
    'ौ',
    'आ',
    'ओ',
    'औ',
    'क्त',
    'फ',
    'ई',
    'क्र',
    'ऊ'
  ]
  if (getUcIndex(indexCaseA, val) !== -1)
    return valueCaseA[getUcIndex(indexCaseA, val)]
  else return false
}

function toUnicode(char, target, fontType) {
  let unicode, font
  if (fontType === 'traditional') {
    unicode =
      'splsplबsplदsplअsplमsplभsplाsplनsplजsplष्splवsplपsplिsplऽspl splलsplयsplउsplत्रsplचsplकsplतsplगsplखsplधsplहsplथsplशsplब्splद्यsplऋsplम्splभ्splँsplन्splज्splक्ष्splव्splप्splीsplःsplल्splइsplएsplत्तsplच्splक्splत्splग्splख्splध्splह्splथ्splश्spl१spl२spl३spl४spl५spl६spl७spl८spl९spl०spl।splस्spl,splसsplढsplडsplज्ञsplद्दsplरुsplुsplण्splेsplृsplैsplर्splञsplञ्splघsplद्धsplछsplटsplठspl-spl)splंspl॰spl्रsplरsplूspl्splङsplश्रspl?splsplट्टsplड्ढspl+splspl/splठ्ठsplspl(spl)splहृspl&quot;splरूsplङ्कsplन्नsplङ्गsplङ्खsplङ्घsplsplsplक्कspl=spl×splspl;spl&#39;spl!spl%splsplsplद्मsplsplsplय्splक्षsplद्वsplsplॐsplsplsplषsplिँsplफ्splऊsplज्जsplत्रsplत्त्splद्भsplझsplझ्splॅsplल्लsplऋsplsplच्चsplत्र्splsplsplऽsplsplsplsplsplॅsplध्रsplड्डsplsplsplद्रspl्र'
    font =
      'spl splasplbsplcspldsplesplfsplgsplhsplispljsplkspllsplmspl splnsplosplpsplqsplrsplsspltsplusplvsplwsplxsplysplzsplAsplBsplCsplDsplEsplFsplGsplHsplIsplJsplKsplLsplMsplNsplOsplPsplQsplRsplSsplTsplUsplVsplWsplXsplYsplZspl1spl2spl3spl4spl5spl6spl7spl8spl9spl0spl.spl:spl,spl;spl(spl*spl!spl@spl?spl\'spl)spl]spl[spl}spl{spl`spl~spl#spl$spl%spl^spl&spl-spl_spl+spl=spl|spl/spl"splspl<spl>splªspl«spl§spl°spl±spl´splµspl¶spl¯spl¸spl¹splÅsplÆsplÈsplËsplÌsplÍsplÎsplÏsplÒsplÓsplÕsplÖspl×splØsplÙsplÚsplÛsplÜsplÝsplÞsplßsplàsplásplâsplãsplåsplæsplçsplèsplésplêsplësplìsplísplîsplïsplðsplñsplòsplósplôsplõsplöspl÷spløsplùsplˆsplˉspl˜splμspl‐spl–spl—spl‘spl„spl•spl…spl‰spl›spl«'
  } else if (fontType === 'romanized') {
    font =
      '﻿splasplbsplcspldsplesplfsplgsplhsplispljsplkspllsplmsplsplnsplosplpsplqsplrsplsspltsplusplvsplwsplxsplysplzsplAsplBsplCsplDsplEsplFsplGsplHsplIsplJsplKsplLsplMsplNsplOsplPsplQsplRsplSsplTsplUsplVsplWsplXsplYsplZspl1spl2spl3spl4spl5spl6spl7spl8spl9spl0spl.spl:spl,spl;spl(spl*spl!spl@spl?spl\'spl)spl]spl[spl}spl{spl`spl~spl#spl$spl%spl^spl&spl-spl_spl+spl=spl|spl/spl"spl\\spl<spl>splªspl«spl§spl°spl±spl´splµspl¶spl¯spl¸spl¹splÅsplÆsplÈsplËsplÌsplÍsplÎsplÏsplÒsplÓsplÕsplÖspl×splØsplÙsplÚsplÛsplÜsplÝsplÞsplßsplàsplásplâsplãsplåsplæsplçsplèsplésplêsplësplìsplísplîsplïsplðsplñsplòsplósplôsplõsplöspl÷spløsplùsplˆsplˉspl˜splμspl‐spl–spl—spl‘spl„spl•spl…spl‰spl›spl«'
    unicode =
      'splाsplबsplचsplदsplेsplउsplगsplहsplिsplजsplकsplलsplमsplsplनsplोsplपsplटsplरsplसsplतsplुsplवsplौsplडsplयsplषsplआsplभsplछsplधsplैsplऊsplघsplअsplीsplझsplखsplsplंsplणsplओsplफsplठsplृsplशsplथsplूsplँsplऔsplढsplञsplऋspl१spl२spl३spl४spl५spl६spl७spl८spl९spl०spl।splspl,splsplsplsplsplsplsplsplsplएsplइsplऐsplईsplsplsplsplsplsplsplspl-splsplsplsplःspl्splsplॐsplङsplsplsplsplsplsplsplsplsplsplspl(spl)splहृspl"splरूsplङ्गsplन्नsplङ्गsplङ्खsplङ्घsplsplsplक्कspl=spl×splspl;spl\'spl!spl%splsplsplद्मsplsplsplय्splक्षsplद्वsplsplॐsplsplsplषsplिँsplफ्splऊsplज्जsplत्रsplत्त्splद्भsplझsplझ्splॅsplल्लsplऋsplsplच्चsplत्र्splsplsplऽsplsplsplsplsplॅsplध्रsplड्डsplsplsplद्रspl्र'
  }
  font = font.split('spl')
  unicode = unicode.split('spl')

  // console.log(font, unicode);
  const initCheck = ['e', 'I', 'i', ')', 'f', 'c', 'Q', 'k', 'O', 'q', 'p']

  if (getUcIndex(initCheck, char) !== -1) this.buffStart = true
  if (this.buffStart) this.buffer += char
  if (trim(char) === '') {
    this.buffStart = false
    this.buffer = ''
  }
  this.cursor_position_before_hand = this.cursor_position_after_hand
  this.cursor_position_after_hand = doGetCaretPosition(target)
  if (caseA(this.buffer)) {
    const bufferText = caseA(this.buffer)
    this.found = true
    let backTrack = 1
    if (bufferText === 'ष' || bufferText === 'ण') {
      backTrack = 2
      this.stepBack = 1
    } else if (trim(bufferText) === 'क्ष') {
      backTrack = 4
      this.stepBack = 1
    } else if (trim(bufferText) === 'क्त' || trim(bufferText) === 'क्र') {
      backTrack = 3
    }

    if (
      this.cursor_position_after_hand ===
        this.cursor_position_before_hand + backTrack ||
      this.cursor_position_after_hand === this.cursor_position_before_hand
    ) {
      const value = this.insertAtCursor(target, trim(bufferText), backTrack)

      return value
    } else {
      this.buffStart = false
      this.buffer = ''
    }
  } else if (this.buffer.length > 1) {
    this.buffStart = false
    this.buffer = ''
    if (getUcIndex(initCheck, char) !== -1) {
      this.buffStart = true
      this.buffer += char
    }
  }

  if (unicode[getUcIndex(font, char)] !== 'undefined')
    return unicode[getUcIndex(font, char)]
}

function getUcIndex(arr, ch) {
  let myPosition = -1
  for (let i = 0; i < arr.length; i++) {
    if (trim(arr[i]) === trim(ch)) {
      myPosition = i
      break
    }
  }

  return myPosition
}

function doGetCaretPosition(target) {
  let CaretPos = 0

  if (target.selectionStart || target.selectionStart === '0')
    CaretPos = target.selectionStart

  return CaretPos
}

export { setUnicode }
